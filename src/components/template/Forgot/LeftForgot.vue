<template>
    <div class="left-content-login py-5 px-5">
        <div class="box-content">
            <div class="logo mb-1 pb-5">
                <Logo />
            </div>
            <Forgotpass />
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
    import Forgotpass from '@/components/organism/Login/Forgotpass.vue'
    import Logo from '@/components/atoms/logo/logo.vue'

    @Component({
        components: {
            Forgotpass,
            Logo
        }
    })

    export default class LeftForgotpass extends Vue {
        signup() {
            this.$router.push({
                name: 'Signup'
            });
        }
    }
</script>