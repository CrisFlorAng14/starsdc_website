<script>
export default {
    props: {
        url: {
            type: String,
        },
    },
}
</script>

<template>
    <div id="video-container">
        <!-- Añadimos un iframe con un tamaño adecuado para mostrar la vista previa del video -->
        <iframe width="560" height="315" :src="url" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</template>

<style scoped>
#video-container {
    max-width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}
</style>
