<template>
    <v-card flat tile>
        <div class="tab-pane active" id="m_user_profile_tab_1">
            <form class="form-margin m-form m-form--fit m-form--label-align-right" method="post">
                <div class="m-portlet__body">
                    <div class="form-group m-form__group row">
                        <div class="col-md-2"></div>
                        <div class="col-7">
                            <h3 class="m-form__section">Personal Details
                            </h3>
                        </div>
                        <!-- <button type="button" id="account-profile-tab1-submit"
                            class="btn btn-accent m-btn m-btn--air m-btn--custom" @click="updateData">aaa</button> -->
                    </div>
                    <div class="form-group m-form__group row">
                        <!-- <h2>My deepest, darkest question: {{getProfile.user_fname}}</h2> -->
                        <label class="col-md-2 col-sm-12 col-form-label">First Name</label>
                        <div class="col-md-7 col-sm-12">
                            <input name="fname" class="form-control m-input" type="text" v-model="getProfile.user_fname"
                                maxlength="35">
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Last Name</label>
                        <div class="col-md-7 col-sm-12">
                            <input name="lname" class="form-control m-input" type="text" v-model="getProfile.user_lname"
                                maxlength="35">
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Job Title</label>
                        <div class="col-md-7 col-sm-12">
                            <input name="title" class="form-control m-input" type="text" v-model="getProfile.user_title"
                                maxlength="35">
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Phone No.</label>
                        <div class="col-md-7 col-sm-12">
                            <div class="input-group">
                                <input name="phone" class="phone form-control m-input" type="text"
                                    v-model="getProfile.user_phone" maxlength="20">
                                <div class="input-group-append"><span class="input-group-text"><i
                                            class="la la-phone"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Email Address</label>
                        <div class="col-md-7 col-sm-12">
                            <div class="input-group">
                                <input class="form-control m-input m-input--solid" type="text"
                                    v-model="getProfile.user_email" readonly>
                                <div class="input-group-append"><span class="input-group-text"><i
                                            class="la la-at"></i></span></div>
                            </div>
                            <span class="m-form__help">To change your email address, enter your new email address on
                                Change Email
                                section below. Email confirmation is required.</span>
                        </div>
                    </div>
                    <div class="m-form__seperator m-form__seperator--dashed m-form__seperator--space-2x">
                    </div>
                    <div class="form-group m-form__group row">
                        <div class="col-md-2"></div>
                        <div class="col-7">
                            <h3 class="m-form__section">Update Password
                            </h3>
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Current Password</label>
                        <div class="col-md-7 col-sm-12">
                            <input name="opassword" v-model="opassword" class="form-control m-input" type="password"
                                placeholder="Leave it blank if you don't want to change your passsword."
                                autocomplete="off">
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">New Password</label>
                        <div class="col-md-7 col-sm-12">
                            <input id="password" name="password" v-model="password" class="form-control m-input"
                                type="password" placeholder="Leave it blank if you don't want to change your passsword."
                                autocomplete="off" maxlength="128">
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label" style="top:0px;">Repeat New Password</label>
                        <div class="col-md-7 col-sm-12">
                            <input name="rpassword" v-model="rpassword" class="form-control m-input" type="password"
                                placeholder="Leave it blank if you don't want to change your passsword."
                                autocomplete="off" maxlength="128">
                        </div>
                    </div>
                    <div class="m-form__seperator m-form__seperator--dashed m-form__seperator--space-2x">
                    </div>
                    <div class="form-group m-form__group row">
                        <div class="col-md-2"></div>
                        <div class="col-7">
                            <h3 class="m-form__section">Change Email
                            </h3>
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">New Email Address</label>
                        <div class="col-md-7 col-sm-12">
                            <div class="input-group">
                                <input name="cemail" v-model="cemail" class="form-control m-input" type="text" value=""
                                    placeholder="Leave it blank if you don't want to change your email address."
                                    autocomplete="off" maxlength="255">
                                <div class="input-group-append"><span class="input-group-text"><i
                                            class="la la-at"></i></span></div>
                            </div>
                            <span class="m-form__help">Make sure you have access to the email address as confirmation
                                will be
                                needed.</span>
                        </div>
                    </div>
                </div>
                <div class="m-portlet__foot m-portlet__foot--fit">
                    <div class="m-form__actions">
                        <div class="row">
                            <div class="col-md-2 col-sm-12">
                            </div>
                            <div class="col-md-7 col-sm-12">
                                <button type="button" id="account-profile-tab1-submit"
                                    class="btn btn-accent m-btn m-btn--air m-btn--custom" @click="updateData">Save
                                    Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </v-card>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {
        mapGetters
    } from 'vuex';
    export default Vue.extend({
        data() {
            return {
                user_fname: '',
                user_lname: '',
                user_title: '',
                user_phone: '',
                opassword: '',
                password: '',
                rpassword: '',
                cemail: '',
            }
        },
        created() {
            this.GetData();
        },
        computed: {
            ...mapGetters(['getProfile'])
        },
        methods: {
            async GetData() {
                await this.$store.dispatch('getDataProfile')
            },
            async updateData() {
                const updates = await this.$store.dispatch('updateData', {
                    user_fname: this.getProfile.user_fname,
                    user_lname: this.getProfile.user_lname,
                    user_title: this.getProfile.user_title,
                    user_phone: this.getProfile.user_phone,
                    opassword: this.opassword,
                    password: this.password,
                    rpassword: this.rpassword,
                    cemail: this.cemail
                })
                if (updates.status) {
                    // this.$forceUpdate();
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: updates.response.data
                    })
                } else {
                    // console.log(updates.response.message)
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Check again you field ...!',
                        text: updates.response.message
                    })
                }
            }
        }
    })
</script>