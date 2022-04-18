<template>
  <el-form-item class="form-item" v-bind="$attrs" :label="label" :label-width="labelWidth">
    <slot />
  </el-form-item>
</template>
<script setup lang="ts">
const props = defineProps({
    lwidth:{
      type:String,
      default:'40px'
    },
    label:{
      type:String,
      default:''
    }
})
const labelWidth = computed(()=>{
  let wordNumber = props.label.length
    if(wordNumber){
        return (wordNumber*15+10)+'px';
      }else{
        return 0;
      }
})
</script>
<style lang="scss" scoped>
::v-deep(.el-date-editor.el-input, .el-date-editor.el-input__inner){
  width: 100%;
}
::v-deep(.el-input__prefix){
  display: none;
}
::v-deep(.el-input--suffix .el-input__inner){
  padding:0 11px;
}
::v-deep(.el-range-editor.el-input__inner){
  width: 250px;
}
::v-deep(.el-date-editor .el-range__icon){
  width: 0;
}

</style>