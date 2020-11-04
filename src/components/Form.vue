<template>
<v-main>
    <img src="https://res.cloudinary.com/serdy-m-dia-inc/image/upload/w_800,c_limit/legacy_espaces//var/data/gallery/photo/35/27/95/63/15/63063.jpg" alt="" />
    <form @submit="send" class="form">
        <h1>
            The best free stock photos & <br /> videos shared by talented creators.
        </h1>
        <v-text-field v-model="test" placeholder="Search for free photos" rounded solo>
        </v-text-field>
    </form>
</v-main>
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            test: ''
        }
    },
    methods: {
        send(event) {
            event.preventDefault();

            //redirect to the routing page 
            this.$router.push(`/search/${this.test}`);

            //reset the value
            this.test = '';
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');

img {
    width: 90rem;
    height: 25rem;
}

.form {
    position: relative;
    margin-top: -20rem;
    text-align: center;
}

.form h1 {
    color: white;
    font-size: 44px;
    font-family: 'Secular One', sans-serif;
}

.form .v-input {
    width: 500px;
    margin-left: 300px;
}
</style>
