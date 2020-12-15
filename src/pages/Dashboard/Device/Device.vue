<template>
    <div class="m-grid__item m-grid__item--fluid m-wrapper">
        <DeviceHeader />
        <DeviceTable />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DeviceHeader from '@/components/template/Dashboard/Device/DeviceHeader.vue'
import DeviceTable from '@/components/template/Dashboard/Device/DeviceTable.vue'
export default Vue.extend({
    components:{
        DeviceHeader,
        DeviceTable
    }
})
</script>