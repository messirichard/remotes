<template>
    <v-app id="inspire">
    <Navs />
    <v-app-bar app>
      <div class="row">
        <div class="col-md-12 col-12 col-sm-12">
          <TopRightMenu />
        </div>
      </div>
    </v-app-bar>
    <v-content>
      <v-container class="prelative pb-5 mb-5">
        <v-row align="center">
          <router-view />
        </v-row>
      </v-container>
      <!-- <Footer /> -->
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Navs from '@/components/organism/Dashboard/Layout/Navs/index.vue';
import TopRightMenu from '@/components/organism/Dashboard/Layout/TopRightMenu/index.vue';
// import BurgerMenu from '@/components/atoms/BurgerMenu/index.vue';

// import {
//     mdiLifebuoy
//   } from '@mdi/js';

export default Vue.extend({
    props: {
      source: String,
    },
    components: {
      Navs,
      TopRightMenu
    },
    data: () => ({
      dialog: false,
      fav: true,
      menu: false,
      message: false,
      hints: true,
    }), 
})
</script>

<style lang="scss">
  @import "@/assets/sass/dashboard.scss";
</style>