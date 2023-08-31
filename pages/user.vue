<template>
    <main class="main">
        <section class="main__hero">
            <div class="main__hero__wrap">
                <img src="../assets/img/logo.svg">
                <h2 class="main__hero__wrap__title">
                    Users
                </h2>
                <p class="main__hero__wrap__text">
                    Ovo je nas tim lorem ipsum sans dalet
                </p>
            </div>
        </section>
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
        <div class="main__hidden" v-if="loading">
            <div class="main__hidden__center">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
        </div>
        <div class="main__content" v-else>
            <div class="main__content__wrap">
                <NuxtLink ref="postContainer" class="main__content__wrap__link" v-for="user in users" :key="user.id"
                    :to="`/user/${user.id}`">
                    <div>
                        <img :src="user.picture" alt="User Picture" class="main__content__wrap__link__img">
                        <div class="main__content__wrap__link__textWrap">
                            <p class="main__content__wrap__link__textWrap__text">{{ user.firstName }} {{ user.lastName }}
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <section class="main__addUser">
            <div class="main__addUser__wrap">
                <form @submit.prevent="addNewUser" class="main__addUser__wrap__form">
                    <label class="main__addUser__wrap__form__firstNameLabel" for="newFirstName">First Name:</label>
                    <input class="main__addUser__wrap__form__firstNameInput" type="text" id="newFirstName" v-model="newFirstName" required><br>
                    <label class="main__addUser__wrap__form__lastNameLabel" for="newLastName">Last Name:</label>
                    <input class="main__addUser__wrap__form__lastNameInput" type="text" id="newLastName" v-model="newLastName" required><br>
                    <label class="main__addUser__wrap__form__imgLabel" for="newImage">Image URL:</label>
                    <input class="main__addUser__wrap__form__imgInput" type="text" id="newImage" v-model="newImage" required><br>
                    <button class="main__addUser__wrap__form__submit" type="submit">Add User</button>
                </form>
            </div>
        </section>
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

let newFirstName = ref('');
let newLastName = ref('');
let newImage = ref('');

let addNewUser = () => {
    let newUser = {
        id: Date.now(),
        firstName: newFirstName.value,
        lastName: newLastName.value,
        picture: newImage.value
    };
    users.value.push(newUser);

    newFirstName.value = '';
    newLastName.value = '';
    newImage.value = '';
};

</script>

<style scoped>
@keyframes wave {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}

.main__hero {
    position: relative;
    height: 347px;
    width: 100%;
    padding: 20px 10vh;
    background-color: rgba(2, 127, 193, 0.4);
}

.main__hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/team-min.jpg');
    background-size: cover;
    background-position-y: -105%;
    filter: blur(2px);
    opacity: 0.8;
    z-index: -1;
}

.main__hero__wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    width: 100%;
}

.main__hero__wrap__text {
    color: #fff;
    font-size: 24px;
}

.main__hero__wrap img {
    margin-top: -45px;
}

.main__hero__wrap__title {
    color: #fff;
    font-weight: bold;
    font-size: 32px;
    text-transform: uppercase;
}

.main__nav {
    width: 100%;
    height: 40px;
    background-color: #027fc1;
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
    color: #fff;
}

.main__nav__wrap__ul__li:hover a {
    color: #dadada;
}

.main__hidden {
    width: 100%;
    height: 100vh;
    background-color: #fff;
    position: absolute;
    color: #fff;
    font-weight: bold;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    font-size: 48px;
}

.main__hidden__center {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wave {
    width: 5px;
    height: 100px;
    background: linear-gradient(45deg, #027fc1, #1b1b1b);
    margin: 10px;
    animation: wave 1s linear infinite;
    border-radius: 20px;
}

.wave:nth-child(2) {
    animation-delay: 0.1s;
}

.wave:nth-child(3) {
    animation-delay: 0.2s;
}

.wave:nth-child(4) {
    animation-delay: 0.3s;
}

.wave:nth-child(5) {
    animation-delay: 0.4s;
}

.wave:nth-child(6) {
    animation-delay: 0.5s;
}

.wave:nth-child(7) {
    animation-delay: 0.6s;
}

.wave:nth-child(8) {
    animation-delay: 0.7s;
}

.wave:nth-child(9) {
    animation-delay: 0.8s;
}

.wave:nth-child(10) {
    animation-delay: 0.9s;
}

.main__content {
    display: flex;
    align-items: center;
    margin: 30px auto;
    max-width: 1400px;
    padding: 60px 10vh;
}

.main__content__wrap {
    display: flex;
    flex-wrap: wrap;
    max-width: 1400px;
    width: 100%;
    box-sizing: border-box;
    gap: 30px;
    justify-content: center;
}

.main__content__wrap__link {
    display: flex;
    width: 160px;
    border-radius: 3px;
    padding: 16px 12px;
    flex-direction: column;
    box-shadow: 0 2px 32px 0 rgba(0, 0, 0, .14);
    transition: all .3s ease;
    text-decoration: none;
}

.main__content__wrap__link:hover {
    transform: scale(1.2);
}

.main__content__wrap__link__img {
    width: 100%;
    border-radius: 3px;
}

.main__content__wrap__link__textWrap {
    display: flex;
    align-items: center;
}

.main__content__wrap__link__textWrap__text {
    color: #5c5c5c;
    text-decoration: none;
}

.main__addUser {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 10vh;
}

.main__addUser__wrap {
    max-width: 800px;
    height: auto;
}

.main__addUser__wrap__form {
    padding: 20px 40px;
    border-radius: 6px;
    box-shadow: 0 2px 32px 0 rgba(0, 0, 0, .14);
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.main__addUser__wrap__form__submit {
    outline: 1px solid #027fc1;
    border: none;
    border-radius: 3px;
    background-color: #fff;
    transition: all .2s ease-in-out;
    cursor: pointer;
    padding: 4px 8px;
}

.main__addUser__wrap__form__submit:hover {
    background-color: #027fc1;
    color: #fff;
}

@media screen and (max-width: 1345px) {
    .main__hero::before {

        background-position-y: 25%;

    }
}

@media screen and (max-width: 910px) {
    .main__content {
        padding: 60px 3vh;
    }
}

@media screen and (max-width: 560px) {
    .main__hero__wrap__text {
        text-align: center;
        font-size: 18px;
    }
}

@media screen and (max-width: 405px) {
    .main__content {
        padding: 60px 20px;
    }

    .main__content__wrap__link {
        width: 220px;
    }
}</style>