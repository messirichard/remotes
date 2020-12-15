<template>
    <div class="m-grid__item m-grid__item--fluid m-wrapper">
        <div class="m-content mt-5 pt-3">
            <div class="msg m-alert m-alert--icon m-alert--air m-alert--square alert alert-dismissible m--margin-bottom-30 animated fadeIn"
                role="alert"> <button type="button" class="close" data-id="6" data-dismiss="alert"
                    aria-label="Close"></button>
                <div class="m-alert__icon"><i class="flaticon-exclamation m--font-info"></i></div>
                <div class="m-alert__text"><span>Hello Ben, welcome aboard..! This dashboard is still in BETA, which
                        mean it may affect your experience. You may start digging resources on the support page or jump
                        directly creating your first API.</span></div>
            </div>
            <div class="row">
                <div class="col-xl-4">
                    <Growth />
                </div>
                <div class="col-xl-4">
                    <Users />
                </div>
                <div class="col-xl-4">
                    <Devices />
                </div>
            </div>

            <div class="row">
                <div class="col-xl-4">
                    <Stats />
                </div>
                <div class="col-xl-4">
                    <Info />
                </div>
                <div class="col-xl-4">
                    <Blog />
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import Growth from '@/components/template/Dashboard/Main/Growth.vue';
import Users from '@/components/template/Dashboard/Main/Users.vue';
import Devices from '@/components/template/Dashboard/Main/Devices.vue';
import Stats from '@/components/template/Dashboard/Main/Stats.vue';
import Info from '@/components/template/Dashboard/Main/Info.vue';
import Blog from '@/components/template/Dashboard/Main/Blog.vue';
import Vue from 'vue'
export default Vue.extend({
    components:{
        Growth,
        Users,
        Devices,
        Stats,
        Info,
        Blog
    }
})
</script>