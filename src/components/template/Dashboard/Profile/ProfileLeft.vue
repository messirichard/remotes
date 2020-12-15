<template>
    <div class="m-portlet m-portlet--full-height  ">
        <div class="m-portlet__body">
            <div class="m-card-profile">
                <ProfileLefttitle />
            </div>
            <ul class="m-nav m-nav--hover-bg m-portlet-fit--sides">
                <li class="m-nav__separator m-nav__separator--fit"></li>
                <v-list-item v-for="(item, index) in lists" :key="index" router :to="item.link">
                    <v-list-item-title class="profile-left">
                        <v-icon>{{ item.icon }}</v-icon><span>{{ item.title }}</span>
                    </v-list-item-title>
                </v-list-item>
            </ul>
            <div class="m-portlet__body-separator"></div>
            <div class="m-widget1 m-widget1--paddingless">
                <div class="m-widget1__item">
                    <div class="row m-row--no-padding align-items-center">
                        <div class="col">
                            <h3 class="m-widget1__title">Account Type</h3>
                            <span class="m-widget1__desc">{{getProfile.license.desc}}</span>
                        </div>
                        <div class="col m--align-right">
                            <span class="m-widget1__number m--font-brand">{{getProfile.license.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import ProfileLefttitle from '@/components/molecules/Dashboard/Profile/ProfileLefttitle.vue'
    import Vue from 'vue'
    import {
        mapGetters
    } from 'vuex';
    export default Vue.extend({
        components: {
            ProfileLefttitle
        },
        data() {
            return {
                lists: [{
                        title: 'Profile',
                        link: '/dashboard/profile',
                        icon: 'mdi-account-child-circle',
                    },
                    {
                        title: 'Upgrade',
                        link: '/dashboard/subcription',
                        icon: 'mdi-bookmark-plus-outline ',
                    },
                    {
                        title: 'Config',
                        link: '/dashboard/config',
                        icon: 'mdi-wrench',
                    }
                ],
                // acc_type: ''
            }
        },
        computed: {
            ...mapGetters(['getProfile'])
        },
        // mounted() {
        //     this.acc_type = getProfile.license
        // }
    })
</script>