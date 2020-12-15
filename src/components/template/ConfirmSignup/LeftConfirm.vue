<template>
    <div class="left-content-login">
        <div class="box-content">
            <div class="logo mb-1 pb-5">
                <Logo />
            </div>
            <ConfirmPass />
            
            <div class="dont-have">
                <p>Don't have an account yet ? <button @click="signup">Sign Up</button></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ConfirmPass from '@/components/organism/Login/ConfirmPass.vue'
import Logo from '@/components/atoms/logo/logo.vue'

@Component({
    components:{
        ConfirmPass,
        Logo
    }

})

export default class LeftConfirm extends Vue {
    signup() {
        this.$router.push({name: 'Signup'}); 
    }
    
}
</script>