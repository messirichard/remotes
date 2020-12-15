<template>
    <span>
        <v-icon small @click="showModal">
            {{ icons.mdiEye }}
        </v-icon>
        <FormView v-show="isModalVisible" @close="closeModal" />
    </span>
</template>

<script lang="ts">
import Vue from 'vue'
import FormView from './FormViewUsers.vue';
import {mdiEye} from '@mdi/js'
export default Vue.extend({
    components: {
            FormView,
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

<script>
    
    export default {
        
    }
</script>