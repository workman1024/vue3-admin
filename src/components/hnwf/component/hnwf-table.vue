<template>
  <el-table
    v-bind="$attrs"
    stripe
    class="table"
  >
    <slot />
  </el-table>
</template>
<style lang="scss" scoped>
.table {
  width: 100%;
  font-size: 13px;
}
</style>
