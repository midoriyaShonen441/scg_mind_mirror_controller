<script>
    import Slider from '@vueform/slider'
    export default {
    components: {
      Slider,
    },
    data() {
      return {
        value: [20,50],
      }
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
        <p>Parameter</p>

        <div class="lineBlock">
            <div class="inputForm">
                <label for="videoDuration">Video duraion (1-100s):</label>
                <input type="number" id="videoDuration" name="videoDuration" min="1" max="100">
            </div>
            <div class="inputForm">
                <label for="voiceDuration">Voice duraion (1-100s):</label>
                <input type="number" id="voiceDuration" name="voiceDuration" min="1" max="100">
            </div>
        </div>

        <div class="sliderContent">
            <label for="criteriaRange">Voice Criteria Range: </label>
            <div class="slider">
                <Slider id="criteriaRange" name="criteriaRange" v-model="value"/>
            </div>
        </div>

        <div class="lineBlock">
            <button class="submit" @click="submit">submit</button>
            <button class="default" @click="default">default</button>
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
