<template>
    <div class="m-portlet">
        <div class="m-portlet__head">
            <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                    <h3 class="m-portlet__head-text">
                        Setting
                    </h3>
                </div>
            </div>
        </div>
        <form class="m-form" method="post">
            <div class="m-portlet__body">
                <div class="m-form__section m-form__section--first">
                    <div class="form-group m-form__group">
                        <label>Device Inclusiveness</label>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="m-option">
                                    <span class="m-option__control">
                                        <span class="m-radio m-radio--brand m-radio--check-bold">
                                            <input type="radio" name="cfg_incl_dev" value="1">
                                            <span></span>
                                        </span>
                                    </span>
                                    <span class="m-option__label">
                                        <span class="m-option__head">
                                            <span class="m-option__title">
                                                Open

                                            </span>
                                        </span>
                                        <span class="m-option__body">
                                            This means your devices can be identified on every other
                                            open apps.
                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div class="col-md-6">
                                <label class="m-option">
                                    <span class="m-option__control">
                                        <span class="m-radio m-radio--brand m-radio--check-bold">
                                            <input type="radio" name="cfg_incl_dev" value="0">
                                            <span></span>
                                        </span>
                                    </span>
                                    <span class="m-option__label">
                                        <span class="m-option__head">
                                            <span class="m-option__title">
                                                Closed
                                            </span>
                                        </span>
                                        <span class="m-option__body">
                                            This means your devices can ONLY be identified on your own
                                            apps.

                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group m-form__group">
                        <label>App Inclusiveness
                        </label>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="m-option">
                                    <span class="m-option__control">
                                        <span class="m-radio m-radio--brand m-radio--check-bold">
                                            <input type="radio" name="cfg_incl_app" value="1">
                                            <span></span>
                                        </span>
                                    </span>
                                    <span class="m-option__label">
                                        <span class="m-option__head">
                                            <span class="m-option__title">
                                                Open
                                            </span>
                                        </span>
                                        <span class="m-option__body">
                                            This means your apps can identify every other open devices.

                                        </span>
                                    </span>
                                </label>
                            </div>
                            <div class="col-md-6">
                                <label class="m-option">
                                    <span class="m-option__control">
                                        <span class="m-radio m-radio--brand m-radio--check-bold">
                                            <input type="radio" name="cfg_incl_app" value="0">
                                            <span></span>
                                        </span>
                                    </span>
                                    <span class="m-option__label">
                                        <span class="m-option__head">
                                            <span class="m-option__title">
                                                Closed
                                            </span>
                                        </span>
                                        <span class="m-option__body">
                                            This means your apps can ONLY identify your own devices.

                                        </span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="m-section__content">
                        <div class="m-demo">
                            <div class="m-demo__preview">
                                <div class="m-form__group form-group row">
                                    <!-- <label class="col-1 col-form-label"></label> -->
                                    <div class="col-5">
                                        <v-switch v-model="switch1" :label="`Allow Logging`"></v-switch>
                                    </div>
                                </div>
                                <div class="form-group m-form__group">
                                    <label for="cfg_log_default" class="form-control-label">Default Log Limit in MB for
                                        New Device (Enter 0 for no limit)
                                    </label>
                                    <div class="input-group">
                                        <input type="hidden" name="cfg_log_default"
                                            value="<?php echo $dev->stats->default_logs ?>" />
                                        <input name="cfg_log_default_visible" type="text"
                                            class="cfg_number form-control" id="cfg_log_default" value=""
                                            placeholder="">
                                        <div class="input-group-append"><span class="input-group-text">MB</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group m-form__group">
                                    <label for="cfg_log_keep" class="form-control-label">Keep Log for Each Device
                                    </label>
                                    <div class="input-group">
                                        <input type="hidden" name="cfg_log_keep"
                                            value="<?php echo $dev->stats->default_logkeep ?>" />
                                        <input name="cfg_log_keep_visible" type="text" class="cfg_number form-control"
                                            id="cfg_log_keep" value="" placeholder="">
                                        <div class="input-group-append"><span class="input-group-text">Days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-portlet__foot m-portlet__foot--fit">
                <div class="m-form__actions m-form__actions">
                    <button type="button" id="account-config-tab1-submit"
                        class="btn btn-accent m-btn m-btn--air m-btn--custom">Update</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        data() {
            return {
                checkbox: true,
                radioGroup: 1,
                switch1: true,
            }
        }
    })
</script>