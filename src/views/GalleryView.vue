<script>
export default {
    // Devolución de objetos
    data() {
        return {
            isModalVisible: false, // Verificar si el modal está visible
            modalImage: '', // URL de la imagen seleccionada
            // Arreglo de imagenes
            images: [
                '/media/images/members/Jenn.jpg',
                '/media/images/starsdc_smart.jpg',
                '/media/images/members/Azu.jpg',
                '/media/images/members/Hoonie.jpg',
                '/media/images/starsdc_borntobe.jpg',
                '/media/images/starsdc_sugarrushride.jpg',
                '/media/images/starsdc_chkchkboom.jpg',
                '/media/images/members/Shey.jpg',
                '/media/images/members/Paloma_002.jpg',
                '/media/images/members/Handy.jpg',
                '/media/images/members/Ari.jpg',
            ],

        };
    },
    // Métodos
    methods: {
        /**
         * Función para mostrar imagen en el modal
         */
        showImageModal(imageSrc) {
            this.modalImage = imageSrc; // Asignar la URL de la imagen
            this.isModalVisible = true; // Mostrar modal
        },
        /**
         * Función para cerrar el modal
         */
        closeModal() {
            this.isModalVisible = false; // Ocultar modal
            this.modalImage = ''; // Limpiar URL de la imagen
        },
    },
};
</script>

<template>
    <!-- Contenedor de GALERÍA -->
    <div id="gallery" class="px-4 py-3">
        <div class="container-fluid">
            <!-- Contenedor de galería estilo Masonry -->
            <div class="gallery-masonry">
                <!-- Recorrido de arreglo de imágenes dinámicamente -->
                <div class="gallery-images" v-for="(image, index) in images" :key="index">
                    <div class="img-container" @click="showImageModal(image)">
                        <img :src="image" alt="Image {{ index + 1 }}" class="img-content">
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Modal flotante -->
        <div v-if="isModalVisible" class="image-modal" @click="closeModal">
            <!-- Botón para cerrar -->
            <button class="close-button" @click="closeModal">✕</button>
            <!-- Contenedor de la imagen modal -->
            <div class="modal-img-container">
                <img :src="modalImage" alt="Selected Image" class="modal-content">
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Estilos de contenedor principal GALERÍA */
#gallery {
    height: 100%;
    background: #090a13;
}

/* Contenedor de Masonry */
.gallery-masonry {
    column-count: 5; /* Columnas en pantallas grandes */
    column-gap: 1rem; /* Espacio entre las columnas */
    width: 100%;
}

/* Estilo para cada imagen en la galería */
.gallery-images {
    break-inside: avoid; /* Evita que las imágenes se dividan entre columnas */
    margin-bottom: 1rem;
}
/* Estilos para imagen individual */
.img-container {
    width: 100%;
    border: solid 1px #fff;
    border-radius: 5px;
    overflow: hidden;
    transition: 0.3s ease-in-out;
}
.img-content {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.img-container:hover {
    transform: scale(1.1);
    cursor: pointer;
}

/* Estilos del modal */
.image-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal-img-container {
    width: auto;
    height: 80vh;
    overflow: hidden;
}
.modal-content {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
}

/* Estilos del botón para cerrar */
.close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.8);
    color: #000;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 5;
    transition: background 0.3s ease;
}
.close-button:hover {
    background: rgba(255, 255, 255, 1);
}

/* Responsividad para pantallas más pequeñas */
@media (max-width: 1200px) {
    .gallery-masonry {
        column-count: 3; /* Tres columnas en pantallas medianas */
    }
}

@media (max-width: 768px) {
    .gallery-masonry {
        column-count: 2; /* Dos columnas en pantallas pequeñas */
    }
}


</style>
