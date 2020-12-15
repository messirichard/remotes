<template v-slot:activator="{ on }">
    <v-btn icon v-on="on" style="margin-right: 20px; color: #ff0000">
                    <v-icon>mdi-bell</v-icon>
                </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
import {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mdiBell
  } from '@mdi/js';

export default Vue.extend({
    
})
</script>