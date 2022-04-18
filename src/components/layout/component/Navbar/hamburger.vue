<template>
  <div class="more-contain" @click="handleTapMore">
    <img :class="{ rotate: !isOpen }" src="../../../../assets/images/main/more.png" />
  </div>
</template>
<script setup lang="ts">

import { useStore } from 'vuex'
import { ref, computed } from 'vue'
const store = useStore();
const isOpen = computed(() => {
  return store.getters.app.sidebarOpen
})
const more = ref(null);
const handleTapMore = () => {
  let res = !isOpen.value
  store.commit('app/setSidebarOpen', res)
}
</script>
<style scoped>
.more-contain {
  padding: 15px 0 15px 20px;
}
.rotate {
  transform: rotate(90deg);
}
img {
  width: 20px;
  transition: transform 0.3s linear;
}
</style>