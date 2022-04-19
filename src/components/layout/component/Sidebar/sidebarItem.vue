<template>
  <div v-if="!item.hidden">
    <template v-if="childrenShow()">
      <el-sub-menu :index="item.path">
        <template #title>
          <hnwf-svg v-if="item.meta.icon" class="icon" :name="item.meta.icon" />
          <span>{{ tip }}</span>
        </template>
        <template v-for="(c) in item.children" :key="c.path">
          <Item v-if="!hasShowingChild(c.children, c)" :item="c" />
          <SidebarItem
            v-else
            :is-nest="true"
            :item="c"
            :base-path="resolvePath(basePath, c.path)"
            class="nest-menu"
          />
        </template>
      </el-sub-menu>
    </template>
    <template v-else>
      <template v-if="hasOneShowingChild(item.children, item)">
        <Item :item="item.children[0]" />
      </template>
    </template>
  </div>
</template>
<script setup name="SidebarItem" lang="ts">
import Item from './item.vue'
import { resolvePath } from '../../../../utils/utils'
import RouteItem from "../../../../route/route.model";
const store = useStore()
const props = defineProps<{
  item: RouteItem,
  basePath: string
}>()
provide('base-path', props.basePath);
onMounted(() => {
})
const tip = computed(() => {
  return props.item.meta.title;
})
const hasShowingChild = (children = [], parent) => {
  const showingChildren = children.filter((item: RouteItem) => {
    if (item.hidden) {
      return false
    } else {
      return true
    }
  })
  if (showingChildren.length > 0) {
    return true
  }
  return false
}
const hasOneShowingChild = (children = [], parent) => {
  if (children.length == 1) {
    return true
  } else {
    return false
  }
}
const childrenShow = () => {
  const item = props.item;
  const ores = hasShowingChild(item.children, item)
  const tres = !(item.meta.singleShowChildren && item.children.length == 1)
  return ores && tres;
}

const getIcon = (icon) => {
  const imgUrl = new URL(`../../../../assets/images/nav/${icon}.png`, import.meta.url).href
  return imgUrl
}
</script>
<style lang="scss" scoped>
.icon {
  width: 24px;
  min-width: 24px;
  height: 24px;
  margin-right: 10px;
}
</style>