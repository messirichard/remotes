<template>
    <div class="all-tables-apis">
        <div class="subhead-api">
            <div class="row">
                <div class="col-md-12 ">
                    <v-card-title>
                        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details>
                        </v-text-field>
                    </v-card-title>
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