<template>
    <v-card class="px-4">
        <div class="row pt-3">
            <div class="col-md-2 col-6 ">
                <CreateData />
            </div>
            <div class="col-md-2 col-6 col-sm-4" v-for="item in getData" :key="item">
                <v-card max-width="200" class="">
                    <v-img src="@/assets/img/11.jpg" height="200px" dark>
                        <v-row class="fill-height">
                            <v-card-title>
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                        <v-btn dark icon v-on="on">
                                            <v-icon>mdi-dots-horizontal</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item v-for="(item, index) in itemss" :key="index">
                                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-card-title>
                            <v-spacer></v-spacer>
                        </v-row>
                    </v-img>
                    <v-card-title class="">
                        <div class="title-box">{{ item.name }}</div>
                    </v-card-title>
                </v-card>
            </div>
        </div>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import CreateData from '@/components/organism/Dashboard/Widget/WidgetDefault/CreateData.vue'
export default Vue.extend({
    components:{
        CreateData
    },
    data() {
            return {
                data: [{}],
                dialog: false,
                switch1: true,
                switch2: true,
                items: ['String', 'Float', 'Integer', 'Boolean', 'Enum', 'Color'],
                icons: [
                    // mdiDotsHorizontal
                ],
                itemss: [{
                        title: 'Edit'
                    },
                    {
                        title: 'Disable'
                    },
                    {
                        title: 'Delete'
                    }
                ],
                limit: 20,
                busy: false
            }
        },
        // computed: {
        //     formTitle() {
        //         return this.editedIndex === -1 ? 'New Item' : 'Create New Model'
        //     },
        //     apiData() {
        //         return !this.dataLoaded ? [] : this.getData;
        //     },
        //     dataLoaded() {
        //         return this.getData && this.getData.length > 0;
        //     },
        //     ...mapGetters('WidgetDefault', ['getData'])
        // },

        watch: {
            dialog(val) {
                // val || this.close()
            },
        },

        created() {
            // this.$store.dispatch('WidgetDefault/getData')
        },

        methods: {
            initialize() {
                this.data = []
            },
        },
})
</script>