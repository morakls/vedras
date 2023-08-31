<template>
    <main class="main">
        <section class="main__nav">
            <nav class="main__nav__wrap">
                <ul class="main__nav__wrap__ul">
                    <li class="main__nav__wrap__ul__li"><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="main__nav__wrap__ul__li"><NuxtLink to="/about">About</NuxtLink></li>
                    <li class="main__nav__wrap__ul__li"><NuxtLink to="/user">User</NuxtLink></li>
                </ul>
            </nav>
        </section>
    </main>
</template>

<script setup>

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
    color: #5c5c5c;
}

.main__nav__wrap__ul__li:hover a {
    color: #353535;
}
</style>