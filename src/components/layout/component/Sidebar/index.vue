<template>
  <div>
    <div v-if="config.sidebarCanTitle" class="sidebar-title">{{ config.sidebarTitle }}</div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
import SidebarItem from './sidebarItem.vue'
import { config } from '../../../../target/setting'
import variables from '../../../../assets/css/ele.module.scss'
const store = useStore()
const router = useRouter()
const currentRoute = useRoute()
const routes = computed(() => {
  return store.getters.permissionRouters
})
const activeMenu = computed(() => {
  const { meta, path } = currentRoute
  return path
})
const isCollapse = computed(() => {
  return !store.getters.app.sidebarOpen
})
</script>
<style scoped>
@-webkit-keyframes slideShine {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}
@keyframes slideShine {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 100%;
  }
}
.sidebar-title {
  font-size: 22px;
  /* color:#fdd835; */
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
  background: #fdd835 -webkit-linear-gradient(
      left,
      #ffeb3b,
      #febaf7 50%,
      #fbe9e7 90%,
      #ffeb3b
    ) no-repeat 0 0;
  background-size: 30% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: slideShine 4s linear infinite;
}
.scrollbar-wrapper {
  overflow-x: hidden !important;
}
</style>
