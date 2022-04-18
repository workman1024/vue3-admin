<template>
    <div class="content" v-if="$slots.default">
    <div class="page">
      <slot />
    </div>
  </div>
</template>
<script setup name="HContent" lang="ts">

</script>
<style lang="scss" scoped>
.content {
    padding: 10px 20px;
    .page {
      background-color: #fff;
      padding: 10px 20px;
      // border: 1px solid #ccc;
    }
}
</style>
