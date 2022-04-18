<template>
  <div class="login-container">
    <div class="version">
    VUE服务平台 V1.0
    </div>
    <LoginForm />
  </div>
</template>
<script lang="ts">
import LoginForm from './component/loginForm.vue'
export default {
	components:{
		LoginForm
	},
	setup(){}
}
</script>
<style scoped lang="scss">
.login-container {
    background: url("../../assets/images/login/bg.png") 100% 100%;
    height: 100VH;
    width: 100%;
    position: relative;
    .version {
        letter-spacing:1px;
        color:#fff;
        font-size: 18px;
        position: absolute;
        left: 20px;
        top: 20px;
    }
}
</style>