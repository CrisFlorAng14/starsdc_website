<script>
import Member from './StarMember.vue';
export default {
    components: {
        Member,
    }
}
</script>

<template>
    <div id="members" class="container-fluid px-5 py-5">
        <h2 class="mb-4 text-white" id="members-title">Conoce a las estrellas</h2>
        <div class="stars">
            <Member 
                name="Jenn"
                birthday="19 de septiembre"
                fav_colors="Azul"
                fav_song="God's Menu"
                fav_groups="Stray Kids, BLACKPINK, ONEUS"
                bias="Hyunjin"
                description="Líder de Stars DC, cree este proyecto para hacer lo que más me gusta, bailar, convivir y sobre todo, hacer amig@s.
                Se caracteriza por ser risueña, ansiosa y enojona pero solo cuando tengo hambre, jaja."
                color_1="3cb6f2" 
                color_2="7bb3cf"
                instagram="jennsmor19"
                class="mx-3"
                image="Jenn.jpg"
            />
            <Member 
                name="Hoonie"
                birthday="16 de julio"
                fav_colors="Rojo y Azul"
                fav_song="2049 de tabber"
                fav_groups="8TURN, Trendz y Lucy"
                bias="Gwangil"
                description="Me caracterizo por escuchar mucho a la gente, amo bailar y escuchar música.
                Dato: Fue la primer integrante en unirse."
                color_1="fe4141" 
                color_2="377aff"
                instagram="itzz_.h00nie"
                class="mx-3"
                image="Paloma.jpg"
            />
            <Member 
                name="Paloma"
                birthday="10 de diciembre"
                fav_colors="Rosa"
                fav_song="Yeah Yeah Yeah"
                fav_groups="BLACKPINK, NewJeans, PurpleKiss"
                bias="Rosé"
                description="Me caracterizo por ser empatica, flexible y algo introvertida.
                Dato: Este es el segundo proyecto de DC en colaboración con Jenn."
                color_1="f944eb" 
                color_2="fa9bf3"
                instagram="flwrose_p"
                class="mx-3"
                image="Paloma.jpg"
            />
        </div>
    </div>
</template>

<style scoped>
#members {
    background: #090a13;
}
.stars {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(15rem,1fr));
}
.mx-3 {
    padding: 10px;
}
</style>