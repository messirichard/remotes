<template>
    <div class="m-portlet">
        <div class="m-portlet__head">
            <div class="m-portlet__head-caption">
                <div class="m-portlet__head-title">
                    <h3 class="m-portlet__head-text">
                        White Label Service
                    </h3>
                </div>
            </div>
        </div>
        <form class="m-form" method="post">
            <div class="m-portlet__body">
                <div class="m-form__section m-form__section--first">
                    <div class="form-group m-form__group">
                        <label for="cfg_oem_brand" class="form-control-label">Company Brand Name
                        </label>
                        <div class="input-group">
                            <input name="cfg_oem_brand" type="text" class="form-control" id="cfg_oem_brand"
                                maxlength="70" value="">
                            <div class="input-group-append"><span class="input-group-text"><i
                                        class="la la-bookmark"></i></span></div>
                        </div>
                    </div>
                    <div class="form-group m-form__group">
                        <label for="cfg_oem_tagline" class="form-control-label">Company Tagline
                        </label>
                        <div class="input-group">
                            <input name="cfg_oem_tagline" type="text" class="form-control" id="cfg_oem_tagline"
                                maxlength="70" value="">
                            <div class="input-group-append"><span class="input-group-text"><i
                                        class="la la-info"></i></span></div>
                        </div>
                    </div>
                    <div class="form-group m-form__group">
                        <label for="cfg_oem_domain" class="form-control-label">Domain URL
                        </label>
                        <div class="input-group">
                            <input name="cfg_oem_domain" type="text" class="form-control" id="cfg_oem_domain"
                                maxlength="255" value="">
                            <div class="input-group-append"><span class="input-group-text"><i
                                        class="la la-globe"></i></span></div>
                        </div>
                    </div>
                    <div class="form-group m-form__group">
                        <label for="cfg_oem_email_noreply" class="form-control-label">Noreply Email Address (domain
                            verification required)
                        </label>
                        <div class="input-group">
                            <input name="cfg_oem_email_noreply" type="text" class="form-control"
                                id="cfg_oem_email_noreply" maxlength="255" value="" placeholder="">
                            <div class="input-group-append"><span class="input-group-text"><i
                                        class="la la-at"></i></span></div>
                        </div>
                    </div>
                    <div class="form-group m-form__group">
                        <label for="cfg_oem_email_support" class="form-control-label">Customer Support Email Address
                        </label>
                        <div class="input-group">
                            <input name="cfg_oem_email_support" type="text" class="form-control"
                                id="cfg_oem_email_support" maxlength="255" value="">
                            <div class="input-group-append"><span class="input-group-text"><i
                                        class="la la-at"></i></span></div>
                        </div>
                    </div>
                    <div class="form-group m-form__group">
                        <label for="cfg_oem_url_logo" class="form-control-label">Logo URL (200px width recommended)
                        </label>
                        <div class="input-group">
                            <input name="cfg_oem_url_logo" type="text" class="form-control" id="cfg_oem_url_logo"
                                maxlength="255" value="">
                            <div class="input-group-append"><span class="input-group-text"><i
                                        class="la la-image"></i></span></div>
                        </div>
                    </div>
                    <div class="form-group m-form__group">
                        <label for="cfg_oem_url_tos" class="form-control-label">Terms of Service URL
                        </label>
                        <div class="input-group">
                            <input name="cfg_oem_url_tos" type="text" class="form-control" id="cfg_oem_url_tos"
                                maxlength="255" value="">
                            <div class="input-group-append"><span class="input-group-text"><i
                                        class="la la-legal"></i></span></div>
                        </div>
                    </div>
                    <div class="form-group m-form__group">
                        <label for="cfg_oem_url_privacy" class="form-control-label">Privacy Policy URL
                        </label>
                        <div class="input-group">
                            <input name="cfg_oem_url_privacy" type="text" class="form-control" id="cfg_oem_url_privacy"
                                maxlength="255" value="">
                            <div class="input-group-append"><span class="input-group-text"><i
                                        class="la la-legal"></i></span></div>
                        </div>
                    </div>
                    <div class="form-group m-form__group">
                        <label for="cfg_oem_url_android" class="form-control-label">Android App Download URL
                        </label>
                        <div class="input-group">
                            <input name="cfg_oem_url_android" type="text" class="form-control" id="cfg_oem_url_android"
                                maxlength="255" value="">
                            <div class="input-group-append"><span class="input-group-text"><i
                                        class="la la-android"></i></span></div>
                        </div>
                    </div>
                    <div class="form-group m-form__group">
                        <label for="cfg_oem_url_ios" class="form-control-label">IoS App Download URL
                        </label>
                        <div class="input-group">
                            <input name="cfg_oem_url_ios" type="text" class="form-control" id="cfg_oem_url_ios"
                                maxlength="255" value="">
                            <div class="input-group-append"><span class="input-group-text"><i
                                        class="la la-apple"></i></span></div>
                        </div>
                    </div>
                    <div class="form-group m-form__group">
                        <label for="cfg_oem_url_otherapp" class="form-control-label">Other App Download URL
                        </label>
                        <div class="input-group">
                            <input name="cfg_oem_url_otherapp" type="text" class="form-control"
                                id="cfg_oem_url_otherapp" maxlength="255" value="">
                            <div class="input-group-append"><span class="input-group-text"><i
                                        class="la la-desktop"></i></span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-portlet__foot m-portlet__foot--fit">
                <div class="m-form__actions m-form__actions">
                    <button type="button" id="account-config-tab2-submit"
                        class="btn btn-accent m-btn m-btn--air m-btn--custom">Update</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({

    })
</script>