<template>
    <div class="forgot-password-form-wrapper py-5 px-5">
        <ForgotpassResponse :title="response.title" :message="response.message" :status="response.status"
            :visibility="response.visibility" />
        <div v-if="!response.visibility" class="forgot-password-content text-center">
            <ResetTxt />
            <!-- <h4 class="text-center">Reset Password</h4> -->
            <v-form ref="form" class="form-reset mt-4" @submit="resetPassword">
                <v-alert class="alert-signin blue" color="blue" :value="alert" transition="scale-transition">
                    Verification successfull! <br>
                    Now enter your new password
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <v-icon @click="close_alert">
                            mdi-close
                        </v-icon>
                    </button>
                </v-alert>
                <v-text-field :type="password_visibility ? 'text' : 'password'" v-model="password"
                    :append-icon="password_visibility ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="() => (password_visibility = !password_visibility)" label="Solo"
                    placeholder="Password" solo :rules="[rules.required, rules.password]"></v-text-field>
                <v-text-field :type="confirm_password_visibility ? 'text' : 'password'" v-model="confirm_password"
                    :append-icon="confirm_password_visibility ? 'mdi-eye-off' : 'mdi-eye'"
                    @click:append="() => (confirm_password_visibility = !confirm_password_visibility)" label="Solo"
                    placeholder="Confirm Password" solo
                    :rules="[rules.required, rules.confirm_password(password, confirm_password)]"></v-text-field>
                        <v-btn type="submit" class="primary-button" :loading="loading" :disabled="loading">Update
                        </v-btn>
                        <v-btn class="btn btn-lg btn-cancel btn-block" @click="handleClick">Cancel</v-btn>
            </v-form>
        </div>
        <div class="dont-have">
            <p>Don't have an account yet ? <button @click="signup">Sign Up</button></p>
        </div>
    </div>
</template>
<script lang="ts">
    import {
        Component,
        Vue
    } from 'vue-property-decorator';
    import ForgotpassResponse from '@/components/molecules/Login/ForgotPasswordResponse.vue';
    import ForgetPasswordResponse from '@/components/molecules/Login/ForgetPasswordResponse'
    import ResetTxt from '@/components/molecules/Login/Reset_txt.vue'

    @Component({
        name: 'ForgotpassForm',
        components: {
            ForgotpassResponse,
            ResetTxt
        }
    })

    export default class ForgotpassForm extends Vue {

        private email: string
        private code: string
        private loading: boolean
        private password: string
        private password_visibility: boolean
        private confirm_password: string
        private confirm_password_visibility: boolean
        private alert: boolean

        private response: ForgetPasswordResponse
        private rules: {
            password: (value: string) => true |
                "Min. 8 characters with at least one capital letter, a number and a special character (!@#$%^&*().,)";confirm_password: (
                password: string, confirm_password: string) => true | "Confirmation Password is not match";
        };



        constructor() {
            super()
            this.email = String(this.$route.query.email)
            this.code = String(this.$route.query.code)
            this.loading = false
            this.password = ''
            this.password_visibility = false
            this.confirm_password = ''
            this.confirm_password_visibility = false
            this.alert = true
            this.rules = {
                password: (value: string) => {
                    // eslint-disable-next-line no-useless-escape
                    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*().,])(?=.{8,})/;
                    return (
                        pattern.test(value) ||
                        "Min. 8 characters with at least one capital letter, a number and a special character (!@#$%^&*().,)"
                    );
                },
                confirm_password: (password: string, confirm_password: string) => {
                    if (password !== confirm_password) {
                        return "Confirmation Password is not match"
                    }
                    return true
                }
            }

            this.response = new ForgetPasswordResponse('', '', false, false)


        }

        public async resetPassword(e: Event): Promise < void > {
            e.preventDefault()
            this.loading = true
            this.response.visibility = false
            const resetPasswordResponse = await this.$store.dispatch('resetPassword', {
                email: this.email,
                password: this.password,
                rpassword: this.confirm_password,
                reset: this.code
            })

            if (resetPasswordResponse.status) {
                this.$router.push({
                    name: "reset-password-success"
                })
            } else {
                // this.alert = true;
            }

            // this.loading = false
            // this.response.visibility = true
            // this.response.status = resetPasswordResponse.status
            // this.response.title = 'Reset Password ' + ((resetPasswordResponse.status) ? 'Success' : 'Failed')
            // if (resetPasswordResponse.status) {
            //     this.response.message = resetPasswordResponse.response
            // } else {
            //     this.response.message = resetPasswordResponse.response.message
            // }
        }
        public handleClick() {
            this.$router.push('/')
        }
        public close_alert() {
            this.alert = false
        }
        public signup() {
            this.$router.push('/signup')
        }
    }
