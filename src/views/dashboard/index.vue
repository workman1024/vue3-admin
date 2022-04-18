<template>
  <div>
    <hnwf-content>
      <div class="order h-flex">
        <div class="card" v-for="(item, index) in orderList" :key="index">
          <div class="title">{{ item.value }}</div>
          <div class="sub">{{ item.title }}</div>
        </div>
      </div>
      <div>
        <el-row :gutter="50" class="h-m-t-30">
          <el-col :span="6" v-for="(item, index) in girdList" :key="index">
            <Gird :item="item" />
          </el-col>
        </el-row>
      </div>
      <div class="h-m-t-50">
        <div class="tj">
          <div class="title">本月统计</div>
          <div class="tj-menu">
            <el-row :gutter="50">
              <el-col :span="6" v-for="(item, index) in menuList" :key="index">
                <Menu :item="item" />
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </hnwf-content>
  </div>
</template>
<script lang="ts">
import Gird from './component/gird.vue'
import Menu from './component/menu.vue'
export default defineComponent({
  name:'Dashboard',
  components: {
    Gird,
    Menu
  },
  setup() {
    const orderList = ref([{ value: 12, title: '审核通过的服务项目' }, { value: 680, title: '已完成的服务订单' }, { value: 324, title: '服务总客户' },])
    const girdList = ref([{ value: '查看收入明细>', title: '账户', color: '', img:1 }, { value: '120', title: '待处理的服务任务', color: '#81c784' }, { value: '0', title: '待处理的售后任务', color: '#42a5f5' }, { value: '29', title: '待处理的异常任务', color: '#78909c' }])
    const menuList = ref([{ value: '124345', title: '服务单总数量（个）'},{ value: '54322', title: '已完成服务单数量（个）'},{ value: '68123', title: '进行中服务单数量（个）'},{ value: '68123', title: '服务用户数 （个）'}])
    return {
      orderList,
      girdList,
      menuList
    }
  }
})

</script>
<style lang="scss" scoped>
.order {
  .card {
    margin-right: 40px;
    .title {
      color: #666;
      font-size: 25px;
    }
    .sub {
      font-size: 13px;
      color: #999;
    }
  }
}
.tj {
  border: 1px #ccc solid;
  border-radius: 4px;
  .title {
    padding: 10px;
    border-bottom: 1px #ccc solid;
  }
  &-menu {
  }
}
</style>