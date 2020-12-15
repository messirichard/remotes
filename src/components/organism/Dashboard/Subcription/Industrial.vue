<template>
    <div class="m-pricing-table-2__item col-lg-3">
        <div class="m-pricing-table-2__visual">
            <div class="m-pricing-table-2__hexagon"></div>
            <span class="m-pricing-table-2__icon m--font-info"><i class="fa flaticon-rocket"></i></span>
        </div>
        <h2 class="m-pricing-table-2__subtitle">Industrial</h2>
        <div class="m-pricing-table-2__features" style="height: 240px;">
            <span>1K device(s). +$1.00/add.</span>
            <span>100MB of log. +$0.30/add 1 MB.</span>
            <span>1 API app(s).</span>
            <span>OPEN Incl.</span>

            <span>OPEN, CLOSED Incl.</span>
            <span>Custom Noreply Email</span>
            <span>Access to Userbase.</span>
        </div>
        <div class="price-tag-left">
            <span class="tag tag-left">$599.00</span>
        </div>
        <div class="m-pricing-table-2__btn">

            <span class="paypal-upgrade">subscribe
            </span>
            <div id="paypal-button-container-monthly-<?php echo $dev->license->id==$val->id?'':$val->id ?>"
                class="paypal-button-container"
                data-subscriber="<?php echo isset($dev->pay_channels->paypal->id)?$dev->pay_channels->paypal->id:'' ?>"
                data-plan="<?php echo $dev->license->id==$val->id?'':paypalPlan($val->id,true) ?>"
                data-null="<?php echo ACCOUNT_UPGRADE_NULL ?>"
                data-ctc="<?php echo ACCOUNT_UPGRADE_EMAIL_SUPPORT_ADDRESS ?>"
                data-sbj="<?php echo ACCOUNT_UPGRADE_EMAIL_SUPPORT_SUBJECT ?>">
            </div>
            <div
                class="button--upgrade-contact btn-upgrade btn m-btn--pill btn-primary m-btn--wide m-btn--uppercase m-btn--bolder m-btn--lg">
                <span style="top:-3px;position:relative;">Contact Us</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>