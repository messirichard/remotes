<template>
    <div class="m-grid__item m-grid__item--fluid m-wrapper">
        <ApiHeader />
        <ApiTable />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ApiHeader from '@/components/template/Dashboard/Api/ApiHeader.vue'
import ApiTable from '@/components/template/Dashboard/Api/ApiTable.vue'

export default Vue.extend({
    components:{
        ApiHeader,
        ApiTable
    }
})
</script>

<style lang="scss">
  @import "@/assets/sass/api.scss";
</style>