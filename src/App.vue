<template>
<v-app>
    <navbar />
    <Form />
    <router-view></router-view>
</v-app>
</template>

<script>
import navbar from './components/navbar';
import Form from './components/Form.vue';
export default {
    name: 'App',

    components: {
        navbar,
        Form
    },
    data: () => ({
        //
    }),
};
</script>
