<template>
    <div id="history">
        <div class="container-fluid" id="history-id">
            <div class="row">
                <div class="col-3 px-lg-5 px-4 s-text">
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <img src="../../public/media/icons/Logo.png" alt="" class="img-logo">
                    </div>
                    <div class="text-container mt-lg-4 mt-0" data-aos="fade-left" data-aos-duration="1000">
                        <p class="text-content mb-0">
                            Stars DC nace a partir del proyecto Stars Dance JC y del gusto por la música
                            y el baile en el género de K-POP. El grupo de dance cover se crea a mediados
                            del 2024 por la líder e integrante Jenny Saldaña "Jenn".
                            
                            <!-- Este contenido siempre se ve, pero en dispositivos grandes solo se muestra parte -->
                            <span v-bind:class="{'d-none d-sm-inline': !isExpanded}">
                                Debutando con cinco integrantes con la canción "SMART - LE SSERAFIM" en agosto
                                del 2024. Actualmente el grupo está creciendo considerablemente, incluyendo a nuevos integrantes, 
                                participando en concursos, eventos y colaborando con otros grupos de dance cover.
                            </span>
                            <!-- En dispositivos pequeños, se muestra un botón para expandir el texto -->
                            <button 
                                v-if="isMobile" 
                                class="btn btn-link p-0 ms-1"
                                type="button" 
                                @click="toggleContent">
                                {{ isExpanded ? 'Ver menos' : 'Ver más' }}
                            </button>
                        </p>
                        <button class="btn btn-light" @click="scrollSection"><strong>Conoce a las estrellas</strong></button>
                    </div>
                </div>
                <div class="col-12 col-lg-9 img-container px-0 mx-0">
                    <img src="../../public/media/images/starsdc_chkchkboom.jpg" alt="" class="img-cover">
                </div>
            </div>
            <!-- Miembros -->
        </div>
    </div>
    <Members />
</template>

<script>
import Members from '@/components/history/StarMembers.vue';

export default {
    components: {
        Members,
    },
    data() {
        return {
            isExpanded: false,  // Determina si el contenido adicional está visible
            isMobile: false,    // Determina si el dispositivo es móvil
        };
    },
    mounted() {
        this.checkScreenSize(); // Verifica el tamaño de la pantalla cuando se monta el componente
        window.addEventListener('resize', this.checkScreenSize); // Verifica el tamaño de la pantalla al redimensionar
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkScreenSize); // Limpiar el evento de resize cuando el componente se destruya
    },
    methods: {
        checkScreenSize() {
            this.isMobile = window.innerWidth <= 768; // Consideramos que es móvil si el ancho de la ventana es <= 768px
        },
        scrollSection() {
            const section = document.getElementById('members-title');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },
        toggleContent() {
            this.isExpanded = !this.isExpanded; // Alterna entre expandir y contraer el contenido
        },
    },
};
</script>

<style scoped>
#history {
    height: 83.5vh;
    background: #090a13;
}

/* Estilos de historia y logo */
.img-logo {
    transform: translateX(9rem) translateY(1rem);
    width: 40vh;
    filter: drop-shadow(0 0 5px #9ef1ff);
}

.text-container {
    position: absolute;
    z-index: 2;
    width: 65vw;
}

.text-content {
    color: #fff;
    font-size: 1.15rem;
    font-weight: 500;
}

.btn {
    transition: 0.2s ease-in-out;
}

.btn:hover {
    color: #fff;
    background: transparent;
    filter: drop-shadow(0 0 10px #9ef1ff);
}

/* Estilos de imagen de portada */
.img-container {
    overflow: hidden;
    height: 80vh;
}

.img-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;

    /* Máscara separada para la parte inferior y la parte izquierda */
    -webkit-mask-image: 
        linear-gradient(to bottom, black 0%, transparent 100%), /* Degradado hacia abajo */
        linear-gradient(to right, black 0%, transparent 100%);   /* Degradado hacia la izquierda */
    mask-image: 
        linear-gradient(to bottom, black 60%, transparent 100%),
        linear-gradient(to right, black 0%, transparent 70%);
    -webkit-mask-composite: destination-over; /* Combinar las máscaras correctamente */
    mask-composite: subtract;
    -webkit-mask-size: 100% 100%, 100% 100%;
    mask-size: 100% 100%, 100% 100%;
    -webkit-mask-repeat: no-repeat, no-repeat;
    mask-repeat: no-repeat, no-repeat;
}

@media (max-width: 768px) {
    #history {
        height: 70vh;
    }
    .img-container {
        width: 100%;
        height: auto;
    }

    .img-cover {
        -webkit-mask-image: 
            linear-gradient(to bottom, black 0%, transparent 100%);
        mask-image: 
            linear-gradient(to bottom, black 30%, transparent 100%);
        order: 2;
    }

    .s-text {
        order: 1;
    }

    .img-container {
        height: 22vh;
    }

    .img-logo {
        transform: translateY(-3rem);
        width: 20vh;
    }

    .text-container {
        width: 90vw;
    }

    .text-content {
        font-size: 12px;
        transform: translateY(-2.5rem);
    }

    .btn-link {
        font-size: 12px;
        text-decoration: none;
        font-weight: 800;
        color: #fff;
    }
}
</style>
