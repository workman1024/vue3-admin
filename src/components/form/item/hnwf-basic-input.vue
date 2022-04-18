<template>
    <el-input v-model="value" v-bind="$attrs" @input="getVal"></el-input>
</template>
<script setup lang="ts">
import { ComponentType } from "../types";

const props = defineProps<{
    data:ComponentType
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