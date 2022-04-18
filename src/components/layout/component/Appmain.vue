<template>
    <router-view v-slot="{ Component, route }">
        <transition name="fade" appear>
            <keep-alive :include="getCaches">
                <component :is="Component" :key="route.fullPath" v-if="openCache(route)" />
            </keep-alive>
        </transition>
        <transition name="fade" appear>
            <component :is="Component" :key="route.fullPath" v-if="!openCache(route)" />
        </transition>
    </router-view>
</template>
<script setup lang="ts">
import type { RouteLocation } from 'vue-router';
const store = useStore();
const openCache = (route: RouteLocation): boolean => {
    if (route.meta?.keepAlive) {
        return true
    } else {
        return false;
    }
}
const getCaches = computed(() => {
    let tags = store.getters.app.tagViews;
    const cacheView = tags.reduce((arr, item) => {
        if (item.name) {
            arr.push(item.name)
        }
        return arr;
    }, [])
    return cacheView;
})
</script>