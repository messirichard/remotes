<template>
    <v-menu offset-y>
        <template v-slot:activator="{ on: menu }">
            <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                    <v-icon color="" v-on="{ ...tooltip, ...menu }" small class="mx-2" @click="editItem(item)">
                        check
                    </v-icon>
                </template>
                <span>Edit</span>
            </v-tooltip>
        </template>
        <v-list class="list-menu-my-acc">
            <v-list-item v-for="(item, index) in listsedits" :key="index" router :to="item.link">
                <v-list-item-title>
                    <v-icon>{{ item.icon }}</v-icon><span>{{ item.title }}</span>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        data() {
            return {
                listsedits: [{
                        title: 'Deactive',
                        link: '/api',
                        icon: 'mdi-alert-circle-outline ',
                    },
                    {
                        title: 'Assign as Device API',
                        link: '/api',
                        icon: 'mdi-speedometer ',
                    },
                    {
                        title: 'Assign as APP API',
                        link: '/api',
                        icon: 'mdi-laptop',
                    }
                ],
            }
        },
    })
</script>

<style>

</style>