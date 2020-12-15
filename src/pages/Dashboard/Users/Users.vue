<template>
    <div class="m-grid__item m-grid__item--fluid m-wrapper">
        <UsersHeader />
        <UsersTable />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import UsersHeader from '@/components/template/Dashboard/Users/UsersHeader.vue'
import UsersTable from '@/components/template/Dashboard/Users/UsersTable.vue'
export default Vue.extend({
    components:{
        UsersHeader,
        UsersTable
    }
})
</script>