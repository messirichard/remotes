<template>
    <div class="left-content-login pt-5">
        <div class="box-content">
            <div class="logo mb-1 pb-5">
                <Logo />
            </div>
            <SendEmailForgotPassSuccess />
            <div class="dont-have">
                <p>Don't have an account yet ? <button @click="signup">Sign Up</button></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Vue
    } from 'vue-property-decorator'
    import SendEmailForgotPassSuccess from '@/components/organism/Login/SendEmailForgotPassSuccess.vue'
    import Logo from '@/components/atoms/logo/logo.vue'

    @Component({
        components: {
            SendEmailForgotPassSuccess,
            Logo
        }
    })

    export default class LeftForgotSuccess extends Vue {
        signup() {
            this.$router.push({
                name: 'Signup'
            });
        }
    }
</script>