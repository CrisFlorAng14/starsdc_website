<script>
import Presentation from '@/components/presentation/Video.vue';
export default {
    components: {
        Presentation,
    }    
}
</script>
<template>
    <div id="presentations" class="container-fluid px-5 py-5">
        <div class="row">
            <div class="col-12 col-lg-4">
                <Presentation url="https://www.youtube.com/embed/5kfQfOl2pKg?si=eyGQZW_2L8ykwFSC"/>
            </div>
            <div class="col-12 col-lg-4">
                <Presentation url="https://www.youtube.com/embed/tD_GW1PkLTc?si=0ZbmEjIzNcaLfzjO"/>
            </div>
            <div class="col-12 col-lg-4">
                <Presentation url="https://www.youtube.com/embed/JMrYLIWZ3hU?si=DuILrKTfxs9y2B9K"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
#presentations {
    height: 83.5vh; 
    background: #07070b;
}
</style>