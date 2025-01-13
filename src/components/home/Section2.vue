<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container-fluid py-5 my-5" id="section-2">
        <div class="row">
            <div class="col-6 s-text" data-aos="flip-left" data-aos-duration="1000">
                <h1>De fanáticos a estrellas</h1>
                <p>Conoce más acerca de nuestro grupo...</p>

                <RouterLink to="" class="btn">Historia</RouterLink>
            </div>
            <div class="col-6">
                <div class="card-container" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="card">
                        <img src="" alt="">
                    </div>
                    <div class="card">
                        <img src="" alt="">
                    </div>
                    <div class="card">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
    border: 2px solid #ccc;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    font-size: 14px;
    font-weight: bold;
    transition: transform 0.3s;
    overflow: hidden;
}

.card img {
    width: 100%;
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
</style>