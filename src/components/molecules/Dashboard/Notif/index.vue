<template>
    <v-card class="menu-notif" width="380">
        <v-list class="notify-modal">
            <img src="@/assets/img/notification_bg.jpg" alt="">
            <div class="header">
                <h5>0 New</h5>
                <h6>Notification(s)</h6>
            </div>
        </v-list>

        <v-divider class="hr"></v-divider>
        <div class="row inside-onclick-notif">
            <div class="col-md-10">
                <p class="text-justify">Hello Ben, welcome aboard..! This dashboard is still in BETA, which mean
                    it may
                    affect
                    your experience. You may start digging resources on the support page or jump directly
                    creating your
                    first
                    API. sticky
                </p>
            </div>
            <div class="col-md-2">
                <div class="content-inside">
                    <div class="centered">
                        <p>1yr</p>
                    </div>
                </div>
            </div>
        </div>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="menu = false">Close</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>