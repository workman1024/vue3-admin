<template>
    <svg v-bind="$attrs">
        <use :xlink:href="iconName" />
    </svg>
</template>
<script setup lang="ts" name="SvgIcon">
const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: '#333'
    }
})
const iconName = computed(() => {
    return `#icon-${props.name}`
})
</script>

<style lang="scss" scoped>
</style>