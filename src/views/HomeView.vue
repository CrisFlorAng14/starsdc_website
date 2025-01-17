<script>
import Section1 from '@/components/home/Section1.vue';
import Section2 from '@/components/home/Section2.vue';
import Section3 from '@/components/home/Section3.vue';

// Definción de componentes utilizados en la vista
export default {
    components: {
        Section1,
        Section2,
        Section3,
        
    },
    mounted() {
        // Definción de constantes con la clase 'phrase'
        const phrases = document.querySelectorAll('.phrase');
        // DEfinción de índice
        let currentIndex = 0;
        /**
         * Función para actualizar la animación de 'phrase'
         */
        function updateActivePhrase() {
          // Recorrido del índice para remover la animación
          phrases.forEach(p => p.classList.remove('active'));
          // Activar la animación en el índice
          phrases[currentIndex].classList.add('active');
          // Asegura alcance el máximo regrese a 0 (al inicio)
          currentIndex = (currentIndex + 1) % phrases.length;
        }
        // Intervalo de tiempo para ejecutar la función
        setInterval(updateActivePhrase, 2000);
    }
}
</script>

<template>
  <!-- Contenedor principal de INICIO -->
  <div id="home">
    <!-- Contenedor del video -->
    <div class="video-container">
      <video autoplay muted loop class="video">
        <source src="../../public/media/videos/intro_starsdc.mp4" type="video/mp4">
      </video>
    </div>

    <!-- Contenedor del texto -->
    <div class="text-content">
      <div data-aos="fade-down" data-aos-duration="1000">
        <!-- Títulos -->
        <h1>K-POP DANCE COVER</h1>
        <h4>El brillo del K-pop comienza aquí</h4>
      </div>
      <!-- Frases -->
      <div class="text-center py-3" data-aos="fade-up" data-aos-duration="1000">
        <div class="row">
          <div class="col-12 col-lg-4">
            <p class="phrase">Brillando con cada paso</p>
          </div>
          <div class="col-12 col-lg-4">
            <p class="phrase">Estrellas del K-pop</p>
          </div>
          <div class="col-12 col-lg-4">
            <p class="phrase">Iluminando el escenario</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Sección 1 -->
  <Section1 />
  <!-- Sección 2 -->
  <Section2 />
  <!-- Sección 3 -->
  <Section3 />
  
</template>

<style scoped>
/* Contenedor principal */
#home {
  position: relative;
  height: 83.5vh; 
  overflow: hidden;
  z-index: 1;
  background-color: #090a13;
}

/* Contenedor del video */
.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  z-index: 0;
}

/* Video */
.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

/* Contenedor del texto */
.text-content {
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
  transform: translateY(15.5rem);
}

.text-content h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.text-content h4 {
  font-size: 1.5rem;
  font-weight: 400;
}
/* Animación de frases */
.phrase {
  font-size: 1.2rem;
  transition: 0.5s ease-in-out;
}
.active {
  text-shadow: 0 0 10px #9ef1ff;
}
/* Estilos en celulares pequeños */
@media (max-width: 768px) {
  /* Principal INICIO */
  #home {
    height: 65vh;
  }
  /* Video */
  .video-container {
    height: 50vh;
  }
  /* Títulos */
  .text-content h1 {
    font-size: 2rem;
  }
  .text-content h4 {
    font-size: 1.1rem;
  }
  /* Frases */
  .phrase {
    font-size: 1rem;
  }
}
</style>
