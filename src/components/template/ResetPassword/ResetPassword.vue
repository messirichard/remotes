<template>
    <div class="forgot-pass-request-wrapper">
        <p v-if="waiting" class="text-muted waiting d-none">Please wait... we're checking your request...</p>
        <ForgotpassResponse 
            :title="response.title"
            :message="response.message"
            :status="response.status"
            :visibility="response.visibility"
             />
        <ForgotpassForm v-if="response.status" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ForgotpassForm from '@/components/molecules/Login/ForgotpassForm.vue';
import ForgotpassResponse from '@/components/molecules/Login/ForgotPasswordResponse.vue';
import ForgetPasswordResponse from '@/components/molecules/Login/ForgetPasswordResponse'

@Component({
    name: 'ResetPassword',
    components: {
        ForgotpassForm,
        ForgotpassResponse
    }
})

export default class ResetPassword extends Vue {

    private response: ForgetPasswordResponse
    private waiting: boolean

    constructor() {
        super()
        this.response = new ForgetPasswordResponse('', '', false, false)
        this.waiting = true
    }

    mounted() {
        this.validateCodeConfirmation()
    }

    public async validateCodeConfirmation(): Promise<void> {
        const confirmResetPasswordResponse = await this.$store.dispatch('confirmResetPassword', {
            email: this.$route.query.email,
            code: this.$route.query.code
        })
        .then((response) => {
            return response
        })
        .finally(() => {
            this.waiting = false
        })

        if (confirmResetPasswordResponse.status) {
            this.response.status = confirmResetPasswordResponse.status
            this.response.title = 'Reset Password ' + ((confirmResetPasswordResponse.status) ? 'Success' : 'Failed')
            this.response.message = confirmResetPasswordResponse.response
        } else {
            this.response.visibility = true
            this.response.status = false
            this.response.title = 'Reset Password Failed'
            this.response.message = confirmResetPasswordResponse.response.message

        }
    }
}
</script>

<style lang="sass" scoped>
.waiting 
    padding: 1rem
    font-size: 1.3rem
</style>