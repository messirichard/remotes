<template>
    <div v-if="visibility" class="verification-wrapper">
        <div class="swal2-popup">
            <div class="swal2-header">
                <div v-if="status" class="swal2-icon swal2-success swal2-icon-show" style="display: flex;">
                    <div class="swal2-success-circular-line-left" style="background-color: rgb(255, 255, 255);"></div>
                    <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
                    <div class="swal2-success-ring"></div>
                    <div class="swal2-success-fix" style="background-color: rgb(255, 255, 255);"></div>
                    <div class="swal2-success-circular-line-right" style="background-color: rgb(255, 255, 255);"></div>
                </div>
                <div v-else class="swal2-icon swal2-error swal2-icon-show" style="display: flex;">
                    <span class="swal2-x-mark">
                        <span class="swal2-x-mark-line-left"></span>
                        <span class="swal2-x-mark-line-right"></span>
                    </span>
                </div>
                <h2 class="swal2-title">{{ title }}</h2>
            </div>
            <div class="swal2-content">
                <div class="swal2-html-container">
                    {{ message }}
                </div>
            </div>
            <div class="swal2-actions">
                <router-link v-if="status" to="/" class="swal2-confirm swal2-styled">Sign in now</router-link>
                <router-link v-else to="/" class="swal2-confirm swal2-styled">Back to home</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'ConfirmSignup'
})
export default class Verification extends Vue {
    private title: string
    private message: string
    private status: boolean
    private visibility: boolean

    constructor() {
        super()
        this.title = ''
        this.status = false
        this.visibility = false
        this.message = ''
    }

    mounted() {
        this.confirmAccount()
    }

    /**
     * confirmAccount
     */
    public async confirmAccount(): Promise<void> {
        const confirmSignupResponse = await this.$store.dispatch('confirmSignup', {
            email: this.$route.query.email,
            code: this.$route.query.code
        })

        this.visibility = true

        this.status = confirmSignupResponse.status
        if (confirmSignupResponse.status) {
            this.title = 'Verification Success'
            this.message = confirmSignupResponse.response
            this.$router.push({
                    name: "confirm-signup-success"
                })
        } else {
            this.title = 'Verification Failed'
            this.message = confirmSignupResponse.response.message
        }
    }
}
</script>

<style scoped>
.verification-wrapper{
    display: flex;
    height: 100vh;
}
.swal2-popup {
    max-width: 320px;
    padding: 20px 0px;
    margin: auto;
    display: block!important;
}
</style>