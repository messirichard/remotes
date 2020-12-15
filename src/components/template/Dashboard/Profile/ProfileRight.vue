<template>
    <div class="m-portlet m-portlet--full-height m-portlet--tabs">
        <v-tabs>
            <v-tab>Update Profile</v-tab>
            <v-tab-item :value="0">
                <ProfileUpdate />
            </v-tab-item>

            <v-tab>Update Organitation</v-tab>
            <v-tab-item :value="1">
                <ProfileOrga />
            </v-tab-item>
        </v-tabs>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProfileUpdate from '@/components/organism/Dashboard/Profile/ProfileUpdate.vue'
import ProfileOrga from '@/components/organism/Dashboard/Profile/ProfileOrga.vue'

export default Vue.extend({
    components:{
        ProfileOrga,
        ProfileUpdate
    }
})
</script>

<style lang="scss">
@import '@/assets/sass/Profile.scss';
</style>