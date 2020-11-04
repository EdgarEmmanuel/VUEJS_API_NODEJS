<template>
<v-app-bar app>
    <div class="d-flex align-center">
        <span>VUE</span><span>PROJECT</span>
    </div>
    <v-btn href="/">
        Home
    </v-btn>
    <v-btn href="/cars">
        Cars
    </v-btn>
    <v-btn href="/nature">
        Nature
    </v-btn>
</v-app-bar>
</template>

<script>
export default {
    name: "navbar"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@600&display=swap');

span {
    font-size: 34px;
    font-weight: bold;
    font-family: 'Sansita Swashed', cursive;
}

span:first-of-type {
    color: green;
}

.v-toolbar__content {
    color: #a38d9a;
}

.v-btn:first-of-type {
    margin-left: 600px;
}
</style>
