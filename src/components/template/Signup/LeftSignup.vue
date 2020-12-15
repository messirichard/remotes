<template>
    <div class="left-content-login py-5 px-5">
        <div class="box-content">
            <div class="logo mb-1 pb-5">
                <Logo />
            </div>
            <Signup />
        </div>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Vue
    } from 'vue-property-decorator'
    import Signup from '@/components/organism/Login/Signup.vue'
    import Logo from '@/components/atoms/logo/logo.vue'

    @Component({
        components: {
            Signup,
            Logo
        }
    })

    export default class LeftSignup extends Vue {

    }
</script>