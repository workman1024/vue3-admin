<template>
    <div>
        <hnwf-content>
            <hnwf-basic-form
                :options="options"
                v-model="basicValue"
                ref="basicRef"
                @onSubmit="onSubmit"
                @onReset="onReset"
            />
        </hnwf-content>
    </div>
</template>
<script lang="ts">
import { ComponentType } from '@/components/form/types'
import { getManageData } from '@/apis/pay/manage'
export default defineComponent({
    setup() {
        const basicValue = ref({})
        const basicRef = ref()
        const handleBlur = (e) => {
            console.log('handleBlur', e.target.value);
        }
        const options: Array<ComponentType> = [{
            component: 'Input',
            label: '姓名',
            key: 'name',
            default: '默认值',
            option: {
                placeholder: '请输入姓名',
                clearable: true,
            },
            event: {
                blur: handleBlur
            }
        }, {
            component: 'Select',
            label: '状态',
            key: 'status',
            data: () => {
                return getManageData()
            },
            change: () => {
                const val = basicValue.value['status']
                basicRef.value.refChange('ld', getManageData({ id: val }))
            },
            option: {
                placeholder: '请输入身份证号',
                visAll: true,
                option: {
                    label: 'label',
                    value: 'value'
                }
            }
        }, {
            component: 'Select',
            label: '联动选择框',
            key: 'ld',
            data: () => {
                return []
            },
            option: {
                placeholder: '联动选择框',
                visAll: true,
                option: {
                    label: 'label',
                    value: 'value'
                }
            }
        }, {
            component: 'DatePicker',
            label: '选择日期',
            key: 'datePicker',
            data: () => {
                return []
            },
            option: {
                placeholder: '选择日期框',
                'value-format': "YYYY-MM-DD",
                type: "datetime",
                'range-separator': "To"
            }
        }, {
            component: 'TimePicker',
            label: '选择时间',
            key: 'timePicker',
            data: () => {
                return []
            },
            option: {
                placeholder: '选择时间框',
            }
        }]
        const onSubmit = () => {
            console.log(basicValue.value);
        }
        const onReset = () => {

        }
        return {
            options,
            basicValue,
            basicRef,
            onSubmit,
            onReset
        }
    }
})
</script>