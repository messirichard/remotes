<template>
    <div class="m-grid__item m-grid__item--fluid m-wrapper">
        <WidgetDefaultHeader />
        <WidgetDefaultTable />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WidgetDefaultHeader from '@/components/template/Dashboard/Widget/WidgetDefault/WidgetDefaultHeader.vue'
import WidgetDefaultTable from '@/components/template/Dashboard/Widget/WidgetDefault/WidgetDefaultTable.vue'

export default Vue.extend({
    components:{
        WidgetDefaultHeader,
        WidgetDefaultTable
    }
})
</script>