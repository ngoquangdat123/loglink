<template>
  <div class="maps">
    <div class="search-input">
      <vue-autosuggest
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
    <l-map style="height: 700px" :zoom="zoom" :center="center" ref="mymap">
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
      <!-- <l-marker :lat-lng="markerLatLng"></l-marker> -->
    </l-map>
    <!-- <hero></hero>
        <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>
        <navigation></navigation>
        <javascript-components></javascript-components>
        <icons></icons>
        <examples></examples>
        <download-section></download-section>
        <carousel></carousel> -->
  </div>
</template>
<script>
// import Hero from "./components/Hero";
// import BasicElements from "./components/BasicElements";
// import Inputs from "./components/Inputs";
// import CustomControls from "./components/CustomControls";
// import Navigation from "./components/Navigation";
// import JavascriptComponents from "./components/JavascriptComponents";
// import Carousel from "./components/Carousel";
// import Icons from "./components/Icons";
// import Examples from "./components/Examples";
// import DownloadSection from "./components/DownloadSection";
// import mapInits from "../core/utils/maps.js";
import axios from "axios";

export default {
  name: "components",
  // mixins: [mapInits],
  components: {
    // Hero,
    // BasicElements,
    // Inputs,
    // CustomControls,
    // Navigation,
    // JavascriptComponents,
    // Carousel,
    // Icons,
    // Examples,
    // DownloadSection
  },
  data() {
    return {
      center: [16.046308, 108.225288],
      zoom: 13,
      textSearchFrom: "",
      textSearchTo: "",
      suggestLocation: [],
      selectedFrom: {},
      selectedTo: {},
      polyline: {
        latlngs: [],
        color: "green",
      },
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
      // this.polyline.latlngs = [
      //   [
      //     this.selectedFrom.geometry.coordinates[1],
      //     this.selectedFrom.geometry.coordinates[0],
      //   ],
      //   [
      //     this.selectedTo.geometry.coordinates[1],
      //     this.selectedTo.geometry.coordinates[0],
      //   ],
      // ];
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
            console.log("=====asdasdasdasdas1", this.polyline.latlngs);
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
  position: relative;
  .search-input {
    position: absolute;
    top: 30px;
    left: 60px;
    z-index: 9999;
  }
  .my-suggestion-item {
    z-index: 9999;
  }
}
/deep/ .autosuggest {
  &__results-container {
    background: #ffffff;
    border-radius: 8px;
    width: 400px;
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