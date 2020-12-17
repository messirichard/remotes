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

            <div v-if="selected.length > 0" class="row mt-2 mb-0 ml-2">
              <div class="md-3 col-3">
                <v-overflow-btn
                  :items="statusActions"
                  outlined
                  label="Status Actions"
                ></v-overflow-btn>
              </div>
              <div class="md-3 col-3">
                <v-overflow-btn
                  :items="logActions"
                  outlined
                  label="Log Actions"
                ></v-overflow-btn>
              </div>
              <div class="md-3 col-3">
                <v-btn color="red" dark x-large @click="deleteAction()">Delete Selected</v-btn>
              </div>
              <!-- <v-flex></v-flex> -->
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
        
        <v-data-table 
          :headers="headers"
          :search="search" 
          v-model="selected" 
          :items="getDevice"
          :single-expand="singleExpand"
          :expanded.sync="expanded"
          @item-expanded="loadDetails"
          :single-select="singleSelect"
          show-select
          item-key="sn"
          show-expand
          >
            <!-- <template slot="items" slot-scope="props">
                <td>{{ props.item.value1 }}</td>
                <td>{{ props.item.value2 }}</td>
            </template> -->
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                color="red"
                @click="deleteAction(item.id)"
              >
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
               <v-simple-table>
                  <tbody>
                    <tr>
                      <td>Logged :</td>
                      <td><v-btn small rounded color="primary" dark>{{ item.logme ? 'Yes' : 'No' }}</v-btn></td>
                    </tr>
                    <tr>
                      <td>State :</td>
                      <td><v-btn small rounded color="primary" dark>{{ item.state }}</v-btn></td>
                    </tr>
                    <tr>
                      <td>Status :</td>
                      <td><v-btn small rounded color="success" dark>{{ item.status ? 'activated' : 'deactivated' }}</v-btn></td>
                    </tr>
                  </tbody>
               </v-simple-table>
              </td>
            </template>

        </v-data-table>
    </div>
</template>

<script lang="ts">
    /* eslint-disable */
    import Vue from 'vue'
    import {
        mapGetters
    } from 'vuex';

    declare interface Content {
      adminId: string;
      adminName: string;
      bornDate: string;
      descripiton: string;
      fwName: string;
      fwVersion: string;
      id: number;
      localip: string;
      loglimit: number;
      logme: string;
      mac: string;
      mapLat: string;
      mapLng: string;
      model: string;
      name: string;
      sammy: string;
      sn: string;
      state: string;
      status: string;
    }

    export default Vue.extend({
        data() {
            // const tableDataSimple = this.getDevice

            return {
                // tableDataSimple,
                singleExpand: true,
                search: '',
                singleSelect: false,
                selected: [],
                expanded: [],
                pagination: {},
                statusActions: [],
                logActions: [],
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
                    {
                        text: 'MAC',
                        value: 'mac',
                        align: 'left'
                    },
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
                    {
                        text: 'Born',
                        value: 'born',
                        align: 'left'
                    },

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
                    // {
                    //     text: 'State',
                    //     value: 'state',
                    //     align: 'left'
                    // },
                    // {
                    //     text: 'Status',
                    //     value: 'status',
                    //     align: 'left'
                    // },
                    {
                        text: 'Action',
                        value: 'actions',
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
        async created() {
            // this.devices = this.getDevice
            await this.GetData()

            console.log(this.getDevice)
        },
        methods: {
            async GetData() {
                await this.$store.dispatch('getDataDevice')
            },
            async loadDetails({item}: any) {
              console.log(item)

              console.log(this.getDevice);
            },
            async deleteAction(id: any) {

              if(!id) {

                console.log(this.getDevice);

                console.log(this.selected);

                const tempData = [...this.getDevice];

                let indexData: number[] = [];

                this.selected.forEach((res: Content) => {
                  tempData.forEach(async (dt: Content, index: number) => {
                    if(dt.sn == res.sn) {
                      indexData.push(index);
                      await this.$store.dispatch('removeDataService', {id: dt.id});
                    }
                  })
                });

                for(let i = indexData.length - 1; i >= 0; i--) {
                  tempData.splice(indexData[i], 1);
                }

                console.log(tempData);

                this.GetData();

                // this.getDevice = [...tempData];
              } else {
                await this.$store.dispatch('removeDataService', {id});

                this.GetData();
                console.log(id);
              }

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