<template>
  <div class="maps">
    <div class="search-input row">
      <vue-autosuggest
        class="col-6 search-item"
        v-model="textSearchFrom"
        :suggestions="suggestLocation"
        :get-suggestion-value="getSuggestionValue"
        :input-props="{
          id: 'autosuggest__input',
          placeholder: 'Điểm bắt đầu',
        }"
        @selected="selectHandlerFrom"
      >
        <template
          slot-scope="{ suggestion }"
          style="display: flex; align-items: center"
        >
          <span
            class="my-suggestion-item"
            style="{ display: 'flex', color: 'navyblue'}"
            >{{ suggestion.item.properties.label }}</span
          >
        </template>
      </vue-autosuggest>
      <vue-autosuggest
        class="col-6"
        v-model="textSearchTo"
        :suggestions="suggestLocation"
        :get-suggestion-value="getSuggestionValue"
        :input-props="{
          id: 'autosuggest__input',
          placeholder: 'Điểm kết thúc',
        }"
        @selected="selectHandlerTo"
      >
        <template
          slot-scope="{ suggestion }"
          style="display: flex; align-items: center"
        >
          <span
            class="my-suggestion-item"
            style="{ display: 'flex', color: 'navyblue'}"
            >{{ suggestion.item.properties.label }}</span
          >
        </template>
      </vue-autosuggest>
    </div>
    <l-map style="height: 500px" :zoom="zoom" :center="center" ref="mymap">
      <l-tile-layer
        :url="`https://maps.vietmap.vn/tm/{z}/{x}/{y}@2x.png?apikey=f4a60c6f82f86440cd7079aaad75e7934bd94e097e269f40`"
        attribution="{
          maxZoom: 20,
          id: 'vietmap',
          tileSize: 512,
          zoomOffset: -1,
        }"
      ></l-tile-layer>
      <l-polyline
        :lat-lngs="polyline.latlngs"
        :color="polyline.color"
      ></l-polyline>
    </l-map>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "components",
  components: {},
  data() {
    return {
      center: [16.046308, 108.225288],
      zoom: 10,
      textSearchFrom: "",
      textSearchTo: "",
      suggestLocation: [],
      selectedFrom: {},
      selectedTo: {},
      polyline: {
        latlngs: [],
        color: "green",
      },
      distance: 0,
    };
  },
  watch: {
    textSearchFrom(val) {
      if (val) {
        this.onSearch(val);
      } else {
        this.suggestLocation = [];
      }
    },
    textSearchTo(val) {
      if (val) {
        this.onSearch(val);
      } else {
        this.suggestLocation = [];
      }
    },
  },
  methods: {
    onSearch(val) {
      try {
        axios
          .get(
            `https://maps.vietmap.vn/api/search?api-version=1.1&apikey=f4a60c6f82f86440cd7079aaad75e7934bd94e097e269f40&text=${val}`
          )
          .then((response) => {
            if (response && response.data.code === "OK") {
              this.suggestLocation = [{ data: response.data.data.features }];
            }
          });
      } catch (error) {
        console.log("e", error);
      }
    },
    selectHandlerFrom(item) {
      this.selectedFrom = item.item;
    },
    selectHandlerTo(item) {
      this.selectedTo = item.item;
      this.distancePoint();
    },
    getSuggestionValue(suggestion) {
      return suggestion.item.properties.label;
    },
    async distancePoint() {
      if (this.selectedFrom) {
        try {
          const res = await axios.get(
            `https://maps.vietmap.vn/api/route?api-version=1.1&apikey=f4a60c6f82f86440cd7079aaad75e7934bd94e097e269f40&point=${this.selectedFrom.geometry.coordinates[1]},${this.selectedFrom.geometry.coordinates[0]}&point=${this.selectedTo.geometry.coordinates[1]},${this.selectedTo.geometry.coordinates[0]}&vehicle=truck_2500&points_encoded=false`
          );
          if (res.data && res.data.paths) {
            this.polyline.latlngs = [];
            res.data.paths[0].points.coordinates.forEach((element) => {
              this.polyline.latlngs.push([element[1], element[0]]);
            });
            this.center =
              this.polyline.latlngs[parseInt(this.polyline.latlngs.length / 2)];
            this.distance = res.data.paths[0].distance;
            if (this.distance > 10000000) {
              this.zoom = 3;
            } else if (this.distance > 1000000) {
              this.zoom = 6;
            } else if (this.distance > 500000) {
              this.zoom = 8;
            } else if (this.distance > 100000) {
              this.zoom = 9;
            }
            const formData = {
              from: this.selectedFrom.properties.label,
              to: this.selectedTo.properties.label,
              distance: this.distance / 1000,
            };
            this.$emit("submitMap", formData);
          }
        } catch (error) {
          console.log("e", error);
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.maps {
  width: 100%;
  position: relative;
  .search-input {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    /deep/ input {
      width: 100%;
      height: 40px;
      border-radius: 8px;
      border: none;
      padding: 8px 12px;
      width: 100%;
      font-size: 18px;
      line-height: 26px;
      background: #f7f7f7;
      color: #141822;
    }
  }
  .my-suggestion-item {
    z-index: 9999;
  }
}
/deep/ .autosuggest {
  &__results-container {
    background: #ffffff;
    border-radius: 8px;
    position: absolute;
    top: 44px;
    z-index: 99999;
    background: #e1e1e1;
    width: 100%;
    ul {
      width: 100%;
      color: rgba(30, 39, 46, 1);
      list-style: none;
      margin: 0;
      padding: 0.5rem 0 0.5rem 0;
      list-style: none;
    }
    li {
      margin: 0 0 0 0;
      border-radius: 5px;
      padding: 0.75rem 0 0.75rem 0.75rem;
      display: flex;
      align-items: center;
      &:hover {
        background: rgb(167, 170, 170);
      }
    }
    li:hover {
      cursor: pointer;
    }
  }
}
</style>