<!-- 
    COMPONENTE: Video
    Muestra el video recibido por URL en PRESENTACIONES
-->
<script>
export default {
    // Propiedades utilizadas
    props: {
        url: {
            type: String,
        },
    },
}
</script>

<template>
    <!-- Contenedor para video -->
    <div id="video-container">
        <iframe width="560" height="315" :src="url" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</template>

<style scoped>
/* Estilos del contenedor de video */
#video-container {
    max-width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}

/* Estilos en dispositivos pequeños */
@media (max-width: 768px) {
    iframe {
        width: 100%;
        height: 200px;
    }
}
</style>
