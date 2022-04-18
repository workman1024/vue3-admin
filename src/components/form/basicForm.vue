<template>
    <hnwf-form v-bind="$attrs" @onSubmit="onSubmit" @onReset="onReset">
        <Item :data="item" v-for="(item, index) in options" :ref="setItemRef" />
    </hnwf-form>
</template>
<script setup lang="ts">
import Item from './formItem.vue'
import { ComponentType } from './types'
const emit = defineEmits(['update:modelValue', 'onSubmit', 'onReset'])
const props = defineProps<{
    options: Array<ComponentType>,
    modelValue: Object
}>()
let submitValue = {}
const getRes: Function = (val,obj) => {
    submitValue = { ...submitValue, ...val }
    emit('update:modelValue', submitValue)
    if(obj?.change && typeof obj.change == 'function'){
        nextTick(()=>{
            obj.change()
        })
    }
}
provide('callback', getRes)
const onSubmit = () => {
    emit('onSubmit', submitValue)
}
const onReset = () => {
    emit('onReset')
}

// ref
let itemRefs:any[] = [];
const setItemRef = el => {
    if (el) {
        itemRefs.push(el)
    }
}
const refChange = (key,func)=> {
    props.options.forEach((item,index)=>{   
        if(item.key === key){
            itemRefs[index].setFromItem(func);
        }
    })
}

defineExpose({
    refChange
})
</script>