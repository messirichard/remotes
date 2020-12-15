<template>
    <div>
        <div class="logo mb-1 pb-5">
            <Logo />
        </div>
        <div class="txt">
            <h4>Forgotten Password?</h4>
            <p>Enter new password to reset your password</p>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        Vue
    } from 'vue-property-decorator'
    import Logo from '@/components/atoms/logo/logo.vue'

    export default Vue.extend({
        components: {
            Logo
        }
    })
</script>