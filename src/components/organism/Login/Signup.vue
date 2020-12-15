<template>
    <div>
        <SignupTxt />
        <v-form ref="formSignup" class="form-signin mt-4 pt-1 mb-1" @submit="signup">
            <v-alert class="alert-signin" color="red" :value="alert" transition="scale-transition">
                We've found an account with the email address. Please sign in.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <v-icon @click="close_alert">
                        mdi-close
                    </v-icon>
                </button>
            </v-alert>
            <div class="form-label-group">
                <v-text-field type="text" id="name" class="form-control noborder" v-model="name" label="Solo"
                    placeholder="Full Name" solo :rules="[rules.required]" />
            </div>
            <div class="form-label-group mt-1">
                <v-text-field type="email" class="form-control noborder" v-model="email" label="Solo"
                    placeholder="Email" solo :rules="[rules.required, rules.email]" />
            </div>
            <div class="form-label-group mt-1">
                <v-text-field class="form-control noborder" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    v-model="password" :rules="[rules.required, rules.password]" :type="show1 ? 'text' : 'password'"
                    name="input-10-1" label="Solo" placeholder="Password" solo @click:append="show1 = !show1" />
            </div>
            <div class="form-label-group mt-1">
                <v-text-field class="form-control noborder" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                    v-model="password2" :rules="[rules.required, rules.confirm_password(password, password2)]"
                    :error="!valid()" label="Solo" placeholder="Confirm Password" solo
                    :type="show2 ? 'text' : 'password'" name="input-10-1" @click:append="show2 = !show2" />
            </div>
            <div class="form-label-group px-3 pt-1 pb-3 text-left">
                <!-- <v-checkbox v-model="agree" :rules="[rules.agree]" required>
                    <div slot="label" class="m-0">
                        <p class="m-0 pl-2 pt-2">I agree to the
                            <a href="https://ask.samelement.com/kbs/general/terms-of-service/" target="_blank"
                                class="m-link m-link--focus">terms of service.</a>
                        </p>
                    </div>
                </v-checkbox> -->
                <label class="m-checkbox m-checkbox--focus">
                    <input type="checkbox" name="agree" :rules="[rules.agree]" required> I agree to the <a
                        href="https://ask.samelement.com/kbs/general/terms-of-service/" target="_blank"
                        class="m-link m-link--focus">terms of service.</a>
                    <span></span>
                </label>
            </div>
            <v-btn type="submit" class="primary-button" :loading="loading" :disabled="loading">
                Sign Up</v-btn>
            <v-btn class="btn btn-lg btn-cancel btn-block" @click="backLogin">Cancel</v-btn>
        </v-form>
    </div>
</template>

<script lang="ts">
    import {
        Vue
    } from 'vue-property-decorator'
    import SignupTxt from '@/components/molecules/Login/Signup_txt.vue'


    export default Vue.extend({
        name: "signup",
        components: {
            SignupTxt
        },
        data() {
            return {
                userExists: false,
                name: '',
                email: '',
                password: '',
                password2: '',
                agree: '',
                loading: false,
                show1: false,
                show2: false,
                alert: false,
                rules: {
                    required: (value: never) => {
                        return !!value || "Required"
                    },
                    agree: (value: boolean) => {
                        return value === true
                    },
                    email: (value: string) => {
                        const pattern =
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return pattern.test(value) || "Please enter a valid Email.";
                    },
                    password: (value: string) => {
                        // eslint-disable-next-line no-useless-escape
                        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*().,])(?=.{8,})/;
                        return (
                            pattern.test(value) ||
                            "Min. 8 characters with at least one capital letter, a number and a special character (!@#$%^&*().,)"
                        );
                    },
                    confirm_password: (password: string, password2: string) => {
                        if (password !== password2) {
                            return "Confirmation Password is not match"
                        }
                        return true
                    }
                }
            }
        },
        methods: {
            async signup(e: Event) {
                e.preventDefault()
                if (this.valid() && (this.$refs.formSignup as Vue & {validate: () => boolean}).validate()) {
                    this.loading = true
                    const registerResponse = await this.$store.dispatch('Register', {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    })
                    this.loading = false
                    if (registerResponse.status) {
                        // this.$swal.fire({
                        //     icon: 'success',
                        //     title: 'Success',
                        //     text: registerResponse.response
                        // })
                        this.$router.push({
                            name: "signups"
                        })
                    } else {
                        this.alert = true
                        // this.$swal.fire({
                        //     icon: 'error',
                        //     title: 'Oops...',
                        //     text: registerResponse.response.message
                        // })
                    }
                }
            },
            valid() {
                return this.password === this.password2;
            },
            backLogin() {
                this.$router.push({
                    name: "Login"
                })
            },
            close_alert() {
                this.alert = false;
            }
        }
    })
</script>