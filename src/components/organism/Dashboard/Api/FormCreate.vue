<template>
    <div>

        <v-card-title>
            <span class="headline">Create New API</span>
        </v-card-title>
        <v-divider class="head-subhead"></v-divider>

        <section class="modal-body" id="modalDescription">
            <v-card-text class="add-api-modal">
                <v-container class="container-radio-button" fluid>
                    <v-radio-group v-model="radios" :mandatory="false">
                        <p class="device-inclusiv">Choose API type</p>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="box-content-inner">
                                    <v-radio label="Device" value="radio-1"></v-radio>
                                    <div class="text-radio-modal">
                                        <p>Choose this one if you like to use it for your IoT
                                            devices.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="box-content-inner">
                                    <v-radio label="App" value="radio-2"></v-radio>
                                    <div class="text-radio-modal">
                                        <p>Choose this one if you like to use it for your mobile /
                                            desktop application.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-modal-add mb-4">
                                    <label for="exampleInputEmail1">Name of your API</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="">
                                </div>
                                <div class="form-modal-add mb-4">
                                    <label for="exampleInputEmail1">Your Developer Root</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="1" disabled>
                                </div>
                                <div class="form-modal-add mb-4">
                                    <label for="exampleInputEmail1">Your API Username</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Automatically Generated" disabled>
                                </div>
                                <div class="form-modal-add mb-4">
                                    <label for="exampleInputEmail1">Your API Password</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Automatically Generated" disabled>
                                </div>
                            </div>
                        </div>
                    </v-radio-group>
                </v-container>
            </v-card-text>
        </section>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        data: () => ({
            radios: 'radio-1',
        }),
    })
</script>