</script>
<style lang="scss">
    .dont-have {
        font-weight: 400;
        color: #898b96;
        bottom: 1%;
        position: absolute;
        text-align: center;
        margin: 0 auto;
        width: 100%;
        right: 0;

        p {
            font-size: 14px;

            button {
                color: #9816f4;
                margin-left: 10px;
            }
        }
    }

    input {
        border-radius: 0;
        border: 0;
        border-bottom: 1px solid #ebedf2;
        padding: 5px 0;
        font-family: 'Roboto'sans-serif;
        font-size: 14px !important;
    }

    input::placeholder {
        font-size: 14px;
    }

    .v-messages__message {
        color: red;
    }

    .v-text-field.v-text-field--solo .v-input__control {
        min-height: 28px;
    }

    button.v-icon.notranslate.v-icon--link.mdi.mdi-close.theme--light {
        color: #36a3f7;

    }

    .v-text-field {
        padding-top: 0;
        margin-top: 0;

    }

    .v-input__slot {
        box-shadow: none !important;
        background-color: transparent !important;
        margin-bottom: 0;
        // .v-text-field__slot:active,
        // .v-text-field__slot:focus,
        // .v-text-field__slot:visited,
        // .v-text-field__slot:hover{
        //     border-bottom: 1px solid #716aca;
        // }
    }

    button.primary-button.v-btn.v-btn--contained.theme--light.v-size--default {
        background-color: #9816f4;
        border-color: #9816f4;
        font-size: 1rem;
        font-weight: 400;
        width: 125px;
        border-radius: 50px;
        margin: 0 auto;
        height: 50px;
        color: #fff;
        display: inline-block;
        margin: 0 20px;
        text-transform: capitalize;
        font-size: 14px !important;
        margin-bottom: 50px;


        span.v-btn__loader {
            .v-progress-circular.v-progress-circular--indeterminate {
                color: #ffffff;
            }
        }
    }

    button.btn.btn-lg.btn-cancel.btn-block.v-btn.v-btn--contained.theme--light.v-size--default {
        background-color: transparent !important;
        border-color: #9816f4;
        font-size: 1rem;
        font-weight: 400;
        width: 125px;
        border-radius: 50px;
        margin: 0 auto;
        height: 50px;
        color: #9816f4;
        display: inline-block;
        text-transform: capitalize;
        font-size: 14px !important;
        margin-bottom: 50px;

        span.v-btn__loader {
            .v-progress-circular.v-progress-circular--indeterminate {
                color: #ffffff;
            }
        }
    }

    .forgot-password-form-wrapper {
        display: flex;
        height: 100vh;
    }

    .forgot-password-content {
        max-width: 100%;
        margin: auto;
        padding: 20px 0px;
        width: 400px;

        img {
            width: 125px;
        }

        .txt {
            h4 {
                font-size: 19px;
                font-weight: 500;
            }

            p {
                font-size: 13px;
            }
        }
    }

    .form-reset {
        .btn {
            background-color: #9816f4 !important;
            border-color: #9816f4 !important;
            color: #fff;
        }
    }

    form.v-form.form-reset {
        label.v-label.v-label--active {
            margin-left: -15px;
        }
    }

    @media screen and (max-width: 800px){
        button.primary-button.v-btn.v-btn--contained.theme--light.v-size--default,
        button.btn.btn-lg.btn-cancel.btn-block.v-btn.v-btn--contained.theme--light.v-size--default{
            margin: 0 5px;
        }
    }
</style>