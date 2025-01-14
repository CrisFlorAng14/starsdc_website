<!--
    COMPONENTE: Member
    Muestra la foto de vista previa del integrante y su información en modal
-->
<script>
import StarShower from './StarShower.vue';
export default {
    components: {
        StarShower,
    },
    props: {
        name: {
            type: String,
        },
        birthday: {
            type: String,
        },
        fav_colors: {
            type: String,
        },
        fav_song: {
            type: String,
        },
        fav_groups: {
            type: String,
        },
        bias: {
            type: String,
        },
        description: {
            type: String,
        },
        color_1: {
            type: String,
        },
        color_2: {
            type: String,
        },
        instagram: {
            type: String,
        },
        image: {
            type: String,
        }
    },
}
</script>

<template>
    <div id="member">
        <!-- Contenedor de imagen del miembro del grupo -->
        <div id="member" :style="{ '--primary-color': '#' + color_1 }">
            <div class="img-container d-flex" data-bs-toggle="modal" :data-bs-target="'#modalMember-' + name">
                <img 
                    :src="'/media/images/members/' + image" 
                    :alt="'Integrante: '+ name" 
                    class="img-content">
            </div>
        </div>
            
        <!-- Modal con información del miembro seleccionado -->
        <div class="modal fade" :id="'modalMember-'+name" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-body position-relative">
                        <div class="d-flex align-items-end justify-content-end">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        <!-- Llvia de estrellas con color dinámico -->
                        <div class="starshower-container">
                            <StarShower 
                                :primaryColor="'#' + color_1" 
                                :secondaryColor="'#' + color_2" 
                            />
                        </div>

                        <!-- Contenido del modal + Información del miembro -->
                        <div class="content">
                            <div class="row">
                                <!-- Imagen de perfil -->
                                <div class="col-5">
                                    <div class="member-container">
                                        <img 
                                            :src="'/media/images/members/' + image" 
                                            :alt="'Integrante: '+ name" 
                                            class="member-content w-100"/>
                                    </div>
                                </div>
                                <!-- Información -->
                                <div class="col-7">
                                    <div class="name-container">
                                        <h4>{{ name }}</h4>
                                    </div>
                                    <ul>
                                        <li><strong>Cumpleaños:</strong> {{ birthday }}</li>
                                        <li><strong>Colores Favoritos:</strong> {{ fav_colors }}</li>
                                        <li><strong>Canción Favorita:</strong> {{ fav_song }}</li>
                                        <li><strong>Grupos Favoritos:</strong> {{ fav_groups }}</li>
                                        <li><strong>Bias:</strong> {{ bias }}</li>
                                        <li>{{ description }}</li>
                                    </ul>
                                    <div class="d-flex mx-3 social-member">
                                        <a :href="'https://www.instagram.com/' + instagram" :style="{ '--hover-color': '#' + color_1 }">
                                            <font-awesome-icon :icon="['fab', 'instagram']" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Estilos de la imagen del miembro - Vista previa */
.img-container {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: 0.3s ease-in-out;
}
.img-container:hover {
    filter: drop-shadow(0 0 10px var(--primary-color));
    transform: scale(1.05);
}
.img-content {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
}
/* Estilos del modal */
.modal-content {
    background: rgba(19, 19, 24, 0.5);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: #fff;
}
.modal-header, 
.modal-body, 
.modal-footer {
    z-index: 1;
    background: transparent;
}
.modal-body {
    position: relative;
    overflow: hidden;
}
/* Estilos del contenido del modal */
.content {
    position: relative;
    z-index: 1;
    color: #fff;
}
/* Estilos del boton para cerrar el modal */
.btn-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 5;
    filter: invert(1);
}
/* Estilos de la foto del miembro dentro del modal */
.member-container {
    width: 20rem;
    height: 20rem;
    overflow: hidden;
    border-radius: 15px;
}
.member-content {
    width: 100%;
    height: auto;
    object-fit: cover;
}
/* Estilos de la información del miembro */
/* Nombre */
h4 {
    transform: translateX(1rem);
    text-transform: uppercase;
}
/* Listado */
li {
    list-style-type: none;
    transform: translateX(-1rem);
}
/* Estilos del contenedor de la lluvia de estrellas */
.starshower-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    transform: translateY(7rem) translateX(5rem);
}
/* Estilos de la red social del miembro */
.social-member a {
    color: #fff;
    font-size: 2.1rem;
    transition: filter 0.3s ease, transform 0.3s ease;
}
.social-member a:hover {
    filter: drop-shadow(0 0 8px var(--hover-color, #ffffff));
    transform: scale(1.1);
}

</style>
