<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="container-fluid px-5" id="section-1">
        <div class="row">
            <!-- Sección con iconos -->
            <div class="col-6">
                <div class="row">
                    <div class="col-6 text-center py-5" data-aos="fade-right" data-aos-duration="1000">
                        <font-awesome-icon :icon="['fas', 'icons']" class="f-icon mb-3"/>
                        <h5>Energía y presencia escénica</h5>
                    </div>
                    <div class="col-6 text-center py-5" data-aos="fade-left" data-aos-duration="1000">
                        <font-awesome-icon :icon="['fas', 'trophy']" class="f-icon mb-3"/>
                        <h5>Bailando y ganando en cada evento</h5>
                    </div>
                    <div class="col-6 text-center py-5" data-aos="fade-right" data-aos-duration="1000">
                        <font-awesome-icon :icon="['fas', 'lightbulb']" class="f-icon mb-3"/>
                        <h5>Ideas creativas y estilo propio al bailar</h5>
                    </div>
                    <div class="col-6 text-center py-5" data-aos="fade-right" data-aos-duration="1000">
                        <font-awesome-icon :icon="['fas', 'users']" class="f-icon mb-3"/>
                        <h5>Siendo estrellas trabajando en equipo</h5>
                    </div>
                </div>
            </div>
            <!-- Sección de texto -->
            <div class="col-6 text-end mt-5 s-text" data-aos="fade-right" data-aos-duration="1000">
                <h1>Bailar y brillar es lo nuestro</h1>
                <br>
                <p>
                    Bailamos sueños, brillamos juntos. 
                    <br> 
                    Mira nuestras presentaciones
                </p>

                <RouterLink to="" class="btn btn-light mt-3">Nuestros proyectos</RouterLink>
            </div>
        </div>
    </div>    
</template>

<style scoped>
#section-1 {
    background: #07070b;
}
.container-fluid {
    color: #fff;
}
/* Estilo de iconos */
.f-icon {
    font-size: 11.5vh;
}
/* Estilo de texto */
.s-text h1{
    font-size: 4.5rem;
    font-weight: bold;
}
.s-text p {
    font-size: 1.5rem;
}
.btn {
    transition: 0.3s ease-in-out;
    font-weight: bold;
}
.btn:hover {
    box-shadow: 0 0 10px #9ef1ff;
}

</style>