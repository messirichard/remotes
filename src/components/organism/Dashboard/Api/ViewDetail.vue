<template>
    <span>
        <v-icon small @click="showModal">
            {{ icons.mdiEye }}
        </v-icon>
        <FormViewDetail v-show="isModalVisible" @close="closeModal" />
    </span>
</template>

<script lang="ts">
import Vue from 'vue';
import FormViewDetail from './FormViewDetail.vue';
    import {mdiEye} from '@mdi/js'
export default Vue.extend({
    components: {
            FormViewDetail,
        },
        data() {
            return {
                isModalVisible: false,
                icons: {
                    mdiEye
                },
            }
        },
        methods: {
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        },
})
</script>