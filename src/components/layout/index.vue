<template>
  <div class="wrapper" :class="appClassObj">
    <Sidebar class="sidebar-container strong-sidebar" />
    <div class="main-container strong-main">
      <Navbar />
      <TagView v-if="config.hasTagsView" />
      <Appmain />
    </div>
  </div>
</template>
<script setup lang="ts">
import Navbar from './component/Navbar/index.vue'
import Sidebar from './component/Sidebar/index.vue'
import Appmain from './component/Appmain.vue'
import TagView from './component/TagView/index.vue'
import { config } from '../../target/setting';

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore();
const appClassObj = computed(() => {
  return {
    hideSidebar: !store.getters.app.sidebarOpen,
    openSidebar: store.getters.app.sidebarOpen,
  }
})

</script>
<style scoped lang="scss">
.wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>