<template>
<v-card class="mx-auto">
    <img :src="url" alt="image" />

    <v-card-title>
        <v-icon>{{ account }}</v-icon>
    </v-card-title>
    <v-card-subtitle>
        {{ one_image.photographer }}
    </v-card-subtitle>

    <v-card-subtitle>
        <a :href="photograph_url" target=" _blank">
            <v-icon>{{ accoun }}</v-icon> SEE ACCOUNT
        </a>
    </v-card-subtitle>
</v-card>
</template>

<script>
import {
    mdiCamera,
    mdiAccount
} from '@mdi/js';
export default {
    name: 'Card',
    props: ["one_image"],
    data: () => ({
        account: mdiCamera,
        accoun: mdiAccount,
        url: '',
        photograph_url: ''
    }),
    mounted() {
        this.url = this.one_image.src.portrait;
        this.photograph_url = this.one_image.photographer_url;
    }
}
</script>

<style scoped>
.mx-auto {
    margin-top: 90px;
    max-width: 40rem;
}

a {
    text-decoration: none;
    color: #757575;
    font-weight: bold;
}

.mx-auto img {
    width: 40rem;
}
</style>
