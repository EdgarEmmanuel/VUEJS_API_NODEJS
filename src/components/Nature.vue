<template>
<v-main>
    <div v-for="da in DONEES" v-bind:key="da.id">
        <Card v-bind:key="da.id" v-bind:one_image="da" /><br />
    </div>
</v-main>
</template>

<script>
import instance from '../service/http';
import Card from '../components/Card';
export default {
    name: "Nature",
    components: {
        Card
    },
    data() {
        return {
            DONEES: null
        }
    },
    methods: {
        async getDataPinkNature() {
            return await
            instance.get("https://api.pexels.com/v1/search?query=pink&query=rose&per_page=100");
        }
    },
    mounted() {
        this.getDataPinkNature().then((data) => {
            this.DONEES = data.data.photos;
        })
    }
}
</script>

<style scoped>

</style>
