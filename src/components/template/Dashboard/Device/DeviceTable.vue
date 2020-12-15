<template>
    <div class="all-tables-apis">
        <!-- <div class="head-api">
            <div class="row">
                <div class="col-md-9">
                    <div class="title">
                        <h3>List of My Devices</h3>
                    </div>
                </div>
                <div class="col-md-3">
                </div>
            </div>
        </div> -->
        <v-divider class="head-subhead"></v-divider>
        <div class="subhead-api">
            <div class="row">
                <div class="col-md-3 col-6">
                    <v-card-title>
                        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details>
                        </v-text-field>
                    </v-card-title>
                </div>
                <div class="col-md-9 col-6">
                    <div class="dt-buttons btn-group float-right">
                        <v-dialog v-model="dialogCSV" persistent max-width="400">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" dark v-bind="attrs" v-on="on" class="mr-3">
                                    CSV
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title class="headline">
                                    Export To CSV now
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field label="Input File Name" :rules="rules" hide-details="auto">
                                    </v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="green darken-1" text @click="dialogCSV= false">
                                        Close
                                    </v-btn>
                                    <v-btn color="green darken-1" text @click="dialogCSV= false">
                                        Export
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogPDF" persistent max-width="400">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                                    PDF
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title class="headline">
                                    Export To PDF now
                                </v-card-title>
                                <v-card-text>
                                    <v-text-field label="Input File Name" :rules="rules" hide-details="auto">
                                    </v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="green darken-1" text @click="dialogPDF = false">
                                        Close
                                    </v-btn>
                                    <v-btn color="green darken-1" text @click="dialogPDF = false">
                                        Export
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>

                    </div>
                </div>
            </div>
        </div>
        <!-- <p>{{getDevice}}</p> -->
        <!-- <v-data-table v-model="selected" :headers="headers" :search="search" :single-select="singleSelect" :items="getDevice"
            item-key="name" show-select class="elevation-1 data-api device-mobile-show">
            <template>
                <template v-slot:item.action="{  }">
                <ViewData />
                <UpdateDevice />
                <DeleteDevice />
            </template>
        </v-data-table> -->
        <v-data-table :headers="headers" v-model="selected" :items="getDevice">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.value1 }}</td>
                <td>{{ props.item.value2 }}</td>
            </template>

        </v-data-table>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {
        mapGetters
    } from 'vuex';
    export default Vue.extend({
        data() {
            // const tableDataSimple = this.getDevice

            return {
                // tableDataSimple,
                search: '',
                singleSelect: true,
                selected: [],
                pagination: {},
                devices: [],
                rules: [
                    (value: any) => !!value || 'Required.', (value: string | any[]) => (value && value
                        .length >= 3) ||
                    'Min 3 characters',
                ],
                headers: [{
                        text: 'SN',
                        align: 'left',
                        value: 'sn',
                    },
                    {
                        text: 'Model',
                        value: 'model',
                        align: 'left'
                    },
                    {
                        text: 'Name',
                        value: 'name',
                        align: 'left'
                    },
                    // {
                    //     text: 'MAC',
                    //     value: 'mac_address',
                    //     align: 'left'
                    // },
                    {
                        text: 'Sammy Ver',
                        value: 'sammy',
                        align: 'left'
                    },
                    {
                        text: 'Firmware Ver',
                        value: 'fwVersion',
                        align: 'left'
                    },
                    // {
                    //     text: 'Born',
                    //     value: 'born',
                    //     align: 'left'
                    // },

                    {
                        text: 'User',
                        value: 'adminName',
                        align: 'left'
                    },


                    {
                        text: 'Log Limit',
                        value: 'loglimit',
                        align: 'left'
                    },
                    // {
                    //     text: 'Logged',
                    //     value: 'logged',
                    //     align: 'left'
                    // },
                    {
                        text: 'State',
                        value: 'state',
                        align: 'left'
                    },
                    {
                        text: 'Status',
                        value: 'status',
                        align: 'left'
                    },
                    {
                        text: 'Action',
                        value: 'action',
                        align: 'left'
                    },
                ],
                dialogCSV: false,
                dialogPDF: false,
            }
        },
        // watch: {
        //     options: {
        //         handler() {
        //             // eslint-disable-next-line no-undef
        //             readDataFromAPI()
        //         }
        //     },
        //     deep: true
        // },
        computed: {
            ...mapGetters(['getDevice'])
        },
        created() {
            // this.devices = this.getDevice
            this.GetData()
        },
        methods: {
            async GetData() {
                await this.$store.dispatch('getDataDevice')
            }
            // initialize(){
            //     this.data = []
            // },
            // async GetData(){
            //     this.data = this.getDevice
            // }
        },
        // mounted() {
        //     this.readDataFromAPI()
        // },
    })
</script>