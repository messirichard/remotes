<template>
    <div class="all-tables-apis">
        <div class="head-api">
            <div class="row">
                <div class="col-md-9">
                    <div class="title">
                        <h3>List of My Users</h3>
                    </div>
                </div>
                <div class="col-md-3">
                </div>
            </div>
        </div>
        <v-divider class="head-subhead"></v-divider>
        <div class="subhead-api">
            <div class="row">
                <div class="col-md-3 ">
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
        <v-data-table v-model="selected" :headers="headers" :search="search" :single-select="singleSelect"
            item-key="name" show-select class="elevation-1 data-api users-mobile-show">
            <!-- <template v-slot:item.action="{ }">
                <ViewData />
                <UpdateUsers />
                <DeleteUsers />
            </template> -->
        </v-data-table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
            return {
                search: '',
                singleSelect: false,
                selected: [],
                pagination: {},
                headers: [{
                        text: 'Name',
                        align: 'left',
                        value: 'name'
                    },
                    {
                        text: 'Email',
                        value: 'email',
                        align: 'left'
                    },
                    {
                        text: 'Phone',
                        value: 'phone',
                        align: 'left'
                    },
                    {
                        text: 'Nama Organization',
                        value: 'name_organization',
                        align: 'left'
                    },
                    {
                        text: 'Website',
                        value: 'website',
                        align: 'left'
                    },
                    {
                        text: 'Address',
                        value: 'address',
                        align: 'left'
                    },
                    {
                        text: 'Email',
                        value: 'email',
                        align: 'left'
                    },
                    {
                        text: 'Phone',
                        value: 'phone',
                        align: 'left'
                    },
                    {
                        text: 'Action',
                        value: 'action',
                        align: 'left'
                    },
                ],
            }
        },
})
</script>