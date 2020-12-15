<template>
    <div class="all-tables-apis">
        <div class="head-api">
            <div class="row">
                <div class="col-md-9">
                    <div class="title">
                        <h3>List of My API</h3>
                    </div>
                </div>
                <div class="col-md-3">
                    <ApiCreateButton />
                </div>
            </div>
        </div>
        <v-divider class="head-subhead"></v-divider>
        <div class="subhead-api">
            <div class="row">
                <div class="col-md-3">
                    <v-card-title>
                        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details>
                        </v-text-field>
                    </v-card-title>
                </div>
                <div class="col-md-9">
                    <div class="dt-buttons btn-group float-right">
                        <button class="btn btn-secondary buttons-print" tabindex="0" aria-controls="tbl_api"
                            type="button"><span>Print</span></button>
                        <button class="btn btn-secondary buttons-copy buttons-html5" tabindex="0"
                            aria-controls="tbl_api" type="button"><span>Copy</span></button>
                        <button class="btn btn-secondary buttons-excel buttons-html5" tabindex="0"
                            aria-controls="tbl_api" type="button"><span>Excel</span></button>
                        <button class="btn btn-secondary buttons-csv buttons-html5" tabindex="0" aria-controls="tbl_api"
                            type="button"><span>CSV</span></button>
                        <button class="btn btn-secondary buttons-pdf buttons-html5" tabindex="0" aria-controls="tbl_api"
                            type="button"><span>PDF</span></button>
                    </div>
                </div>
            </div>
        </div>
        <v-data-table v-model="selected" :headers="headers" :search="search"
            :single-select="singleSelect" item-key="name" show-select
            class="elevation-1 data-api api-mobile-show">
        <!-- <v-data-table v-model="selected" :headers="headers" :search="search" :items="apiData"
            :single-select="singleSelect" item-key="name" show-select :pagination.sync="pagination"
            class="elevation-1 data-api api-mobile-show"> -->
            <template>
            <!-- <template v-slot:item.action=""> -->
                <ViewDetAPI />
                <UpdateApi />
                <DeleteAPI />
            </template>
        </v-data-table>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import ApiCreateButton from '@/components/template/Dashboard/Api/ApiCreateButton.vue'
    import UpdateApi from '@/components/organism/Dashboard/Api/UpdateApi.vue'

    export default Vue.extend({
        components:{
            ApiCreateButton,
            UpdateApi
        },
        data() {
            return {
                search: '',
                singleSelect: false,
                selected: [],
                // pagination: {},
                headers: [{
                        text: 'Name',
                        align: 'left',
                        value: 'name',
                    },
                    {
                        text: 'API Username',
                        value: 'api_username',
                        align: 'left',
                    },
                    {
                        text: 'State',
                        value: 'state',
                        align: 'left'
                    },
                    {
                        text: 'Action',
                        value: 'action',
                        align: 'center'
                    }
                ],
            }
        },
        // computed: {
        //     apiData(){
        //         return !this.dataLoaded ? [] : this.getData;
        //     },
        //     dataLoaded(){
        //         //maybe something like this (not suyre what your full vuex getter call is been a while since i worked with vuex)
        //         return this.getData && this.getData.length > 0;
        //     },
        //     ...mapGetters('API', ['getData'])
        // },
        // created() {
        //     //or put this in the 'created' hook
        //     //this way the data is loaded before the component is mounted
        //     this.$store.dispatch('API/getData')
        // },
        // methods: {
        //     initialize() {
        //         this.data = []
        //     },
        // },
    })
</script>