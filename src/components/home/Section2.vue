<!-- 
    COMPONENTE: Section2
    Muestra la sección 2 de la página de INICIO
    - Algunos miembros
    - Enlace a historia
-->
<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <!-- Contenedor de la sección 2 -->
    <div class="container-fluid py-0 py-lg-5 my-5 px-5" id="section-2">
        <div class="row">
            <!-- Títulos y texto -->
            <div class="col-6 s-text" data-aos="flip-left" data-aos-duration="1000">
                <h1>De fanáticos a estrellas</h1>
                <p>Conoce más acerca de nuestro grupo...</p>
                <!-- Enlace a la vista HISTORIA -->
                <RouterLink to="/historia" class="btn" @click="scrollSection">Historia</RouterLink>
            </div>
            <!-- Cartas de miembros del grupo -->
            <div class="col-12 col-lg-6">
                <div class="card-container" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="card">
                        <img src="../../../public/media/images/members/Hoonie.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="../../../public/media/images/members/Jenn.jpg" alt="">
                    </div>
                    <div class="card">
                        <img src="../../../public/media/images/members/Azu.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Estilo de texto */
.s-text h1{
    font-size: 4.5rem;
    font-weight: bold;
}
.s-text p {
    font-size: 1.5rem;
}
/* Estilo de botón */
a {
    background: #090a13;
    color: #fff;
    font-weight: bold;
    letter-spacing: 5px;
    transition: 0.2s ease-in-out;
}
a:hover {
    border: solid 1px #090a13;
    box-shadow: 0 0 10px #090a13;
}
/* Estilo de cartas */
.card-container {
    position: relative;
    width: 100%; 
    height: 100%;
    display: flex;
    justify-content: center; 
    align-items: center; 
}

.card {
    position: absolute;
    width: 10rem;
    height: 14rem;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: bold;
    transition: transform 0.3s;
    overflow: hidden;
    box-shadow: 0 0 10px #000;
}

.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card:nth-child(1) {
    transform: rotate(-15deg) translateX(-120px);
    z-index: 1;
}
.card:nth-child(1):hover {
    transform: rotate(-15deg) translate(-120px) scale(1.3);
    z-index: 3;
}
.card:nth-child(2) {
    transform: rotate(0deg);
    z-index: 2;
}
.card:nth-child(2):hover {
    transform: rotate(0deg) scale(1.3);
    z-index: 2
}
.card:nth-child(3) {
    transform: rotate(15deg) translateX(120px);
    z-index: 1;
}
.card:nth-child(3):hover {
    transform: rotate(15deg) translate(120px) scale(1.3);
    z-index: 3;
}
/* En dispositivos pequeños */
@media (max-width: 768px) {
    /* Sección 2 */
    #section-2 {
        height: 50vh;
    }
    /* Texto de la sección */
    .s-text {
        width: 100%;
    }
    .s-text h1{
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
    }
    .s-text p {
        text-align: center;
        font-size: 1.5rem;
    }
    .s-text a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    /* Cartas */
    .card-container {
        margin-top: 3.5rem;    
        width: 100%; 
        height: 100%;
    }
    .card {
        width: 6rem;
        height: 8rem;
    }
    .card:nth-child(1) {
    transform: rotate(-15deg) translateX(-60px);
    z-index: 1;
    }
    .card:nth-child(1):hover {
        transform: rotate(-15deg) translate(-60px) scale(1.3);
        z-index: 3;
    }
    .card:nth-child(2) {
        transform: rotate(0deg);
        z-index: 2;
    }
    .card:nth-child(2):hover {
        transform: rotate(0deg) scale(1.3);
        z-index: 2
    }
    .card:nth-child(3) {
        transform: rotate(15deg) translateX(60px);
        z-index: 1;
    }
    .card:nth-child(3):hover {
        transform: rotate(15deg) translate(60px) scale(1.3);
        z-index: 3;
    }
}
</style>