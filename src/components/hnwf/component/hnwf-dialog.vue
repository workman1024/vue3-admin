<template>
    <div v-if="visible" class="content">
        <el-dialog v-model="visible" v-bind="$attrs">
            <slot></slot>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="confirm">{{ confirmText }}</el-button>
                    <el-button v-if="cancelShow" @click="cancle">{{ cancelText }}</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: true
    },
    cancelShow: {
        type: Boolean,
        default: true
    },
    confirmText: {
        type: String,
        default: "保存"
    },
    cancelText: {
        type: String,
        default: "取消"
    },
})
const emit = defineEmits(['update:modelValue', 'onConfirm', 'onCancle'])
const visible = ref(false)
watchEffect(() => {
    visible.value = props.modelValue
})
const confirm = () => {
    emit('onConfirm')
}
const cancle = () => {
    visible.value = false
    emit('update:modelValue', false)
    emit('onCancle')
}
</script>

<style scoped lang="scss">
.contain {
  max-height: 500px;
  overflow-y: auto;
}
.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>
<style lang="scss" scoped>
::v-deep(.el-dialog__header){
    background-color: #F8F8F8;
    padding: 10px 20px;
    border: 1px solid #eee;
}
::v-deep(.el-dialog__body){
    padding:20px;
}
::v-deep(.el-dialog__title) {
    font-size: 17px;
}
::v-deep(.el-dialog__headerbtn) {
    top: 14px;
}
</style>