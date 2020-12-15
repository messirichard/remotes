<template>
    <v-card max-width="200" class="">
        <v-dialog v-model="dialog" max-width="800px">
            <template v-slot:activator="{ on }">
                <v-img src="@/assets/img/add-widget.jpg" height="200px" dark v-on="on">
                </v-img>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Create New Widget</span>
                </v-card-title>
                <v-divider class="head-subhead"></v-divider>
                <v-card-text class="add-widget-modal">
                    <v-container>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="image"><img src="@/assets/img/widget-ss.jpg" alt=""
                                        class="img img-fluid" style="position:absolute; width: 95%; height:100%">
                                    <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp"
                                        placeholder="Pick an avatar" prepend-icon="mdi-camera" label="Avatar"
                                        class="input-image-adds-widget"></v-file-input>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-modal-add-widgetcoll mt-4 pt-3">
                                    <label for="exampleInputEmail1">Unique Id</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="">
                                </div>
                                <div class="form-modal-add-widgetcoll mt-4 pt-3">
                                    <label for="exampleInputEmail1">Friendly Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="">
                                </div>
                                <div class="form-modal-add-widgetcoll mt-4 pt-3">
                                    <label for="exampleInputEmail1">Tags</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Add a tag">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-modal-add-widgetcoll-bottom mt-5">
                                    <label for="exampleInputEmail1">Min Width</label>
                                    <input type="number" style="width: 100%;" class="form-control"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-modal-add-widgetcoll-bottom mt-5">
                                    <label for="exampleInputEmail1">Max Width</label>
                                    <input type="number" style="width: 100%;" class="form-control"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-modal-add-widgetcoll-bottom">
                                    <label for="exampleInputEmail1">Min Height</label>
                                    <input type="number" style="width: 100%;" class="form-control"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-modal-add-widgetcoll-bottom">
                                    <label for="exampleInputEmail1">Max Height</label>
                                    <input type="number" style="width: 100%;" class="form-control"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
                                </div>
                            </div>
                            <v-divider class="head-subhead"></v-divider>
                            <div class="col-md-6">
                                <div class="form-modal-add-widgetcoll-bottom">
                                    <label for="exampleInputEmail1">Unique Id</label>
                                    <input type="text" style="width: 100%;" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-modal-add-widgetcoll-bottom">
                                    <label for="exampleInputEmail1">Friendly Name</label>
                                    <input type="text" style="width: 100%;" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`">
                                </v-switch>
                            </div>
                            <div class="col-md-3">
                                <v-switch v-model="switch2" :label="`Switch 1: ${switch2.toString()}`">
                                </v-switch>
                            </div>
                            <div class="col-md-6">
                                <div class="form-modal-add-widgetcoll-bottom">
                                    <label for="exampleInputEmail1">Number of Parameters</label>
                                    <input type="number" style="width: 100%;" class="form-control"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-modal-add-widget">
                                    <label for="exampleInputEmail1">Parameter Datatype </label>
                                    <v-select :items="items" label="Add a supported datatype" dense solo>
                                    </v-select>
                                </div>
                            </div>
                        </div>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Create</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-card-title class="">
            <div class="title-box">New Widget</div>
        </v-card-title>
    </v-card>
</template>

<script>
import Vue from 'vue'

    export default Vue.extend({
        components: {},
        data() {
            return {
                dialog: false,
                switch1: true,
                switch2: true,
                items: ['String', 'Float', 'Integer', 'Boolean', 'Enum', 'Color'],
            }
        },
        methods: {
            initialize() {
                this.data = []
            },
        },
    })
</script>