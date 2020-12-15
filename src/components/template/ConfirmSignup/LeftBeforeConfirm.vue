<template>
    <div class="left-content-login">
        <div class="box-content">
            <div class="logo mb-1 pb-5">
                <Logo />
            </div>
            <BeforeSignup />
            
            <div class="dont-have">
                <p>Don't have an account yet ? <button @click="signup">Sign Up</button></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BeforeSignup from '@/components/organism/Login/BeforeSignup.vue'
import Logo from '@/components/atoms/logo/logo.vue'

@Component({
    components:{
        BeforeSignup,
        Logo
    }

})

export default class LeftBeforeConfirm extends Vue {
    signup() {
        this.$router.push({name: 'Signup'}); 
    }
    
}
</script>