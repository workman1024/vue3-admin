<template>
  <div class="h-form h-flex h-col-bottom">
      <el-form ref="form" :style="formStyle" class="h-flex-1 form" v-bind="$attrs" label-width="40px" :inline="true" label-position="left">
        <slot />
      </el-form>
      <div class="operation">
            <el-button type="primary" @click="onSubmit" size="small" class="btn">查询</el-button>
            <el-button @click="onReset" class="btn" size="small" >重置</el-button>
        </div>
      <img v-if="showFold" @click="handleOpen" class="open" :class="{rotateImg:open}" src="../../../assets/images/main/open.png">
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  inputWidth:{
    type:String,
    default:'150px'
  },
  showFold:{
    type:Boolean,
    default:false
  }
})
const inputWidth = props.inputWidth

const emit = defineEmits(['onSubmit','onReset'])
const allHeight = ref();
const open = ref(true)


const form = ref();
const formStyle = ref<any>({})
onMounted(()=>{
  allHeight.value = form.value.$el.clientHeight;
  formStyle.value.height = allHeight.value+'px'
})

const handleOpen = ()=> {
  open.value = !open.value
  if(open.value){
    formStyle.value.height = allHeight.value+'px'
  }else{
    formStyle.value.height = 42+'px'
  }
    console.log(formStyle.value.height);
}

const onSubmit = (submitValue)=> {
    if(submitValue){
      emit('onSubmit',submitValue)
    }else{
      emit('onSubmit')
    }
}
const onReset = ()=> {
    emit('onReset')
}
</script>
<style lang="scss" scoped>
.h-form {
    min-height: 30px;
    box-sizing: content-box;
    position: relative;
    .items {
      align-items: flex-end;

    }
    .operation {
      margin-bottom: 6px;
            .btn {
        height: 30px;
      }
    }
    .form {
      overflow: hidden;
      transition: height 0.1s linear;
    }
    .open {
      position: absolute;
      bottom:-20px;
      left: 50%;
      width: 20px;
      margin-left: -10px;
      cursor: pointer;
      transition: transform 0.3s linear;
    }
    .rotateImg {
        transform: rotate(180deg);
      }
      .rotateForm {
        height: 42px;
      }
}

::v-deep(.el-form-item__content) {
  height: 30px;
  line-height: 30px;
}
::v-deep(.el-input__icon) {
    line-height: 30px;
    height: 30px;
}

::v-deep(.el-date-editor .el-range-separator) {
  height: 32px;
}
::v-deep(.el-form-item) {
    margin:6px 30px 6px 0;
}
::v-deep(.el-input__inner) {
    width: v-bind('inputWidth');
    height: 30px;
    line-height: 30px;
}
::v-deep(.el-date-editor--datetime .el-input__inner){
  width: 175px;
}
::v-deep(.el-form-item__label){
    color:#333;
    font-weight: 400;
    line-height: 30px;
}
</style>