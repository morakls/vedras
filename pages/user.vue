<template>
    <main class="main">
        <section class="main__hero">USERS</section>
        <section class="main__nav">
            <nav class="main__nav__wrap">
                <ul class="main__nav__wrap__ul">
                    <li class="main__nav__wrap__ul__li">
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li class="main__nav__wrap__ul__li">
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li class="main__nav__wrap__ul__li">
                        <NuxtLink to="/user">User</NuxtLink>
                    </li>
                </ul>
            </nav>
        </section>
        <div class="main__hidden" v-if="loading">Loading...</div>
        <div class="main__content" v-else>
            <div>
                <NuxtLink v-for="user in users" :key="user.id" :to="`/user/${user.id}`">
                    <img :src="user.picture" alt="User Picture">
                    <p>{{ user.firstName }} {{ user.lastName }}</p>
                </NuxtLink>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const loading = ref(true);
const users = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get('https://dummyapi.io/data/v1/user', {
            headers: {
                'app-id': '64ef8bdaba44d5734fe97bb5'
            }
        });

        users.value = response.data.data;
        loading.value = false;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

</script>

<style scoped>
.main__nav {
    width: 100%;
    height: 40px;
    background-color: #f3f3f3;
}

.main__nav__wrap {
    height: 100%;
}

.main__nav__wrap__ul {
    display: flex;
    list-style: none;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.main__nav__wrap__ul__li a {
    text-decoration: none;
    vertical-align: middle;
    height: 100%;
    color: #5c5c5c;
}

.main__nav__wrap__ul__li:hover a {
    color: #353535;
}
</style>