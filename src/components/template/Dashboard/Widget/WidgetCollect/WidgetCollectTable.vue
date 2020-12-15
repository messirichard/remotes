<template>
    <div class="all-tables-apis">
        <div class="subhead-api">
            <div class="row">
                <div class="col-md-3" style="top: 30px;
    padding-left: 30px;
    font-size: 18px;">
                    Select API App
                </div>
                <div class="col-md-5">
                    <v-select v-model="enabled" :items="slots" label="Slot" clearable></v-select>
                </div>
                <div class="col-md-4">
                    <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details>
                    </v-text-field>
                </div>
            </div>
        </div>
        <ListView />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import ListView from '@/components/organism/Dashboard/Widget/WidgetDefault/ListView.vue'
    export default Vue.extend({
        components: {
            ListView
        }
    })
</script>