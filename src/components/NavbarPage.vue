<!-- 
    COMPONENTE: NavbarPage
    Muestra el menu de inicio
    - Navegación entre vistas
-->

<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <!-- Título del grupo -->
    <div class="text-center">
        <RouterLink to="/" class="group-title">Stars DC</RouterLink>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <!-- Botón para desplegar el menú (dispositivos pequeños) -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Menú de opciones -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item mx-2 py-2 py-lg-0">
                        <RouterLink to="/" class="nav-link">Inicio</RouterLink>
                    </li>
                    <li class="nav-item mx-2 py-2 py-lg-0">
                        <RouterLink to="/galeria" class="nav-link">Galería</RouterLink>
                    </li>
                    <li class="nav-item mx-2 py-2 py-lg-0">
                        <RouterLink to="/historia" class="nav-link">Historia</RouterLink>
                    </li>
                    <li class="nav-item mx-2 py-2 py-lg-0">
                        <RouterLink to="/presentaciones" class="nav-link">Presentaciones</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
/* Estilos generales */
* {
    background: #090a13;
    margin: 0;
    text-decoration: none;
}
/* Estilos para nombre del grupo */
.group-title{
    font-size: 40px;
    font-family: 'Amerika Signature',serif;
    color: #fff;
    text-shadow: 0 0 10px #9ef1ff;
}
/* Estilos para enlaces */
a.nav-link {
    font-size: 13px;
    color: #fff;
    border: solid 1px #fff;
    border-radius: 5px;
    padding: 5px 10px;
    transition: 0.3s ease-in-out;
}
a.nav-link:hover {
    background: #fff;
    color: #090a13;
    box-shadow: 0 0 10px #9ef1ff;
}
/* Estilos para dispositivos pequeños */
@media (max-width: 768px) {
    .group-title {
        position: absolute;
        font-size: 35px;
        transform: translateX(-2.5rem);
        z-index: 500;
    }
}
</style>
