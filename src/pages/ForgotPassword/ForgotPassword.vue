<template>
    <div class="login">
        <MobileTopLogin />
        <div class="row no-gutters">
            <div class="col-md-30">
                <LeftForgot />
            </div>
            <div class="col-md-30">
                <RightLogin />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RightLogin from '@/components/template/Login/RightLogin.vue'
import LeftForgot from '@/components/template/Forgot/LeftForgot.vue'
import MobileTopLogin from '@/components/atoms/Login/MobileTopLogin.vue'
export default Vue.extend({
    name: "Login",
    components:{
        RightLogin,
        LeftForgot,
        MobileTopLogin
    },
})
</script>

<style lang="scss">
    @import '@/assets/sass/login.scss';
</style>