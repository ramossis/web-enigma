<template>
    <div id="candidatos">
      <div class="container-fluid">
        <div class="row">
        <div class="col-sm text-center mb-100">
            <h2 class="text-title small">CANDIDATOS</h2>
            <h4 class="text-subtitle">Conoce los detalles de cada candidato </h4>
        </div>
      </div>
      <div class="row gy-0 gx-0 no-gutters">
        <div class="col-4 no-gutters" >
          <div class="row gy-0 gx-0 no-gutters" >
            <div class="col-6 d-flex justify-content-center no-gutters " v-for="candidato in candidatos1" :key="candidato.id">
              <img :src=srcImgFoto(candidato.foto) class="img-little" @mouseover="showCandidato(candidato)" alt="" srcset="">
            </div>
          </div>
        </div>
        <div class="col-4 no-gutters justify-content-center" style="height: 200px;">
          <img :src=srcImg.foto class="img-fluid h-100 d-flex justify-content-center"  alt="img-candidato">
           <h2 class="text-title-grid text-center" >{{ viewCandidato.nombre }}</h2>
           <h3 class="text-subtitle-grid text-center" >{{ viewCandidato.cargo }}</h3>
        </div>
        <div class="col-4 no-gutters">
          <div class="row gy-0 gx-0 no-gutters" >
            <div class="col-6 no-gutters" v-for="candidato in candidatos2" :key="candidato.id">
              <img :src=srcImgFoto(candidato.foto) class="img-little" @mouseover="showCandidato(candidato)" alt="" srcset="">
            </div>
          </div>
          </div>

        </div>
      </div>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Vujahday+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Vujahday+Script&display=swap');
@font-face{
    font-family:'Designer';
    src:url('../../public/fonts/DESIGNER.otf') format('opentype')
}
.mb-100{
  margin-bottom:100px
}
.container-candidatos{
  margin-right: 96px;
  margin-left: 96px;
}
.img-little{
  position:relative;
  width: 40px;
	height: 50px;
	object-fit: cover;
  background: linear-gradient(to bottom,rgba(255,255,255,0.2),rgba(0,0,0,1.5));
  filter: grayscale(100%);
}
.col img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto; /* Centra la imagen si es necesario */
        }
.width-rex{
  width: 300px;
}
.img-candidatos{
  text-align: center;
  margin-right:60px;
  height: 350px;
  width: 210px;
  object-fit: fill;

}
.text-title{
  font-family:"Designer", serif;
  font-size: 40px;
  color: #54d72c;

  }
  .text-title-grid{
    margin:auto;
  text-align: start;
  font-family:"Designer", serif;
  font-size: 32px;
  color: #54d72c;

  }
  .text-subtitle-grid{
  font-family: "Roboto",sans-serif;
  font-size: 15px;
  color: #fff;

  }
  .text-subtitle{
    font-family: "Roboto",sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 15px;
    color: white;


  }
</style>

<script>
import {mitad1,mitad2} from '@/data/Candidatos'
export default {
  data(){
    return{
      candidatos1:mitad1,
      candidatos2:mitad2,
      viewCandidato:{}
      
    }
  },
  methods:{
    showCandidato(data){
      this.viewCandidato=data
    },
    srcImgFoto(filename=''){
      return require(`../../public/img/candidatos/${filename}`)
  },
  },
  computed:{
    srcImg(){
      return {
        ...this.viewCandidato,
        foto: this.viewCandidato.foto && require(`../../public/img/candidatos/${this.viewCandidato.foto}`)
      }
    }
  }
}
</script>
