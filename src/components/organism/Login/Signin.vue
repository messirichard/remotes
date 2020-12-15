<template>
    <div>
        <SigninTxt />
        <v-form class="form-signin mt-4 pt-4 mb-1" @submit="onLogin">
            <v-alert class="alert-signin" color="red" :value="alert" transition="scale-transition">
                Incorrect username or password. Please try again.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <v-icon @click="close_alert">
                        mdi-close
                    </v-icon>
                </button>
            </v-alert>
            <div class="form-label-group">
                <v-text-field v-model="username" type="text" label="Solo" placeholder="Email" solo
                    :rules="[rules.required, rules.email]"></v-text-field>
            </div>
            <div class="form-label-group">
                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Solo"
                    placeholder="Password" solo @click:append="show1 = !show1"></v-text-field>
            </div>
            <div class="forgot text-right">
                <a @click="forgot">Forgot Password</a>
            </div>
            <v-btn type="submit" class="primary-button" :loading="loading" :disabled="loading">
                Sign In
            </v-btn>
        </v-form>
    </div>
</template>

<script lang="ts">
    import {
        Vue
    } from 'vue-property-decorator'
    import SigninTxt from '@/components/molecules/Login/Signin_txt.vue'
    import {
        GetToken
    } from '@/helpers/Config/Common'

    export default Vue.extend({
        components: {
            SigninTxt
        },
        data() {
            return {
                username: '',
                password: '',
                loading: false,
                alert: false,
                show1: false,
                rules: {
                    required: (value: string) => !!value || 'Required.',
                    email: (value: string) => {
                        const pattern =
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return pattern.test(value) || "Please enter a valid Email.";
                    },
                }

            }
        },
        mounted() {
            if (document.cookie != null && GetToken()) {
                this.$router.push({
                    name: "Main"
                })
            }
        },
        methods: {
            async onLogin(e: Event) {
                e.preventDefault()
                this.loading = true;
                const loginResponse = await this.$store.dispatch('retrieveToken', {
                    username: this.username,
                    password: this.password
                })
                this.loading = false;
                if (loginResponse.status) {
                    window.location.replace("/dashboard/main");
                    this.$forceUpdate();
                    this.$router.push({
                        name: "Main"
                    })
                } else {
                    this.alert = true;
                }
            },

            forgot() {
                this.$router.push({
                    name: 'ForgotPassword'
                });
            },
            close_alert() {
                this.alert = false;
            }
        }
    })
</script>