<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../../public/img/r.png" class="img-fluid img-brand" alt="">
            </a>
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#candidatos">CANDITADOS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#propuestas">PROPUESTAS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#nosotros">SOBRE NOSOTROS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#redes">REDES SOCIALES</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container">
    <div class="row img-center-logo">
        <div class="col-12 text-center">
            <img src="../../public/img/main-logo.png" alt="logo_enigma" class="img-fluid">
        </div>
    </div>
</div>
    <GridCanditados/>

    <div class="propuestas">
        <PropuestasCarousel/>
    </div>

    <div class="nosotros">
        <SobreNosotros/>
    </div>

    <div class="nosotros">
        <NuestrasRedes/>
    </div>
    </div>
    
</template>

<script>
import GridCanditados from '@/components/GridCanditados'
import PropuestasCarousel from '@/components/PropuestasCarousel'
import SobreNosotros from '@/components/SobreNosotros';
import NuestrasRedes from '@/components/NuestrasRedes';
export default {
    components :{
        GridCanditados,
        PropuestasCarousel,
        SobreNosotros,
        NuestrasRedes
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Vujahday+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Vujahday+Script&display=swap');  
.navbar {
    background-color: transparent !important;
    border-bottom: 2px solid white;
}

@font-face{
    font-family:'Designer';
    src:url('../../public/fonts/DESIGNER.otf') format('opentype')
}
.navbar-nav .nav-link {

      font-family:"Designer", serif;
  font-weight: 400;
  font-style: normal;
    color: #fff;
    font-weight: bold;
    font-size: 26px;
    text-align: center
}
.navbar-nav .nav-link:hover {
    color: #fff;
    background-color: #40b45f;
}
.img-brand{
    width: auto;
    height: 120px;
    filter:drop-shadow(0px 7px 21px #33b6ab);
    animation: rotar 5s linear infinite;
}
@keyframes rotar {
    from{
        transform: rotateY(180deg);
    }
    to{
        transform:rotateY(-180deg);
    }
}
.navbar-img{
    margin-top: 50px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.img-center-logo{
    margin: 20px;
}
</style>
