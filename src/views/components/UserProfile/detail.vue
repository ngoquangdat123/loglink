<template>
  <div class="container detail-user-profile">
    <div class="detail-user-profile__header">
      <h2 class="text-center">USER PROFILE {{ item.id }}</h2>
    </div>
    <div class="detail-user-profile__content shadow">
      <div class="content-card">
        <div class="item-field">
          <span class="label">Cell Phone: </span>
          <span class="value">{{ item.cellPhone }}</span>
        </div>
        <div class="item-field">
          <span class="label">Company Name: </span>
          <span class="value">{{ item.companyName }}</span>
        </div>
        <div class="item-field">
          <span class="label">Contact Address: </span>
          <span class="value">{{ item.contactAddress }}</span>
        </div>
        <div class="item-field">
          <span class="label">Company Logo Url: </span>
          <span class="value">{{ item.companyLogoUrl }}</span>
        </div>
        <div class="item-field">
          <span class="label">Coin: </span>
          <span class="value">{{ item.coin }}</span>
        </div>
        <div class="item-field">
          <span class="label">User: </span>
          <span class="value">{{ item.userLogin }}</span>
        </div>
      </div>
      <div class="detail-user-profile__action">
        <button @click="$router.push('/user-profile')" type="button" class="btn btn-neutral">Quay lại</button>
        <button @click="updateItem(item.id)" type="button" class="btn btn-primary">Sửa</button>
      </div>
    </div>
  </div>
</template>
<script>
import {userProfileService} from '@/services/user-profile.service'
export default {
  components: {},
  data () {
    return {
      item: {}
    }
  },
  async created() {
    await this.getDetail()
  },
  methods: {
    async getDetail () {
      const id = this.$route.query.id
      try {
        this.item = await userProfileService.detailUserProfile(id)
      }catch (e) {
        console.log(e)
      }
    },
    updateItem(id) {
      this.$router.push(`/user-profile/edit?id=${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.detail-user-profile {
  &__header {
    margin-bottom: 4rem;
    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 1.3;
      text-align: center;
    }
  }
  &__content {
    background-color: #fff;
    background-clip: border-box;
    border: 0.0625rem solid rgba(0, 0, 0, 0.05);
    border-radius: 0.25rem;
    padding: 2rem;
    .content-top {
      padding: 0 100px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      img {
        width: 50px;
      }
      .icon-end {
        transform: rotate(75deg);
      }
      .top-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      span {
        font-size: 20px;
        line-height: 25px;
        font-weight: 700;
        margin-top: 10px;
      }
      #arrowAnim {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .arrow {
        width: 20px;
        height: 20px;
        border: 5px solid;
        border-color: black transparent transparent black;
        transform: rotate(135deg);
      }

      .arrowSliding {
        position: absolute;
        -webkit-animation: slide 4s linear infinite;
        animation: slide 4s linear infinite;
      }

      .delay1 {
        -webkit-animation-delay: 1s;
        animation-delay: 1s;
      }
      .delay2 {
        -webkit-animation-delay: 2s;
        animation-delay: 2s;
      }
      .delay3 {
        -webkit-animation-delay: 3s;
        animation-delay: 3s;
      }

      @-webkit-keyframes slide {
        0% {
          opacity: 0;
          transform: translateX(-10vw);
        }
        20% {
          opacity: 1;
          transform: translateX(-5vw);
        }
        80% {
          opacity: 1;
          transform: translateX(5vw);
        }
        100% {
          opacity: 0;
          transform: translateX(10vw);
        }
      }
      @keyframes slide {
        0% {
          opacity: 0;
          transform: translateX(-10vw);
        }
        20% {
          opacity: 1;
          transform: translateX(-5vw);
        }
        80% {
          opacity: 1;
          transform: translateX(5vw);
        }
        100% {
          opacity: 0;
          transform: translateX(10vw);
        }
      }
    }
    .item-field {
      display: flex;
      align-content: center;
      border-bottom: solid 1px #bdbdbd38;
      padding: 1rem 0;
      .label {
        font-weight: 700;
        width: 300px;
      }
      &:last-child {
        border: none;
        padding-bottom: 0;
      }
    }
  }
  &__action {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    .btn {
      border-radius: 0;
    }
  }
}
</style>
