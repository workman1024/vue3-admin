<template>
    <el-time-select
        v-model="value"
        prefix-icon="none"
        v-bind="$attrs"
        @change="getVal"
      >
      </el-time-select>
</template>
<script setup lang="ts">
/**
 * value-format         https://day.js.org/docs/zh-CN/display/format
 */
import { ComponentType, SelectType } from "../types";
const props = defineProps<{
    data: ComponentType
}>()
const value = ref('')
if(props.data.default && typeof props.data.default == 'string') value.value = props.data.default;
const callback = inject('callback') as Function
const getVal = ()=> {
    let val = {[props.data.key] : value.value}
    callback(val)
}
getVal()
</script>
<style scoped lang="scss">

</style>