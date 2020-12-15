<template>
    <transition name="modal-fade">
        <v-card class="modal-backdrop">
            <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                <v-card-title>
                    <span class="headline">View Data API</span>
                </v-card-title>
                <v-divider class="head-subhead"></v-divider>
                <section class="modal-body" id="modalDescription">
                    <v-card-text class="add-api-modal">
                        <v-container class="container-radio-button" fluid>
                            <v-radio-group v-model="radios" :mandatory="false">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-modal-add mb-4">
                                            <label for="exampleInputEmail1">Name of your API</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" placeholder="" disabled>
                                        </div>
                                        <div class="form-modal-add mb-4">
                                            <label for="exampleInputEmail1">Your Developer Root</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" placeholder="1" disabled>
                                        </div>
                                        <div class="form-modal-add mb-4">
                                            <label for="exampleInputEmail1">Your API Username</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" placeholder="Automatically Generated"
                                                disabled>
                                        </div>
                                        <div class="form-modal-add mb-4">
                                            <label for="exampleInputEmail1">Your API Password</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" placeholder="Automatically Generated"
                                                disabled>
                                        </div>
                                    </div>
                                </div>
                            </v-radio-group>
                        </v-container>
                    </v-card-text>
                </section>
                <footer class="modal-footer">
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">Close</v-btn>
                    </v-card-actions>
                </footer>
            </div>
        </v-card>
    </transition>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    methods: {
            close() {
                this.$emit('close');
            },
        },
})
</script>