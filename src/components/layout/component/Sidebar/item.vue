<template>
    <div @click="handlePage">
        <el-menu-item :index="indexPath">
            <hnwf-svg
                v-if="item.meta.icon"
                class="icon"
                :name="item.meta.icon"
            />
            {{ item.meta.title }}
        </el-menu-item>
    </div>
</template>
<script setup lang="ts">
import menuObj from "../../../../route/route.model";
const router = useRouter();
const props = defineProps<{ item: menuObj }>()
const basePath = inject('base-path');
const indexPath = computed(() => {
    if (props.item.path.startsWith('/') || basePath == '/') {
        return basePath + props.item.path;
    }
    return basePath + '/' + props.item.path;
})
const handlePage = () => {
    router.push({
        path: indexPath.value
    })
}
const getIcon = (icon)=> {
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