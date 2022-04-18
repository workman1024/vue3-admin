<template>
    <el-select v-model="value" @change="onChange">
        <el-option
            v-for="item in source"
            :key="item[option.value]"
            :label="item[option.label]"
            :value="item[option.value]"
            :disabled="disabled(item) || false"
        ></el-option>
    </el-select>
</template>

<script setup lang="ts">
import { ComponentType, SelectType } from "../types";
const props = defineProps<{
    data: ComponentType
}>()
const value = ref('')
const source = ref<any[]>([])
if (props.data.default) value.value = props.data.default;
const option: SelectType = props.data.option.option;
const isPromise = (p) => {
    return p && p.then && typeof p.then === 'function';
}

const disabled = (item) => {
    if (option.disabled) {
        return item[option.disabled]
    }
    return false
}

const callback = inject('callback') as Function
const onChange = () => {
    let val = { [props.data.key]: toRaw(value.value) }
    callback(val, props.data)
}
onChange()

// ref method
const setData = (func) => {
    doSource(func);
}

const doSource = async (datas) => {
    let results: Array<any> = [];
    if (typeof datas == 'function') {
        results = datas()
        if (isPromise(datas())) {
            results = await results
        }
    } else if (isPromise(datas)) {
        results = await datas
    }
    if (props.data.option.visAll) {
        if (results.length == 0 || results[0][option.value]) {
            results.unshift({
                [option.label]: '全部',
                [option.value]: ''
            })
        }
    }
    source.value = results
}

onMounted(async () => {
    let datas = props.data.data;
    doSource(datas)
})

defineExpose({
    setData
})
</script>