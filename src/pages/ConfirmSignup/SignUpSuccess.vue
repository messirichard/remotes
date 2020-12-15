<template>
    <div class="login">
        <MobileTopLogin />
        <div class="row no-gutters">
            <div class="col-md-30">
                <LeftConfirm />
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
import MobileTopLogin from '@/components/atoms/Login/MobileTopLogin.vue'
import LeftConfirm from '@/components/template/ConfirmSignup/LeftConfirm.vue'
export default Vue.extend({
    name: "Login",
    components:{
        RightLogin,
        LeftConfirm,
        MobileTopLogin
    },
})
</script>

<style lang="scss">
    @import '@/assets/sass/login.scss';
</style>