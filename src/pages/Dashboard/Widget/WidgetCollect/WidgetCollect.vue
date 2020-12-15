<template>
    <div class="m-grid__item m-grid__item--fluid m-wrapper">
        <WidgetCollectHeader />
        <WidgetCollectTable />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import WidgetCollectHeader from '@/components/template/Dashboard/Widget/WidgetCollect/WidgetCollectHeader.vue'
import WidgetCollectTable from '@/components/template/Dashboard/Widget/WidgetCollect/WidgetCollectTable.vue'

export default Vue.extend({
    components:{
        WidgetCollectHeader,
        WidgetCollectTable
    }
})
</script>