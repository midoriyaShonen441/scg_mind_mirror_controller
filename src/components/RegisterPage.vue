<template>
    <div class="register-container">
        <div class="header-container">
            <h3>Sign</h3>
        </div>
        <div class="body-container">
            <div class="input-zone-container">
                <div class="userid-container">
                    <input placeholder="USER ID" v-model="userId" />
                </div>
                <div class="username-container">
                    <input placeholder="NAME" v-model="username"/>
                </div>
                <div class="email-container">
                    <input placeholder="EMAIL" v-model="email"/>
                </div>
                <div class="phone-container"> 
                    <input placeholder="PHONE" v-model="phone"/>
                </div>
                <div class="address-container">
                    <input placeholder="ADDRESS" v-model="address"/>
                </div>
            </div>
            <div class="error-container" v-if="isError === true">
                <h3>server down!</h3>
            </div>
            <div class="btn-sign-data">
                <button class="btn btn-secondary" @click="btnSubmit">Sign</button>
            </div>
            <div class="setting-thres" style="margin-top: 30px; margin-bottom: 30px;">
                <router-link to="./control">Setting parameter</router-link>
            </div>
        </div>

        <div class="setting-footer"></div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    name:"Registers",
    data(){
        return{
            isError: false,
            userId:null,
            username:null,
            email:null,
            phone:null,
            address:null
        }
    },
    methods:{
        async btnSubmit(){
            const payload = {
                userid: this.userId,
                username: this.username,
                email: this.email,
                phone: this.phone,
                address: this.address,
            }

        
            try{
                const resultSign = await axios.post("http://localhost:3000/mirror_register", payload);
                
                if(resultSign.data.isError === true){
                    this.isError = true
                }else{
                    alert("Sign success!");
                    this.isError = false,
                    this.userId = null,
                    this.username = null,
                    this.email = null,
                    this.phone = null,
                    this.address = null
                }
                
            }catch(err){
                this.isError = true
            }
        }
    },


}
</script>

<style scoped>
@media screen and (min-width: 1180px){
    .register-container{
        margin: auto;
        text-align: center;
    }

    .header-container{
        margin-top: 50px;
        margin-bottom: 50px;
        color: rgb(110, 110, 110);
    }

    .body-container{
        margin: auto;
        border: 1px solid rgb(221, 221, 221);
        border-radius: 30px;
        width: 30%;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    }

    .input-zone-container{
        margin-bottom: 20px;
    }

    .input-zone-container > div {
        margin-top: 20px;
    }

    input{
        height: 40px;
        border: 1px solid rgb(153, 153, 153);
        border-radius: 10px;
        text-indent: 15px;
    }
    .btn-sign-data{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .setting-footer{
        height: 130px;
    }
    .error-container{
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
        color: red;
    }

    .setting-thres{
        margin: auto;
        text-align: center;
    }
}

@media screen and (max-width: 1179px){
        .register-container{
        margin: auto;
        text-align: center;
    }

    .header-container{
        margin-top: 50px;
        margin-bottom: 50px;
        color: rgb(110, 110, 110);
    }

    .body-container{
        margin: auto;
        border: 1px solid rgb(221, 221, 221);
        border-radius: 30px;
        width: 90%;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    }

    .input-zone-container{
        margin-bottom: 20px;
    }

    .input-zone-container > div {
        margin-top: 20px;
    }

    input{
        height: 40px;
        border: 1px solid rgb(153, 153, 153);
        border-radius: 10px;
        text-indent: 15px;
    }
    .btn-sign-data{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .setting-footer{
        height: 100px;
    }
    .error-container{
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
        color: red;
    }
    .setting-thres{
        margin: auto;
        text-align: center;
    }
}

</style>