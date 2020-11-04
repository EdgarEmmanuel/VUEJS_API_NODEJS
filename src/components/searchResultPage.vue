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
    name: "searchPage",
    props: [""],
    components: {
        Card
    },
    data() {
        return {
            recherche: '',
            DATA: null
        }
    },
    methods: {
        async getData(data) {
            //this.$router.go(0)
            return await instance.get(`https://api.pexels.com/v1/search?${data}&per_page=100`);
            //this.$router.go(this.$router.currentRoute)
        }
    },
    mounted() {
        //transform the params of the route into an array for the query
        var arr = this.$route.params.id.split(" ");

        //show the data
        arr.forEach((value, index) => {
            this.recherche += "query=" + value
            if ((index < arr.length - 1)) {
                this.recherche += "&";
            }
        });

        //fetch the data form the api
        this.getData(this.recherche).then((data) => {
            this.DATA = data.data.photos;
        });

        //reload the page 
        //this.$router.go(0)
    }
}
</script>

<style scoped>

</style>
