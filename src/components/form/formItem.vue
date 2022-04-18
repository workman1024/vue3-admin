<template>
    <hnwf-form-item :label="data.label" :wordNumber="data.label.length">
        <component ref="formItem" :is="CompName" v-bind="data.option" :data="data" v-on="data.event || {}"></component>
    </hnwf-form-item>
</template>
<script lang="ts">
import ComponentMap from "./componentMap";
import { ComponentType } from './types'
import { Ref } from 'vue'
export default defineComponent({
    props: {
        data: {
            type: Object,
            default: {}
        }
    },
    
    setup(props) {
        const formItem = ref();
        const { data:dataVal } = toRefs(props) as {
            data:Ref<ComponentType>
        };
        const CompName = ComponentMap.get(dataVal.value.component)
        const setFromItem = (func)=> {
            formItem.value.setData(func)
        }
        return {
            CompName,
            formItem,
            setFromItem
        }
    },
})

</script>