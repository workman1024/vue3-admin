<template>
  <div class="center">
    <div class="cell">
      <div class="cell-label">用户名</div>
      <div class="cell-con">{{ userinfo.creatBy }}</div>
    </div>
    <div class="cell">
      <div class="cell-label">用户姓名</div>
      <div class="cell-con">{{ userinfo.realName }}</div>
    </div>
    <div class="cell">
      <div class="cell-label">手机号</div>
      <div class="cell-con">{{ userinfo.phone }}</div>
    </div>
    <div class="cell">
      <div class="cell-label">用户类型</div>
      <div class="cell-con">系统默认用户</div>
    </div>
    <div class="cell">
      <div class="cell-label">账号状态</div>
      <div class="cell-con">正常</div>
    </div>
    <div class="cell">
      <div class="cell-label">备注信息</div>
      <div class="cell-con">快速开发模板</div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const store = useStore();
    const userinfo = computed(() => {
      return store.getters.userinfo;
    })
    return {
      userinfo
    }
  }
})
</script>

<style lang="scss" scoped>
.center {
  padding: 20px;
}
.cell {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  border-collapse: collapse;
  &-label {
    border: 1px #ebeef5 solid;
    width: 200px;
    background-color: #fafafa;
    height: 80px;
    line-height: 80px;
    padding: 0 10px;
    color: #909399;
    font-size: 16px;
  }
  &-con {
    border: 1px #ebeef5 solid;
    height: 80px;
    line-height: 80px;
    padding: 0 10px;
    flex: 1;
    color: #333;
    font-size: 16px;
  }
}
</style>