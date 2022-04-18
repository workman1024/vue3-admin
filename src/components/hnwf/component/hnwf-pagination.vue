<template>
  <div class="h-flex h-p-20 h-row-center" :class="class">
    <el-pagination
      v-if="visShow"
      background
      layout=" prev, pager, next, sizes, total,"
      :page-sizes="[10, 20, 30, 40]"
      v-model:currentPage="page.pageIndex"
      :total="page.total"
      v-model:page-size="page.pageSize"
      v-bind="$attrs"
      @current-change="handleCurrentChange"
    >
      <slot />
    </el-pagination>
  </div>
</template>
<script setup name="HPagination" lang="ts">

const props = defineProps({
	page: {
		type: Object,
		default: () => {
			return { pageIndex: 1, pageSize: 10, total: 0 }
		}
	},
  class: {
    type:String,
    default:''
  }
})
const emit = defineEmits(['update:page', 'getPage'])
const visShow = computed(() => {
	if (props.page.total <= props.page.pageSize) {
		return false
	} else {
		return true
	}
})
const handleCurrentChange = (val) => {
	emit('update:page', { ...props.page, pageIndex: val })
	emit('getPage')
}
</script>
<style lang="scss" scoped>
::v-deep(.el-pager+button.btn-next[type=button]){
  margin-right: 10px;
}
::v-deep(.number){
  outline:none
}
</style>
