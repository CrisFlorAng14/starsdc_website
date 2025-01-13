<script setup>

</script>

<template>
    <footer class="container-fluid" id="footer">
        <div class="row">
            <div class="col-6">
                <h3 class="text-center" id="group-title">
                    Stars DC
                </h3>
            </div>
            <div class="col-6 mt-3">
                <h4>Nuestras redes</h4>
                <div class="social-media">
                    <a href="https://www.youtube.com/@StarsDanceCover" class="youtube-link">
                        <font-awesome-icon :icon="['fab', 'youtube']" class="f-icon"/>
                    </a>
                    <a href="https://www.tiktok.com/@starsdancecover" class="tiktok-link mx-4">
                        <font-awesome-icon :icon="['fab', 'tiktok']" class="f-icon"/>
                    </a>
                    <a href="https://www.instagram.com/stars.d.c/" class="instagram-link">
                        <font-awesome-icon :icon="['fab', 'instagram']" class="f-icon"/>
                    </a>
                </div>
                <p>StarsDC. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
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
</style>