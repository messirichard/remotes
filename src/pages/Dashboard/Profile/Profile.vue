<template>
    <div class="m-grid__item m-grid__item--fluid m-wrapper">
        <div class="m-content">
            <div class="row">
                <div class="col-xl-3 col-lg-3">
                    <ProfileLeft />
                </div>
                <div class="col-xl-9 col-lg-9">
                    <ProfileRight />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
    import ProfileLeft from '@/components/template/Dashboard/Profile/ProfileLeft.vue';
    import ProfileRight from '@/components/template/Dashboard/Profile/ProfileRight.vue';

export default Vue.extend({
    components: {
        ProfileRight,
        ProfileLeft
    },
    data: () => ({
        lists: [{
                title: 'Profile',
                link: '/dashboard/profile',
                icon: 'mdi-account-child-circle',
            },
            {
                title: 'Upgrade',
                link: '/dashboard/subcription',
                icon: 'mdi-charity',
            },
            {
                title: 'Config',
                link: '/dashboard/config',
                icon: 'mdi-wrench',
            }
        ],
    }),
})
</script>