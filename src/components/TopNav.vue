<template>
  <div class="top-nav" :style="{ width: width, height: height }">
    <div class="top-nav-title">
      <div class="top-nav-logo" @click="clickHome">
        <img src="../assets/home.svg" />
      </div>
      <div class="top-nav-menu">
        <div
          :key="navItem.id"
          class="top-nav-menu-item"
          v-for="navItem in menuList"
          @click="clickMenu(navItem.path, navItem.type)"
        >
          {{ navItem.txt }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '20%'
    },
    menuList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    clickHome () {
      this.$router.push({
        path: '/'
      })
    },
    clickMenu (path, type) {
      if (type == 'innerLink') {
        this.$router.push({
          path: path
        })
      } else if (type == 'outerLink') {
        window.open(path)
      } else {
        alert('link type error')
      }
    }
  }
}
</script>

<style scoped>
.top-nav {
  background: #9caebf;
  min-width: 800px;
  min-height: 100px;
}

.top-nav-title {
  height: 30px;
  line-height: 30px;
  padding: 20px 0 0 150px;
  display: flex;
  flex-wrap: nowrap;
}

.top-nav-logo {
  font-size: 20px;
  cursor: pointer;
}

.top-nav-logo:hover {
  color: #647e96;
}

.top-nav-menu {
  margin-left: 5px;
  display: flex;
  flex-wrap: nowrap;
}

.top-nav-menu-item {
  margin-left: 20px;
  cursor: pointer;
}
.top-nav-menu-item:hover {
  color: azure;
}
</style>
