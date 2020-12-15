<template>
    <v-card flat tile>
        <div class="tab-pane" id="m_user_profile_tab_2">
            <form class="form-margin m-form m-form--fit m-form--label-align-right" method="post">
                <div class="m-portlet__body">
                    <div class="form-group m-form__group row">
                        <div class="col-md-2"></div>
                        <div class="col-7">
                            <h3 class="m-form__section">Organization Details
                            </h3>
                        </div>
                        <!-- {{getProfile}} -->
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Name</label>

                        <div class="col-md-7 col-sm-12">
                            <input name="org_name" class="form-control m-input" type="text"
                                v-model="getProfile.org_name" maxlength="64">
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Address Line 1</label>
                        <div class="col-md-7 col-sm-12">
                            <input name="org_addr1" class="form-control m-input" type="text"
                                v-model="getProfile.org_addr1" maxlength="70">
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Address Line 2</label>
                        <div class="col-md-7 col-sm-12">
                            <input name="org_addr2" class="form-control m-input" type="text"
                                v-model="getProfile.org_addr2" maxlength="70">
                        </div>
                    </div>


                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">City</label>
                        <div class="col-md-7 col-sm-12">
                            <autocomplete :search="searchcity" aria-label="Search City"
                                :get-result-value="getResultValueCity" :default-value="org_city" @submit="handleSubmitCity" :debounce-time="1000">
                                <template #result="{ result, props }">
                                    <li
                                        v-bind="props"
                                        class="autocomplete-result city-result"
                                    >
                                        <div class="city-title">
                                            {{ result.name }} - {{result.district}} - {{result.country}}
                                        </div>
                                    </li>
                                </template>
                            </autocomplete>
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Province / Region</label>
                        <div class="col-md-7 col-sm-12">
                            <input id="account_profile_org_province" name="org_province"
                                v-model="org_province" class="form-control m-input" type="text"
                                maxlength="20">
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Country</label>
                        <div class="col-md-7 col-sm-12">
                            <input id="account_profile_org_country" name="org_country" v-model="org_country"
                                class="form-control m-input" type="text" maxlength="52">
                        </div>
                    </div>

                    <!-- <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Country</label>
                        <div class="col-md-7 col-sm-12">
                            <autocomplete :search="searchcountry" aria-label="Search Country"
                                :get-result-value="getResultValueCountry" :default-value="org_country" @submit="handleSubmitCountry" :debounce-time="1000">
                                <template #result="{ result, props }">
                                    <li
                                        v-bind="props"
                                        class="autocomplete-result city-result"
                                    >
                                        <div class="city-title">
                                            {{ result.name }}
                                        </div>
                                    </li>
                                </template>
                            </autocomplete>
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Province / Region</label>
                        <div class="col-md-7 col-sm-12">
                            <autocomplete :search="searchregion" aria-label="Search Region"
                                :get-result-value="getResultValueRegion" :default-value="org_province" @submit="handleSubmitRegion" :debounce-time="1000">
                                <template #result="{ result, props }">
                                    <li
                                        v-bind="props"
                                        class="autocomplete-result city-result"
                                    >
                                        <div class="city-title">
                                            {{ result.name }}
                                        </div>
                                    </li>
                                </template>
                            </autocomplete>
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">City</label>
                        <div class="col-md-7 col-sm-12">
                            <autocomplete :search="searchcity" aria-label="Search City"
                                :get-result-value="getResultValueCity" :default-value="org_city" @submit="handleSubmitCity" :debounce-time="1000">
                                <template #result="{ result, props }">
                                    <li
                                        v-bind="props"
                                        class="autocomplete-result city-result"
                                    >
                                        <div class="city-title">
                                            {{ result.name }}
                                        </div>
                                    </li>
                                </template>
                            </autocomplete>
                        </div>
                    </div> -->


                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Zip / Postal Code</label>
                        <div class="col-md-3 col-sm-12">
                            <input name="org_zip" class="form-control m-input" type="text" v-model="getProfile.org_zip"
                                maxlength="8">
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Website Address</label>
                        <div class="col-md-7 col-sm-12">
                            <div class="input-group">
                                <input name="org_web" class="form-control m-input" type="text"
                                    v-model="getProfile.org_web" placeholder="" maxlength="70">
                                <div class="input-group-append"><span class="input-group-text"><i
                                            class="la la-globe"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Email Address</label>
                        <div class="col-md-7 col-sm-12">
                            <div class="input-group">
                                <input name="org_email" class="form-control m-input" type="text"
                                    v-model="getProfile.org_email" placeholder="" maxlength="255">
                                <div class="input-group-append"><span class="input-group-text"><i
                                            class="la la-at"></i></span></div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group m-form__group row">
                        <label class="col-md-2 col-sm-12 col-form-label">Phone No.</label>
                        <div class="col-md-7 col-sm-12">
                            <div class="input-group">
                                <input name="org_phone" class="phone form-control m-input" type="text"
                                    v-model="getProfile.org_phone" maxlength="20">
                                <div class="input-group-append"><span class="input-group-text"><i
                                            class="la la-phone"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="m-portlet__foot m-portlet__foot--fit">
                    <div class="m-form__actions">
                        <div class="row">
                            <div class="col-md-7 col-sm-12">
                                <button type="button" id="account-profile-tab2-submit"
                                    class="btn btn-accent m-btn m-btn--air m-btn--custom" @click="updateOrga">Save
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
    import {
        GetAllData,
        // GetToken
        // GetLocation
    } from '@/helpers/Config/Common'
    import axios from 'axios';
    // import Autocomplete from '@trevoreyre/autocomplete-vue'

    const URL = GetAllData.baseURL
    const params = 'search='

    export default Vue.extend({
        components: {
            // Autocomplete
        },
        data() {
            return {
                org_name: '',
                org_addr1: '',
                org_addr2: '',
                org_city: '',
                org_province: '',
                org_country: '',
                org_zip: '',
                org_web: '',
                org_email: '',
                org_phone: '',
                getCountry:'',
                getRegion:'',
                getCity:''
            }
        },
        created() {
            this.GetData();
            this.org_city= this.getProfile.org_city
            this.org_province= this.getProfile.org_province
            this.org_country= this.getProfile.org_country
        },
        computed: {
            ...mapGetters(['getProfile'])
        },
        methods: {
            searchcity(input: string) {
                const url = `${URL}/city?${params}${encodeURI(input)}`
                return new Promise(resolve => {
                    if (input.length < 3) {
                        return resolve([])
                    }
                    axios({
                        method: 'GET',
                        url: url, 
                        headers: GetAllData.headers,
                    }).then(response => {
                        console.log(response.data)
                        resolve(response.data)
                    }).catch(error => {
                        console.log(error)
                    })
                })
            },
            getResultValueCity(result: { name: string }) {
                return result.name
            },
            handleSubmitCity(result: { name: string; district: string; country: string }) {
                this.org_city = result.name
                this.org_province = result.district
                this.org_country = result.country
            },


            // searchcountry(input: string) {
            //     const url = `${URL}/countries`
            //     return new Promise(resolve => {
            //         if (input.length < 3) {
            //             return resolve([])
            //         }
            //         axios({
            //             method: 'GET',
            //             url: url, 
            //             headers: GetLocation.headers,
            //             params: {
            //                 namePrefix: `${encodeURI(input)}`
            //             }
            //         }).then(response => {
            //             console.log(response.data.data)
            //             resolve(response.data.data)
            //         }).catch(error => {
            //             console.log(error)
            //         })
            //     })
            // },
            // getResultValueCountry(result: { name: string }) {
            //     return result.name
            // },
            // handleSubmitCountry(result: { name: string; code: string }) {
            //     this.org_country = result.name
            //     this.getCountry = result.code
            //     console.log(this.getCountry)
            // },


            // searchregion(input: string) {
            //     const url = `${URL}/countries/${this.getCountry}/regions`
            //     return new Promise(resolve => {
            //         if (input.length < 3) {
            //             return resolve([])
            //         }
            //         axios({
            //             method: 'GET',
            //             url: url, 
            //             headers: GetLocation.headers,
            //             params: {
            //                 namePrefix: `${encodeURI(input)}`
            //             }
            //         }).then(response => {
            //             console.log(response.data.data)
            //             resolve(response.data.data)
            //         }).catch(error => {
            //             console.log(error)
            //         })
            //     })
            // },
            // getResultValueRegion(result: { name: string }) {
            //     return result.name
            // },
            // handleSubmitRegion(result: { name: string; isoCode: string }) {
            //     this.org_province = result.name
            //     this.getRegion = result.isoCode
            //     console.log(this.getRegion)
            // },


            // searchcity(input: string) {
            //     const url = `${URL}/countries/${this.getCountry}/regions/${this.getRegion}/cities`
            //     return new Promise(resolve => {
            //         if (input.length < 3) {
            //             return resolve([])
            //         }
            //         axios({
            //             method: 'GET',
            //             url: url, 
            //             headers: GetLocation.headers,
            //             params: {
            //                 namePrefix: `${encodeURI(input)}`
            //             }
            //         }).then(response => {
            //             resolve(response.data.data)
            //         }).catch(error => {
            //             console.log(error)
            //         })
            //     })
            // },
            // getResultValueCity(result: { city: string }) {
            //     // console.log(result.city+'111')
            //     return result.city
            // },
            // handleSubmitCity(result: { city: string; isoCode: string }) {
            //     this.org_city = result.city
            //     // this.getRegion = result.isoCode
            //     // console.log(this.org_city)
            // },



            async GetData() {
                await this.$store.dispatch('getDataProfile')
            },
            async updateOrga() {
                // console.log(this.org_city)
                const updates = await this.$store.dispatch('updateOrga', {
                    org_name: this.getProfile.org_name,
                    org_addr1: this.getProfile.org_addr1,
                    org_addr2: this.getProfile.org_addr2,
                    org_city: this.org_city,
                    org_province: this.org_province,
                    org_country: this.org_country,
                    org_zip: this.getProfile.org_zip,
                    org_web: this.getProfile.org_web,
                    org_email: this.getProfile.org_email,
                    org_phone: this.getProfile.org_phone,
                })
                // console.log(updates)
                if (updates.status) {
                    // this.$forceUpdate();
                    this.$swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: updates.response.data
                    })
                } else {
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: updates.response
                    })
                }
            }
        }
    })
</script>