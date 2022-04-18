<template>
    <el-form
        ref="loginRef"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        label-position="left"
    >
        <div class="title">VUE服务管理平台</div>
        <el-form-item prop="username" class="input-box">
            <div class="h-flex" style="width:100%;">
                <img class="icon" src="../../../assets/images/login/nickname.png" />
                <el-input
                    v-model="loginForm.username"
                    placeholder="登录账号"
                    class="input h-flex-1"
                    type="text"
                    tabindex="1"
                />
            </div>
        </el-form-item>
        <el-form-item prop="password" class="input-box">
            <div class="h-flex" style="width:100%;">
                <img class="icon" src="../../../assets/images/login/locking.png" />
                <el-input
                    v-model="loginForm.password"
                    :type="passwordType"
                    tabindex="2"
                    placeholder="登录密码"
                    class="input h-flex-1"
                    @keyup.enter="handleLogin"
                />
                <div @click="handleTapVisMM">
                    <img
                        class="icon"
                        v-if="!visMM"
                        src="../../../assets/images/login/eye_protection.png"
                    />
                    <img class="icon" v-else src="../../../assets/images/login/visible.png" />
                </div>
            </div>
        </el-form-item>
        <el-button
            class="login-btn"
            :loading="loading"
            type="primary"
            style="width: 100%;"
            @click.prevent="handleLogin"
        >立即登入</el-button>
    </el-form>
</template>
<script setup lang="ts">
const store = useStore();
const router = useRouter();
const loginForm = reactive({
    username: "",
    password: ""
})
const validateUsername = (rule, value, callback) => {
    if (!value) {
        callback(new Error("请输入登录账号"));
    } else {
        callback();
    }
};
const validatePassword = (rule, value, callback) => {
    if (value.length == 0) {
        callback(new Error("请输入登录密码"));
    } else if (value.length < 6) {
        callback(new Error("登录密码不能小于6位"));
    } else {
        callback();
    }
};
const loginRules = reactive({ username: [{ required: true, trigger: "blur", validator: validateUsername },], password: [{ required: true, trigger: "blur", validator: validatePassword },] })
const loading = ref(false)
const loginRef = ref()
const handleLogin = () => {
    loginRef.value.validate((valid) => {
        if (valid) {
            loading.value = true;
            store.dispatch('user/login', loginForm).then(()=>{
                router.push({
                    path: '/'
                })
                loading.value = false;
            }).catch(()=>{
                loading.value = false;
            })
        } else {
            console.log('error submit!')
            return false
        }
    })
}
const passwordType = ref('password')
const visMM = ref(false)
const handleTapVisMM = () => {
    visMM.value = !visMM.value
    if (visMM.value) {
        passwordType.value = 'text';
    } else {
        passwordType.value = 'password';
    }
}
</script>
<style lang="scss" scoped>
.login-form {
    position: relative;
    width: 420px;
    box-sizing: border-box;
    max-width: 100%;
    padding: 30px 25px;
    float: right;
    margin-right: 200px;
    overflow: hidden;
    transform: translateY(-50%);
    top: 50%;
    border-radius: 4px;
    background-color: #294679;
    .title {
        font-size: 26px;
        color: #eee;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
    }
    .input-box {
        border: solid 1px #5973fc;
        border-radius: 4px;
        box-shadow: 0 2px 3px 0 rgb(0 0 0 / 30%) inset;
        margin-bottom: 30px;
        ::v-deep(.el-input__inner) {
            height: 47px;
            line-height: 47px;
            border: 0;
            color: #fff;
            padding: 0;
            // 解决记住密码背景色
            -webkit-text-fill-color: #ededed !important;
            box-shadow: 0 0 0px 1000px transparent inset !important;
            background-color: transparent;
            background-image: none;
            transition: background-color 50000s ease-in-out 0s; //背景色透明  生效时长  过渡效果  启用时延迟的时间
            background-color: transparent;
        }
        ::v-deep(.el-form-item__error) {
            padding-top: 10px;
        }
    }
    .login-btn {
        background-color: #5973fc;
        color: #fff;
        height: 47px;
        line-height: 47px;
        margin-top: 20px;
        padding: 0;
        font-size: 15px;
        border: none;
        letter-spacing: 1px;
    }
}
img.icon {
    display: block;
    width: 25px;
    padding: 0 5px;
}
</style>