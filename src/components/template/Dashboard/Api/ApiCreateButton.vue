<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="1000px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn dark class="float-right mr-5 create-button-tab" v-bind="attrs" v-on="on">
                    <v-icon left>
        mdi-plus
      </v-icon>New API
                </v-btn>
            </template>
            <v-card>
                <FormCreate />
                <footer class="modal-footer">
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false">Create</v-btn>
                    </v-card-actions>
                </footer>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script lang="ts">
    import Vue from 'vue'
    import FormCreate from '@/components/organism/Dashboard/Api/FormCreate.vue'
    export default Vue.extend({
        components:{
            FormCreate
        },
        data: () => ({
            dialog: false,
            radios: 'radio-1',
        }),
    })
</script>