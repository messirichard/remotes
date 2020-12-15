<template>
    <div class="text-right">
        <div class="row">
            <div class="col-md-6 col-6">
                <MobileNavs />  

            </div>
            <div class="col-md-6 col-6">
        <v-menu :close-on-content-click="false" offset-y class="menu-notif-tops">
            <template v-slot:activator="{ on }">
                <v-btn class="button-bells" icon v-on="on">
                    <v-icon>mdi-bell</v-icon>
                </v-btn>
            </template>
            <Notification />
        </v-menu>

        <Dropdown />

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Dropdown from '@/components/molecules/Dashboard/DropdownMenuRightTop/index.vue'
import Notification from '@/components/molecules/Dashboard/Notif/index.vue'
import MobileNavs from '@/components/organism/Dashboard/Layout/Navs/mobile.vue'

import Vue from 'vue'
export default Vue.extend({
    components:{
        Dropdown,
        Notification,
        MobileNavs
    }
})
</script>