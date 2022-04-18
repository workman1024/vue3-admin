<template>
  <div class="navbar">
    <Hamburger
      v-if="config.sidebarCanOpen"
      class="hamburger-container"
    />
    <Breadcrumb class="breadcrumb-container" />
    <div class="h-flex h-m-t-9 h-p-l-20" v-if="config.hasRouteGroup">
      <div v-for="(item,index) in addRoute">
        <el-button @click="handleAddRoute(item)" class="h-m-r-10" round>{{ item.meta.title }}</el-button>
      </div>
    </div>
    <div class="navbar-right">
      <el-dropdown
        class="avatar-container"
        trigger="click"
      >
        <div class="avatar-wrapper">
          <img
            :src="userinfo.avatar || defaultAvatar"
            class="user-avatar"
          >
          <img
            class="user-down"
            src="../../../../assets/images/main/down.png"
          >
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleToPerson">
              基本资料
            </el-dropdown-item>
            <el-dropdown-item @click="handleLogout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import Hamburger from './hamburger.vue'
import Breadcrumb from './breadcrumb.vue'
import { config } from '../../../../target/setting'
const store = useStore();
const router = useRouter();
const userinfo = store.getters.userinfo;
const defaultAvatar = new URL('../../../../assets/images/main/avater.webp', import.meta.url).href
const handleToPerson = () => {
	router.push({
		path: '/center/person'
	})
}
const handleLogout = async () => {
	await store.dispatch('user/outLogin')
	router.replace({
		path: '/login'
	})
}
const addRoute = computed(()=>{
  return store.getters.userRoute
})
const handleAddRoute = (item)=> {
  router.replace({
		path: '/'
	})
    store.commit('permission/resetAddRoute',item)
}
</script>
<style lang="scss" scoped>
.navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .hamburger-container {
        float: left;
        cursor: pointer;
        transition: background 0.3s;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            background: rgba(0, 0, 0, 0.025);
        }
    }
    .breadcrumb-container {
        float: left;
        padding-left: 20px;
    }
    .navbar-right {
        position: absolute;
        top: 0;
        right: 0;
        height: 50px;
        line-height: 50px;
    }
    .avatar-container {
        margin-right: 30px;
        .avatar-wrapper {
            position: relative;
            display: flex;
            padding-left: 10px;
            align-items: flex-end;
            cursor: pointer;
            .user-avatar {
                width: 40px;
                height: 40px;
                display: block;
                margin-top: 5px;
            }
            .user-down {
                width: 10px;
                vertical-align: bottom;
            }
        }
    }
}
</style>
