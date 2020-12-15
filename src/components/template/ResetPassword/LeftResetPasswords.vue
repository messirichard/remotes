<template>
    <div class="left-content-login py-5 px-5">
        <div class="box-content">
            <div class="logo mb-1 pb-5">
                <Logo />
            </div>
            <ResetPassSuccess />
            
            <div class="dont-have">
                <p>Don't have an account yet ? <button @click="signup">Sign Up</button></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ResetPassSuccess from '@/components/organism/Login/ResetPassSuccess.vue'
import Logo from '@/components/atoms/logo/logo.vue'

@Component({
    components:{
        ResetPassSuccess,
        Logo
    }

})

export default class LeftResetPasswords extends Vue {
    signup() {
        this.$router.push({name: 'Signup'}); 
    }
    
}
</script>