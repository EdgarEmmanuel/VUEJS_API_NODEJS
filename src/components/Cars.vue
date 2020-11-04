<template>
<v-main>
    <div v-for="da in DATA" v-bind:key="da.id">
        <Card v-bind:key="da.id" v-bind:one_image="da" /><br />
    </div>
</v-main>
</template>

<script>
import instance from '../service/http';
import Card from './Card';
export default {
    name: "Cars",
    components: {
        Card
    },
    data() {
        return {
            DATA: []
        }
    },
    methods: {
        async test() {
            return await instance.get("https://api.pexels.com/v1/search?query=car&per_page=100");
        }
    },
    mounted() {
        this.test().
        then((data) => {
            this.DATA = data.data.photos;
        });
    },
}
</script>

<style scoped>

</style>
