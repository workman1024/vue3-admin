<template>
  <div>
    <el-breadcrumb separator="/">
      <transition-group
        name="breadcrumb"
        tag="breadcrumb"
      >
        <el-breadcrumb-item
          v-for="(item) in matcheds"
          :key="item.path"
        >
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
let matcheds:any = ref([]);
const leveList = () => {
	let currentRoute = router.currentRoute.value;
	matcheds.value = currentRoute.matched.filter(item => item.meta && item.meta.title && !item.meta.singleShowChildren);
}
watchEffect(() => {
	leveList()
})
</script>

<style scoped lang="scss">
.el-breadcrumb {
  line-height: 50px;
}
::v-deep(.el-breadcrumb__separator) {
  margin: 0;
}
::v-deep(.el-breadcrumb__item) {
  .el-breadcrumb__inner {
    color: #666;
    font-size: 12px;
    cursor: default;
  }
  .el-breadcrumb__separator {
    color: #ebebeb;
    cursor: default;
  }
  &:first-child .el-breadcrumb__inner {
    color: #333;
  }
  &:last-child .el-breadcrumb__inner,
  &:last-child .el-breadcrumb__inner:hover {
    color: #999;
    cursor: default;
  }
}

</style>
<style>
</style>