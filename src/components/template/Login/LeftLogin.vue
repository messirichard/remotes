<template>
    <div class="left-content-login py-5 px-5">
        <div class="box-content">
            <div class="logo mb-1 pb-5">
                <Logo />
            </div>
            <Signin />
            <div class="dont-have">
                <p>Don't have an account yet ? <button @click="signup">Sign Up</button></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Signin from '@/components/organism/Login/Signin.vue'
import Logo from '@/components/atoms/logo/logo.vue'

@Component({
    components:{
        Signin,
        Logo
    }

})

export default class LeftLogin extends Vue {
    signup() {
        this.$router.push({name: 'Signup'}); 
    }
    
}
</script>