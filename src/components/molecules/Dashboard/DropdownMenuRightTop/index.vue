<template>
    <v-menu :close-on-content-click="true" offset-y :nudge-width="350" class="menu-notif-top">
        <template v-slot:activator="{ on }">
            <v-btn icon large v-on="on">
                <v-avatar size="45px" item>
                    <v-img :src="getProfile.user_avatar" alt="" />
                </v-avatar>
            </v-btn>
        </template>

        <v-card class="drops">
            <v-list class="Logout">
                <img class="back-img-log" src="@/assets/img/user_profile_bg.jpg" alt="">
                <div class="inners-image">
                    <div class="row">
                        <div class="col-md-3 col-3">
                            <img src="@/assets/img/dashadmin.jpg" alt="John">
                        </div>
                        <div class="col-md-9 col-9">
                            <h6>{{getProfile.org_name}}</h6>
                            <p>{{getProfile.user_email}}</p>
                        </div>
                    </div>
                </div>
                <v-list-item class="logmodal-title">
                    <!-- <v-list-item-avatar>
                        <img src="@/assets/img/dashadmin.jpg" alt="John">
                    </v-list-item-avatar> -->


                    <v-list-item-content>
                        <v-list-item-title>{{getProfile.user_fname}} {{getProfile.user_lname}}</v-list-item-title>
                        <v-list-item-subtitle>{{getProfile.user_title}}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                        <!-- <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav"> -->
                        <!-- <v-btn>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn> -->
                    </v-list-item-action>
                </v-list-item>
            </v-list>

            <v-list-item v-for="(item, index) in acc" :key="index" router :to="item.link" class="acc-top-right">
                <v-list-item-title>
                    <v-icon>{{ item.icon }}</v-icon><span>{{ item.title }}</span><span>
                        <v-icon>{{item.star}}</v-icon>
                    </span>
                </v-list-item-title>
            </v-list-item>
            <v-spacer></v-spacer>
            <div class="text-left p-3">
                <v-btn @click="LogOut" rounded dark>Sign Out</v-btn>
            </div>
        </v-card>
    </v-menu>
</template>

<script lang="ts">
    import Vue from 'vue'
import { mapGetters } from 'vuex'
    export default Vue.extend({
        data() {
            return {
                acc: [{
                        title: 'Profile',
                        link: '/dashboard/profile',
                        icon: 'mdi-account-child-circle',
                    },
                    {
                        title: 'Upgrade',
                        link: '/dashboard/subcription',
                        icon: 'mdi-charity',
                    }, {
                        title: 'Billing',
                        link: '/dashboard/subcription',
                        icon: 'mdi-cellphone-link',
                    },
                    {
                        title: 'Config',
                        link: '/dashboard/config',
                        icon: 'mdi-wrench',
                    },
                    {
                        title: 'Support',
                        link: 'https://ask.samelement.com',
                        icon: 'mdi-account',
                    },
                ],
            }
        },
        methods: {
            async LogOut() {
                const logout = await this.$store.dispatch('revokeToken')
                if (logout.status) {
                    this.$router.push({
                        name: "Login"
                    })
                    // window.location.replace("/");
                    // this.$forceUpdate();
                }
            },
            async GetData() {
                await this.$store.dispatch('getDataProfile')
            }
        },
        created() {
            this.GetData();
        },
        computed: {
            ...mapGetters(['getProfile'])
        }
        
    })
</script>