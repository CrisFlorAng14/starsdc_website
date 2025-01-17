<!-- 
    COMPONENTE: Section3
    Muestra la sección 3 de la página de INICIO
    - Enlaces a redes sociales
-->
<template>
    <!-- Contenedor de la sección 3 -->
    <div class="container-fluid py-5 px-5" id="section-3">
        <div class="row">
            <!-- Títulos y texto -->
            <div class="col-12 col-lg-8 s-text" data-aos="zoom-in-right" data-aos-duration="1000">
                <h1>Síguenos en nuestras redes sociales</h1>
                <p>Ayudanos a crecer en el mundo digital</p>
            </div>
            <!-- Redes sociales -->
            <div class="col-12 col-lg-4">
                <div class="social-container">
                    <div class="social-media" data-aos="flip-up" data-aos-duration="1000">
                        <a href="https://www.tiktok.com/@starsdancecover" target="_blank">
                            <font-awesome-icon :icon="['fab', 'tiktok']" />
                            Tik Tok
                        </a>
                    </div>
                    <div class="social-media" data-aos="flip-up" data-aos-duration="1000">
                        <a href="https://www.youtube.com/@StarsDanceCover" target="_blank">
                            <font-awesome-icon :icon="['fab', 'youtube']" />
                            YouTube
                        </a>
                    </div>
                    <div class="social-media" data-aos="flip-up" data-aos-duration="1000">
                        <a href="https://www.instagram.com/stars.d.c" target="_blank">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Estilos generales */
#section-3 {
    background: #07070b;
}
/* Estilos de texto */
.s-text {
    color: #fff;
}
.s-text h1{
    font-size: 4.5rem;
    font-weight: bold;
}
.s-text p {
    font-size: 1.5rem;
}
/* Estilos de redes sociales */
.social-container{
    display: grid;
    grid-template-columns: 1fr;
}
.social-media {
    display: flex;
    align-items: center;
    margin: 5px 0;
}
.social-media a {
    position: relative;
    color: #fff;
    text-decoration: none;
    font-size: 2.3rem;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: 0.3s ease-in-out;
}
.social-media a .f-icon {
    font-size: 3rem;
    vertical-align: middle;
    padding: 2vh;
    width: 5rem;
}
.social-media a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: #DEDEDE;
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
}
.social-media a:hover::after {
    width: 100%;
    left: 0;
    box-shadow: 0 0 5px #DEDEDE;
}
.social-media a:hover {
    text-shadow: 0 0 5px #DEDEDE;
}
/* En celulares pequeños */
@media (max-width: 768px){
    /* Texto */
    .s-text {
        text-align: center;
    }
    .s-text h1 {
        font-size: 2.5rem;
    }
    .s-text p {
        font-size: 1.1rem;
    }
    /* Redes sociales */
    .social-container {
        place-items: center;
    }
    .social-media a{
        font-size: 1.3rem;
    }
}
</style>