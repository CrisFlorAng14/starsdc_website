<!-- 
    COMPONENTE: StarShower
    Muestra la animación de lluvia de estrellas
-->
<template>
    <!-- Contenedor de lluvia de estrellas -->
    <div class="night" :style="customStyles">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
    </div>
</template>

<script>
export default {
    props: {
        primaryColor: {
            type: String,
            default: "#5F91FF", // Color por defecto
        },
        secondaryColor: {
            type: String,
            default: "#699BFF", // Color por defecto
        },
    },
    computed: {
        customStyles() {
            return {
                '--primary-color': this.primaryColor,
                '--secondary-color': this.secondaryColor,
            };
        },
    },
};
</script>

<style scoped>
/* Estilos de fondo */
.night {
    position: relative;
    width: 100%;
    height: 100%;
    transform: rotateZ(40deg) translateY(-10rem);
    z-index: -1000;
}
/* Estilos de estrellas */
.star {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 4px;
    width: 100px;
    background: linear-gradient(-45deg, var(--primary-color), rgba(0, 0, 255, 0));
    border-radius: 999px;
    filter: drop-shadow(0 0 6px var(--secondary-color));
    animation: tail 3s ease-in-out infinite, falling 3s ease-in-out infinite;
}
.star::before,
.star::after {
    content: '';
    position: absolute;
    top: calc(50% - 2px);
    right: 0;
    height: 4px;
    width: 30px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), var(--primary-color), rgba(0, 0, 255, 0));
    border-radius: 100%;
    transform: translateX(50%) rotateZ(45deg);
    animation: shinning 3s ease-in-out infinite;
}
/* Animación de camino de estrella */
@keyframes tail {
    0% {
        width: 0px;
    }
    30% {
        width: 100px;
    }
    100% {
        width: 0;
    }
}
/* Animación de caída de estrellas */
@keyframes falling {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(300px);
    }
}

/* Animación de brillo */
@keyframes shinning {
    0% {
        width: 0px;
    }
    50% {
        width: 30px;
    }
    100% {
        width: 0;
    }
}
/* Estilos y animación para cada estrella */
.star::after{
    transform: translateX(50%) rotateZ(-45deg);
}
.star:nth-child(1){
    top: calc(50% - 110px);
    left: calc(50% - 260px);
    animation-delay: 0.9s;
}
.star:nth-child(1)::before, .star:nth-child(1)::after{
    animation-delay: 0.9s;
}
.star:nth-child(2){
    top: calc(50% - 70px);
    left: calc(50% - 190px);
    animation-delay: 1.5s;
}
.star:nth-child(2)::before, .star:nth-child(2)::after{
    animation-delay: 1.5s;
}
.star:nth-child(3){
    top: calc(50% - 10px);
    left: calc(50% - 140px);
    animation-delay: 1.5s;
}
.star:nth-child(3)::before, .star:nth-child(3)::after{
    animation-delay: 1.5s;
}
.star:nth-child(4){
    top: calc(50% - -40px);
    left: calc(50% - 220px);
    animation-delay: 1.1s;
}
.star:nth-child(4)::before, .star:nth-child(4)::after{
    animation-delay: 1.1s;
}
.star:nth-child(5){
    top: calc(50% - -120px);
    left: calc(50% - 240px);
    animation-delay: 2s;
}
.star:nth-child(5)::before, .star:nth-child(5)::after{
    animation-delay: 2s;
}
.star:nth-child(6){
    top: calc(50% - 90px);
    left: calc(50% - 280px);
    animation-delay: 1.1s;
}
.star:nth-child(6)::before, .star:nth-child(6)::after{
    animation-delay: 1.1s;
}
.star:nth-child(7){
    top: calc(50% - 30px);
    left: calc(50% - 170px);
    animation-delay: 2s;
}
.star:nth-child(7)::before, .star:nth-child(7)::after{
    animation-delay: 2s;
}
.star:nth-child(8){
    top: calc(50% - -60px);
    left: calc(50% - 210px);
    animation-delay: 3s;
}
.star:nth-child(8)::before, .star:nth-child(8)::after{
    animation-delay: 3s;
}
</style>
