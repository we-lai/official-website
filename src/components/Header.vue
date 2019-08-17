<template>
  <header class="c-header">
    <div class="logo">
      <img class="img" src="../assets/logo.png" />
      <img class="text" src="../assets/logo-text.png" />
    </div>
    <div class="menus">
      <router-link
        tag="span"
        class="menu-item"
        :class="{ 'actived': activedPath === i.url }"
        :to="i.url"
        v-for="i in menus"
        :key="i.name">{{ i.name }}
      </router-link>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      menus: [
        {
          url: '/home',
          name: '首页'
        },
        {
          url: '/resolution',
          name: '解决方案'
        },
        {
          url: '/ability',
          name: '行业能力'
        },
        {
          url: '/friends',
          name: '合作品牌'
        },
        {
          url: '/about',
          name: '关于我们'
        }
      ]
    }
  },
  computed: {
    ...mapState([ 'activedPath' ])
  }
}
</script>

<style lang="scss">
.c-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    margin-left: 50px;
    display: flex;
    align-items: center;
    .img {
      width: 35px;
      margin-right: 11px;
    }
    .text {
      width: 100px;
    }
  }
  .menus {
    display: flex;
    line-height: 60px;
    margin-right: 50px;
    .menu-item {
      margin-left: 20px;
      cursor: pointer;
      &.actived {
        color: $blue;
      }
    }
  }
}
</style>
