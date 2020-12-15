<template>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="purple darken-3" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
            <span class="hidden-sm-and-down">WEB DEV SAM</span>
        </v-toolbar-title>
        <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search"
            class="hidden-sm-and-down" />
        <v-spacer />
        <v-menu bottom origin="center center" transition="scale-transition">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>mdi-apps</v-icon>
                </v-btn>
            </template>

            <v-list class="menu-list">
                <v-list-item v-for="(item, i) in lists" :key="i" router :to="item.link">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-menu v-model="menu" :close-on-content-click="false">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>mdi-bell</v-icon>
                </v-btn>
            </template>

            <v-card class="menu-notif">
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <img src="@/assets/images/logo.png" alt="John">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>Admin Web Dev</v-list-item-title>
                            <v-list-item-subtitle>Founder of SAM ELEMENT</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>
                <p class="text-justify">Hello Ben, welcome aboard..! This dashboard is still in BETA, which mean it may
                    affect your experience. You may start digging resources on the support page or jump directly
                    creating your first API. sticky
                </p>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="menu = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
        <v-btn icon large>
            <v-avatar size="32px" item>
                <v-img src="@/assets/images/logo.png" alt="Vuetify" />
            </v-avatar>
        </v-btn>
    </v-app-bar>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        props: {
            source: String
        },
        data: () => ({
            dialog: false,
            drawer: true,
            fav: true,
            menu: false,
            message: false,
            hints: true,
            lists: [{
                    title: 'Profile',
                    link: '/dashboard/profile'

                },
                {
                    title: 'Upgrade',
                    link: '/dashboard/subcription'

                },
                {
                    title: 'Config',
                    link: '/dashboard/config'

                }
            ]
        })
    })
</script>

<style lang="scss">
  @import "@/assets/sass/header.scss";
</style>