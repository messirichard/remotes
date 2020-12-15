<template>
    <div>
        <Forgotpasstxt />
        <form class="form-signin mt-4 pt-1 mb-1" @submit="requestForgotPassword">
            <v-alert class="alert-signin green" color="green" :value="alert" transition="scale-transition">
                Cool! Password recovery instruction has been sent to your email.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <v-icon @click="close_alert">
                        mdi-close
                    </v-icon>
                </button>
            </v-alert>
            <v-alert class="alert-signin" color="red" :value="alert1" transition="scale-transition">
                Please enter a valid email address..!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <v-icon @click="close_alert1">
                        mdi-close
                    </v-icon>
                </button>
            </v-alert>
            <div class="form-label-group">
                <v-text-field type="email" class="form-control noborder" v-model="email" label="Solo"
                    placeholder="Email" solo :rules="[rules.required, rules.email]" />
            </div>
            <v-btn type="submit" class="primary-button mt-4" :loading="loading" :disabled="loading">
                Request</v-btn>
            <v-btn class="btn btn-lg btn-cancel btn-block mt-4" @click="$router.go(-1)">Cancel</v-btn>

        </form>
    </div>
</template>

<script lang="ts">
    import {
        Component,
        Vue
    } from 'vue-property-decorator'
    import Forgotpasstxt from '@/components/molecules/Login/Forgotpass_txt.vue'

    @Component({
        name: 'Forgotpass',
        components: {
            Forgotpasstxt
        }
    })
    export default class Forgotpass extends Vue {
        private loading: boolean
        private email: string
        private alert: boolean
        private alert1: boolean
        private rules: {email: (value: string) => true | "Please enter a valid Email."}
        constructor() {
            super()
            this.loading = false
            this.email = ''
            this.alert = false
            this.alert1 = false
            this.rules = {
                email: (value: string) => {
                    const pattern =
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || "Please enter a valid Email.";
                }
            }
        }

        public async requestForgotPassword(e: Event): Promise < void > {
            e.preventDefault()
            this.loading = true
            this.alert = false
            this.alert1 = false
            const requestForgotPasswordResponse = await this.$store.dispatch('requestForgotPassword', {
                email: this.email
            })
            if (requestForgotPasswordResponse.status) {
                this.$router.push({
                    name: "sendemail-forgotPass-success"
                })

            } else {
                this.alert1 = true;
            }
            // this.$swal.fire({
            //     icon: 'success',
            //     title: 'Success',
            //     text: requestForgotPasswordResponse.response
            // })
            // this.alert = true;
            this.loading = false
        }
        close_alert() {
            this.alert = false;
        }
        close_alert1() {
            this.alert1 = false;
        }

    }
</script>