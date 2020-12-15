<template>
    <div class="right-content-login">
        <div class="box-content">
            <div class="logo mb-5 pb-5">
                <LogoTrans />
            </div>
            <Joinus />
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-property-decorator'
    import LogoTrans from '@/components/atoms/logo/logo_trans.vue'
    import Joinus from '@/components/molecules/Login/Joinus.vue'
    export default Vue.extend ({
        components:{
            LogoTrans,
            Joinus
        }
    })
</script>