<template>
    <div>
        <div class="m-card-profile__pic">
            <div class="m-card-profile__pic-wrapper">
                <img class="remove-avatar" src="@/assets/img/remove.png" @click="removeImage" v-show="shows" border=0 />
                <img class="plc-avatar" :src="getProfile.user_avatar" alt="" />
                <img class="cam-avatar" src="@/assets/img/cam.png" border=0 />
                <input class="avatar-profile" type="file" id="avatar" accept="image/png, image/jpeg"
                    @change="updateImageProfile">
            </div>
            <!-- <form method="POST" enctype="multipart/form-data">
                    <input class="file-avatar" type="file" name="avatar" accept="image/gif, image/jpeg, image/png">
                </form> -->
            <!-- <v-file-input multiple label="File input" hide-input></v-file-input> -->
        </div>
        <div class="m-card-profile__details">
            <span class="m-card-profile__name">{{getProfile.user_fname}} {{getProfile.user_lname}}</span>
            <a href="#" class="m-card-profile__email m-link">{{getProfile.user_email}}</a>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {
        mapGetters
    } from 'vuex';
    import axios from 'axios'
    import { GetAllData, GetToken, URL} from '@/helpers/Config/Common'
    export default Vue.extend({
        data() {
            return {
                selectFile: null,
                shows:true
                // imageError: false,
                // defaultImage: require("@/assets/imgs/dashadmin.jpg")
            }
        },
        created() {
            this.GetData();
            // this.getProfile.user_avatar = URL.FE+`/img/icons/dashadmin.jpg`
            // console.log(this.getProfile.user_avatar)
            // if(this.getProfile.user_avatar === undefined){
            //     this.shows = false
            //     this.getProfile.user_avatar = URL.FE+`/img/icons/dashadmin.jpg`
            // }
            // console.log(this.getProfile.user_avatar)
            if(this.getProfile.user_avatar === URL.FE+`/img/icons/dashadmin.jpg`){
                this.shows = false
            }
        },
        computed: {
            ...mapGetters(['getProfile']),
        },
        methods: {
            async GetData() {
                await this.$store.dispatch('getDataProfile')
            },
            async removeImage() {
                this.getProfile.user_avatar = URL.FE+`/img/icons/dashadmin.jpg`
                await axios({
                    method: 'DELETE',
                    url: GetAllData.baseURL + '/profile/avatars', 
                    headers: {
                        'Authorization': `Bearer ${GetToken()}`,
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'multipart/form-data',
                        'Accept': '*/*',
                    }
                }).then(response =>{
                    console.log(this.getProfile.user_avatar)
                }).catch(error=>{
                    console.log(error)
                })
                this.shows = false
            },

            async updateImageProfile(event: any) {
                const image = event.target.files[0];

                if (image){
                    this.selectFile = event.target.files[0]
                    const fd = new FormData()
                    fd.append('image', this.selectFile!)
                    await axios({
                        method: 'PUT',
                        url: GetAllData.baseURL + '/profile/avatars', 
                        headers: {
                            'Authorization': `Bearer ${GetToken()}`,
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'multipart/form-data',
                            'Accept': '*/*',
                        },
                        data: fd
                    }).then(response =>{
                        // console.log(response)
                    }).catch(error=>{
                        console.log(error)
                    })
                    const reader = new FileReader();
                    reader.readAsDataURL(image);
                    reader.onload = event => {
                        this.getProfile.user_avatar = event.target!.result;
                    };
                    
                }

                this.shows = true
            }
        }
    })
</script>