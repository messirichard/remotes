<template>
    <div class="login">
        <MobileTopLogin />
        <div class="row no-gutters">
            <div class="col-md-30">
                <LeftSuccess />
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
import LeftSuccess from '@/components/template/Forgot/LeftSuccess.vue'
import MobileTopLogin from '@/components/atoms/Login/MobileTopLogin.vue'
export default Vue.extend({
    name: "Login",
    components:{
        RightLogin,
        LeftSuccess,
        MobileTopLogin
    },
})
</script>

<style lang="scss">
    @import '@/assets/sass/login.scss';
</style>