<!-- 
    COMPONENTE: FooterPage
    Muestra el pie de pagina
    - Nombre del grupo
    - Enlace a redes sociales
-->
<template>
    <!-- Contenedor pie de página -->
    <footer class="container-fluid" id="footer">
        <div class="row">
            <!-- Nombre del grupo -->
            <div class="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                <h3 class="text-center" id="group-title">
                    Stars DC
                </h3>
            </div>
            <!-- Redes sociales -->
            <div class="col-12 col-lg-6 mt-3">
                <h4>Nuestras redes</h4>
                <div class="social-media">
                    <a href="https://www.youtube.com/@StarsDanceCover" class="youtube-link" target="_blank">
                        <font-awesome-icon :icon="['fab', 'youtube']" class="f-icon"/>
                    </a>
                    <a href="https://www.tiktok.com/@starsdancecover" class="tiktok-link mx-4" target="_blank">
                        <font-awesome-icon :icon="['fab', 'tiktok']" class="f-icon"/>
                    </a>
                    <a href="https://www.instagram.com/stars.d.c/" class="instagram-link" target="_blank">
                        <font-awesome-icon :icon="['fab', 'instagram']" class="f-icon"/>
                    </a>
                </div>
                <p>StarsDC. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* Estilos para FOOTER */
#footer {
    background: #090a13;
}
/* Estilos del título del grupo */
#group-title {
    color: #fff;
    font-family: 'Amerika Signature', sans-serif;
    font-size: 4.5rem;
    text-shadow: 0 0 10px #9ef1ff;
}
/* Estilos de las redes sociales */
h4,p {
    color: #fff;
}
.social-media a {
    color: #fff;
    font-size: 2rem;
    transition: 0.2s ease-in-out;
}
.social-media a.youtube-link:hover {
    color: #fff;
    background: linear-gradient(45deg, #ff7070, #fe5a5a);
    -webkit-background-clip: text;
    filter: drop-shadow(0 0 10px #fe5a5a) drop-shadow(0 0 10px #ff7070);
}
.social-media a.tiktok-link:hover {
    color: #fff;
    background: linear-gradient(45deg, #ff00cc, #00ffff);
    -webkit-background-clip: text;
    filter: drop-shadow(0 0 10px #00ffff) drop-shadow(0 0 10px #ff00cc);
}
.social-media a.instagram-link:hover {
    color: #fff;
    background: linear-gradient(10deg, #ff00cc, #ffaa70);
    -webkit-background-clip: text;
    filter: drop-shadow(0 0 10px #ff00cc) drop-shadow(0 0 10px #ffaa70);
}
/* Estilos para dispositivos pequeños */
@media (max-width: 768px){
    #group-title {
        font-size: 3rem;
    }
    h4,p{
        text-align: center;
    }
    h4 {
        font-size: 1.4rem;
    }
    p {
        font-size: 12px;
    }
    .social-media {
        text-align: center;
    }
}
</style>