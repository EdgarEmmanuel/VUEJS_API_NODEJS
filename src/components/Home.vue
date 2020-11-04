<template>
<v-main>
    <div class="color" v-for="data in DATA" v-bind:key="data.id">
        <Card v-bind:key="data.id" v-bind:one_image="data" /><br />
    </div>
</v-main>
</template>

<script>
import instance from '../service/http';
import Card from './Card';
export default {
    name: "Home",
    components: {
        Card
    },
    data() {
        return {
            DATA: null
        }
    },
    methods: {
        async getDAta() {
            return await instance.get("http://localhost:3000/flower_pink");
        },

    },
    mounted() {
        this.getDAta().then((data) => {
            this.DATA = data.data;
        });
    }
}
</script>

<style scoped>

</style>
