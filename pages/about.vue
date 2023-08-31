<template>
    <main class="main">
        <section class="main__hero">
            <div class="main__hero__wrap">
                <img src="../assets/img/logo.svg">
                <h2 class="main__hero__wrap__title">
                    O nama
                </h2>
                <p class="main__hero__wrap__text">
                    Vec 20 godina sa Vama a evo i zasto!
                </p>
            </div>
        </section>
        <section class="main__nav">
            <nav class="main__nav__wrap">
                <ul class="main__nav__wrap__ul">
                    <li class="main__nav__wrap__ul__li"><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="main__nav__wrap__ul__li"><NuxtLink to="/about">About</NuxtLink></li>
                    <li class="main__nav__wrap__ul__li"><NuxtLink to="/user">User</NuxtLink></li>
                </ul>
            </nav>
        </section>
        <section class="main__content">

        </section>
    </main>
</template>

<script setup>

</script>

<style scoped>


.main__nav {
    width: 100%;
    height: 40px;
    background-color: #027fc1;
}

.main__nav__wrap {
    height: 100%;
}

.main__nav__wrap__ul{
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
    color: #d1d1d1;
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
    background-image: url('../assets/img/o-nama.jpg');
    background-size: cover;
    background-position-y: -100%;
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
    color:#fff;
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

@media screen and (max-width: 1345px) {
    .main__hero::before {
        background-position-y: 50%;
    }
}
</style>