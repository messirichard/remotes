<template>
  <v-navigation-drawer v-model="primaryDrawer.model" :permanent="primaryDrawer.type === 'permanent'"
    :temporary="primaryDrawer.type === 'temporary'" :clipped="primaryDrawer.clipped" :floating="primaryDrawer.floating"
    :mini-variant="primaryDrawer.mini" absolute overflow app>
    <v-list dense>
      <div class="tops-header">
        <div class="row">
          <div class="col-md-6">
            <v-img v-if="!primaryDrawer.mini" src="@/assets/img/logo-white_trans.png" style="margin-left:30px;" class="img-navbar-top" />
          </div>
          <div class="col-md-6">
            <v-btn @click="hamburg">
              <v-icon>fas fa-bars</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <div class="menus-lefts">
        <template v-for="item in menudash">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="children" v-for="(child, i) in item.children" :key="i" router :to="child.link">
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" router :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <div class="management">
          <p v-if="!primaryDrawer.mini">MANAGEMENT</p>
        </div>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model"
            :prepend-icon="item.icons" :append-icon="item.model ? item.icon : item['icon-alt']">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="children" v-for="(child, i) in item.children" :key="i" router :to="child.link">
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" router :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import {
    Vue
  } from 'vue-property-decorator';


  export default Vue.extend({
    props: {
      source: String,
    },
    components: {
      //  Main,
    },
    data() {
      return {
        drawers: ['Default (no property)', 'Permanent', 'Temporary'],
        primaryDrawer: {
          model: null,
          type: 'default (no property)',
          clipped: false,
          floating: false,
          mini: false
        },
        dialog: false,
        drawer: true,
        fav: true,
        menu: false,
        message: false,
        hints: true,
        menudash: [{
          icon: 'mdi-home',
          text: 'Dashboard',
          link: '/dashboard/main'
        }],
        items: [{
            icon: 'mdi-api',
            text: 'API',
            link: '/dashboard/api'
          },
          {
            icon: 'mdi-memory',
            text: 'Device',
            link: '/dashboard/device'
          },
          {
            icon: 'mdi-chevron-up',
            'icon-alt': 'mdi-chevron-down',
            text: 'Widget',
            model: false,
            icons:'mdi-cast',
            // 'icons-alt': 'mdi-cast',
            children: [{
                icon: 'mdi-rhombus-split',
                text: 'Declare Collection',
                link: '/dashboard/widgetcollect'
              },
              {
                icon: 'mdi-widgets-outline',
                text: 'Devices Default Widget',
                link: '/dashboard/widgetdefault'
              },
            ]
          },
          {
            icon: 'mdi-account',
            text: 'Users',
            link: '/dashboard/users'
          },
        ],
      }
    },
    methods: {
      hamburg(active: any) {
        this.primaryDrawer.mini = !this.primaryDrawer.mini
      }
    }
  })
</script>

<style lang="scss">
  @import "@/assets/sass/navbar.scss";
</style>