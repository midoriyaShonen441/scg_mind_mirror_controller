<script>
    import Slider from '@vueform/slider'
    import axios from "axios"
    export default {
    components: {
      Slider,
    },
    data() {
      return {
        value: "",
        min: -1,
        max: 1,
        step: -1,
        voiceDur:"",
        videoDur:""
      }
    },methods: {
        redirectToHome(){
            this.$router.push('/');
        },
        handleSubmit(){
            try {
                const payload = {
                    videoDuration:this.videoDur,
                    voiceDuration:this.voiceDur,
                    voiceMin:this.value[0],
                    voiceMax:this.value[1],
                    isDefault: false                  
                }

                axios.post("http://localhost:3000/changeparam", payload);
                alert("update parameter success!")

            } catch(err){
                alert("fail to update");
                alert(err);
                console.log(err);
            }
        },
        handleDefault(){
            this.value = [-0.25,0.25];
            this.voiceDur = 10;
            this.videoDur = 3;

            const payload = {
                videoDuration: 3,
                voiceDuration: 10,
                voiceMin: -0.25,
                voiceMax: 0.25,
                isDefault: true
            }

            try{
                axios.post("http://localhost:3000/changeparam", payload)
                alert("set to default value!");
            }catch(err){
                console.log(err)
                alert("update fail");
                alert(err);
                
            }
        },
        updateParam(){

            const fetchFunc = async () => {
                const paramUpdate = await axios.get("http://localhost:3000/getparam");
                console.log(paramUpdate.data);
                this.value = [paramUpdate.data.voice_min_threshold, paramUpdate.data.voice_max_threshold];
                this.voiceDur = 3
                this.videoDur = 10
                console.log(this.voiceDur, this.videoDur)
            }

            fetchFunc();

        }
    },
    beforeMount(){
        this.updateParam();
    },
    mounted(){
        // console.log(this.voiceDur);
        // console.log(this.videoDur);
  }
}
</script>

<template>
    <div class="header">
        <p>
            MindMirrorController
        </p>
    </div>

    <div class="container">
        <p>Parameters</p>

        <div class="lineBlock">
            <div class="inputForm">
                <label >Video duration (1-100s):</label>
                <input 
                    type="number"
                    id="videoDuration"
                    min="1" 
                    max="100"
                    v-model="videoDur">
            </div>
            <div class="inputForm">
                <label >Voice duration (1-100s):</label>
                <input 
                    type="number" 
                    id="voiceDuration" 
                    min="1" 
                    max="100"
                    v-model="voiceDur">
            </div>
        </div>

        <div class="sliderContent">
            <label for="criteriaRange">Voice Criteria Range: </label>
            <div class="slider">
                <Slider 
                    id="criteriaRange" 
                    name="criteriaRange" 
                    v-model="value" 
                    :min="min" 
                    :max="max"
                    :step="step"/>
            </div>
        </div>

        <div class="lineBlock">
            <button class="submit" @click="handleSubmit">Submit</button>
            <button class="default" @click="handleDefault">Default</button>
        </div>
        <div>
            <button class="to-registerpage" @click="redirectToHome">Register</button>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Palanquin+Dark&display=swap');
@import "@vueform/slider/themes/default.css";

.header {
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: rgb(218, 220, 224);
    width: 100vw;
    margin-top: 0;
}

.header p {
    margin: 0 0 0 35px;
    width: 80%;
    font-family: 'Palanquin Dark', sans-serif;
    font-size: 32px;
    color: rgb(107, 109, 103);
}

.container {
    /* Center vertically and horizontally */
    border: 1px solid;
    border-color: rgb(218, 220, 224);

    background: linear-gradient(0deg, rgba(200, 200, 200, 0.1), rgba(234, 234, 234, 0.1)), rgba(234, 234, 234, 0.1);
    background-blend-mode: overlay, normal;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    border-radius: 25px;

    position: absolute;

    width: 35vw;
    height: auto;
    padding: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
}

.container p {
    font-family: 'Palanquin Dark', sans-serif;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: rgba(107, 109, 103, 0.8);
    margin: 20px 0;
    font-size: 24px;
    color: rgba(107, 109, 103, 0.8);
}

.container .lineBlock {
    display: flex;
    margin: 10px 0;
}

.inputForm label {
    font-family: 'Palanquin Dark', sans-serif;
    font-size: 14px;
    margin: 0 10px;
    color: rgba(107, 109, 103, 0.8);
}

.container .sliderContent {
    display: flex;
    align-items: baseline;
 }

 .sliderContent label {
    font-family: 'Palanquin Dark', sans-serif;
    font-size: 14px;
    margin: 0 10px;
    color: rgba(107, 109, 103, 0.8);
 }

.slider {
    margin: 25px 0;
    margin-top: 40px;
    width: 200px;
}

.lineBlock .submit {
    all: unset;
    margin: 0 5px;
    padding: 5px 10px;
    font-family: 'Palanquin Dark', sans-serif;
    font-size: 14px;
    color: white;
    border-radius: 7px;
    background-color: rgb(16, 185, 129);
    cursor: pointer;
}

.lineBlock .submit:active {
    color: rgb(107, 109, 103, 0.8);
    border-radius: 7px;
    background-color: rgba(16, 185, 129, 0.134);
}

.lineBlock .default {
    all: unset;
    margin: 0 5px;
    padding: 5px 10px;
    font-family: 'Palanquin Dark', sans-serif;
    font-size: 14px;
    color: white;
    border-radius: 7px;
    background-color: rgb(16, 120, 185);
    cursor: pointer;
}

.lineBlock .default:active {
    color: rgb(107, 109, 103, 0.8);
    border-radius: 7px;
    background-color: rgba(16, 120, 185, 0.134);
}

.to-registerpage{
    all: unset;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px 10px;
    font-family: 'Palanquin Dark', sans-serif;
    font-size: 14px;
    color: white;
    border-radius: 7px;
    background-color: rgb(44, 72, 93);
    cursor: pointer;
}
</style>


/* Rectangle 1 */

position: absolute;
width: 423.02px;
height: 222px;
right: 507px;
top: 403px;


/* Rectangle 1 */

position: absolute;
width: 423.02px;
height: 222px;
right: -70.02px;
top: 568px;

background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(234, 234, 234, 0.2);
background-blend-mode: overlay, normal;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
border-radius: 25px;
