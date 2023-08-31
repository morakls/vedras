<template>
    <main class="main">
        <section class="main__hero">
            <div class="main__hero__wrap">
                <div class="main__hero__wrap__contact">
                    <h3>{{ $t('kontakt') }}</h3>
                    <a href="mailto: info@vedras.hr">info@vedras.hr</a>
                    <a href="tel: 385989608920">+385 98 9608 920</a>
                    <form>
                        <select class="main__hero__wrap__contact__lang" id="locale-select" v-model="$i18n.locale">
                            <option value="en">en</option>
                            <option value="hr">hr</option>
                        </select>
                    </form>
                </div>
                <div class="main__hero__wrap__content">
                    <img src="../assets/img/logo.svg" alt="Vedras">
                    <hr>
                    <h1>ON HOLD</h1>
                    <div class="main__hero__wrap__content__sm">
                        <a href="https://www.instagram.com/vedrasgroup/?hl=en">
                            <img src="../assets/img/icons/instagram.png" alt="In">
                        </a>
                        <a href="https://www.facebook.com/vedrasevents/">
                            <img src="../assets/img/icons/facebook.png" alt="Fb">
                        </a>
                        <a href="https://www.linkedin.com/company/42940956/">
                            <img src="../assets/img/icons/linkedin.png" alt="Ln">
                        </a>
                    </div>
                </div>
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
        <section class="main__a">
            <div class="main__a__left">
                <p>
                    {{ $t('main-a-prvi') }}   
                </p>
                <img src="../assets/img/uvd.png" alt="uvd robots" class="main__a__left__img--uvd">
                <img src="../assets/img/boston.png" alt="Boston Medical">
                <p class="main__a__left__smallText">
                    {{ $t('main-a-drugi') }} 
                </p>
            </div>
            <div class="main__a__right">
                <img src="../assets/img/tech.png" class="main__a__right__img" alt="img">
                <div class="main__a__right__absolute">
                    <p>{{ $t('main-a-treci') }}</p>
                </div>
            </div>
        </section>
        <section class="main__b">
            <div class="main__b__wrap">
                <div class="main__b__wrap__left">
                    <h3 class="main__b__wrap__left__heading">
                        {{ $t('main-b-prvi') }}
                    </h3>
                    <p class="main__b__wrap__left__text">
                        {{ $t('main-b-drugi') }}
                    </p>
                    <ul class="main__b__wrap__left__list">
                        <li class="main__b__wrap__left__list__item">
                            <span>
                                {{ $t('main-b-treci') }}
                            </span>
                        </li>
                        <li class="main__b__wrap__left__list__item">
                            <span>
                                {{ $t('main-b-cetvrti') }}
                            </span>
                        </li>
                        <li class="main__b__wrap__left__list__item">
                            <span>
                                {{ $t('main-b-peti') }}
                            </span>
                        </li>
                    </ul>
                    <p class="main__b__wrap__left__text--two">
                        Roboti konstruirani za čišćenje operacijskih sala i laboratorija, sada dezinficiraju vaše poslovne i
                        privatne prostore.
                    </p>
                    <a href="http://www.uvd-robots.com" class="main__b__wrap__left__link">
                        Više detalja o UVD Robots
                    </a>
                </div>
                <div class="main__b__wrap__right">
                    <img src="../assets/img/bolnica.png">
                </div>
            </div>
        </section>
        <section class="main__c">
            <div class="main__c__left">
                <img src="../assets/img/uvdtwo.jpg" class="main__c__left__img">
            </div>
            <div class="main__c__right">
                <h3 class="main__c__right__heading">
                    #covidfree
                </h3>
                <p class="main__c__right__text">
                    Primjenom Ultraljubičastog svjetla, (ultravioletnog, UV-c), UVD-robot uništava strukturu DNA u svim
                    mikroorganizmima.
                </p>
                <p class="main__c__right__text main__c__right__text--two">
                    Pružamo uslugu čišćenja velikih i malih prostora, uz pomoć robota, koji u najkraćem mogućem roku i
                    autonomno dezinficiraju zatvorene prostore gdje sigurnost
                    i “osjećaj čistoće” mora biti na prvom mjestu.
                </p>
            </div>
        </section>
        <section class="main__d">
            <div class="main__d__left">

            </div>
            <div class="main__d__right">
                <p class="main__d__right__text">
                    Želite vašim klijentima i zaposlenicima pružiti potpuno čist prostor? Kontaktirajte nas odmah, neka vaš
                    prostor bude #covidfree!
                </p>
            </div>
        </section>
        <section class="main__e">
            <div class="main__e__left">
                <h3 class="main__e__left__heading">
                    Naše tehničko osoblje spremno je u najkraćem mogućem roku izvršiti uslugu koja uključuje:
                </h3>
                <ul class="main__e__left__list">
                    <li class="main__e__left__list__item">
                        <span>dopremu UV-dezinfekcijskog robota</span>
                    </li>
                    <li class="main__e__left__list__item">
                        <span>mapiranje prostorija predviđenih za dezinfekciju</span>
                    </li>
                    <li class="main__e__left__list__item">
                        <span>kontrolu rada tijekom dezinfekcije</span>
                    </li>
                    <li class="main__e__left__list__item">
                        <span>otpremu UV-dezinfekcijskog robota</span>
                    </li>
                </ul>
                <a href="http://vedras.hr/download/Vedras_dezinfekcija_UVD_Robotima.pdf" class="main__e__left__download">
                    <button class="main__e__left__download__button">preuzmi brosuru</button>
                </a>
            </div>
            <div class="main__e__right"></div>
        </section>
        <section class="main__footer">
            <div class="main__footer__wrap">
                <p class="main__footer__wrap__heading">
                    Za više informacija pišite nam na mail:
                </p>
                <div class="main__footer__wrap__bottom">
                    <a class="main__footer__wrap__bottom__link" href="mailto:info@vedras.hr">info@vedras.hr</a>
                    <span>Ili nazovite broj</span>
                    <a class="main__footer__wrap__bottom__link" href="tel:385989608920">+385 98 9608 920</a>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>

</script>

<style scoped>
.main {
    width: 100%;
}

select {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    font-family: inherit;
    background-color: none;
}

select option:hover {
    color: #000;
}

.main__hero {
    background-image: url('../assets/img/hero.jpg');
    background-size: cover;
    height: 347px;
    background-position-x: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main__hero__wrap {
    flex: 1;
    padding-left: 10vw;
    padding-right: 10vw;
    height: 100%;
    position: relative;
}

.main__hero__wrap__contact {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-left: 10vw;
    margin-right: 10vw;
    gap: 10px;
}

.main__hero__wrap__contact h3 {
    font-weight: 700;
    color: #fff;
    line-height: 32px;
    font-size: 16px;
    letter-spacing: -.29px;
}

.main__hero__wrap__contact a {
    text-decoration: none;
    color: #fff;
    line-height: 32px;
    font-size: 16px;
    letter-spacing: -.29px;
}

.main__hero__wrap__contact a:hover {
    text-decoration: underline;
    color: #d8d2d2;
}

.main__hero__wrap__contact__lang {
    padding-left: 40px;
    font-weight: 700;
    background-color: none;
    outline: none;
    background: transparent;
    border: none;
    color: #fff;
}

.main__hero__wrap__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom: 24px;
}

.main__hero__wrap__content svg {
    max-width: 100%;
    height: auto;
}

.main__hero__wrap__content hr {
    height: 1px;
    width: 437px;
    border: 1px solid #fff;
    margin: 30px 0;
}

.main__hero__wrap__content h1 {
    line-height: 48px;
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -.64px;
}

.main__hero__wrap__content__sm {
    padding-top: 10px;
    display: flex;
    gap: 13px;
}

.main__hero__wrap__content__sm a>img {
    width: 20px;
}

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
    color: #dadada;
}

.main__a {
    padding: 80px 13.125vw;
    display: flex;
    justify-content: space-between;
}

.main__a__left {
    width: 50%;
    transition: all .15s ease;
    opacity: 1;
    transform: translateY(0);
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.main__a__left p {
    color: #5c5c5c;
    font-size: 16px;
    letter-spacing: -.29px;
    line-height: 1.5;
}

.main__a__left__img--uvd {
    width: 302.42px;
    height: 161px;
    cursor: crosshair;
    max-width: 100%;
}

.main__a__left img:last-of-type {
    height: 64px;
    width: 366.81px;
    max-width: 100%;
}

.main__a__left__smallText {
    width: 342px;
}

.main__a__right {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main__a__right__img {
    z-index: 334;
    position: relative;
    margin-top: -50px;
    max-width: 100%;
    height: auto;
}

.main__a__right__absolute {
    width: 336px;
    height: 176px;
    background-color: #027fc1;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -.43px;
    line-height: 36px;
    position: absolute;
    padding: 30px;
    bottom: -30px;
    left: 30px;
    z-index: 333;
    text-transform: uppercase;
}

.main__a__right__absolute p {
    margin-top: 20px;
}

.main__b {
    background-color: #027fc1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 80px 13.125vw;
    padding-right: 0px;
}

.main__b__wrap {
    display: flex;
    gap: 95px;
    flex: 1;
    align-items: center;
}

.main__b__wrap__left {
    width: 40%;
    padding-right: 80px;
}

.main__b__wrap__right {
    height: 574px;
}

.main__b__wrap__right img {
    margin-right: 80px;
    height: 574px;
    width: 42.96vw;
    transition: all .5s;
    object-fit: cover;
}

.main__b__wrap__left__heading {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    line-height: 48px;
    padding-bottom: 30px;
}

.main__b__wrap__left__text {
    color: #fff;
    font-size: 16px;
    letter-spacing: -.29px;
    line-height: 32px;
}

.main__b__wrap__left__list {
    padding-left: 20px;
}

.main__b__wrap__left__list__item {
    font-weight: 700;
    color: #fff;
    font-size: 16px;
    letter-spacing: -.29px;
    line-height: 32px;
    transition: all .3s;
}

.main__b__wrap__left__text--two {
    color: #fff;
    font-size: 16px;
    letter-spacing: -.29px;
    line-height: 32px;
    padding: 30px 0px;
}

.main__b__wrap__left__link {
    font-weight: 700;
    color: #fff;
    font-size: 16px;
    letter-spacing: -.29px;
    line-height: 32px;
    transition: all .3s;
    text-decoration: none;
}

.main__b__wrap__left__link:hover {
    text-decoration: underline;
    color: #d8d2d2;
}

.main__c {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 160px 13.125vw;
    gap: 20px;
}

.main__c__left {
    height: 464px;
    width: 50%;
    transition: all 1s cubic-bezier(.36, .69, .3, .64);
}

.main__c__left img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
}

.main__c__right {
    width: 50%;
    height: 464px;
    box-shadow: 0 2px 32px 0 rgba(0, 0, 0, .14);
    padding: 50px 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.main__c__right__heading {
    color: #5c5c5c;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -.64px;
    line-height: 48px;
}

.main__c__right__text {
    padding: 30px 0px;
    color: #5c5c5c;
    font-family: Titillium Web, sans-serif;
    font-size: 16px;
    letter-spacing: -.29px;
}

.main__c__right__text--two {
    padding: 0px;
}

.main__d {
    display: flex;
}

.main__d__left {
    background-image: url('../assets/img/slika.jpg');
    height: 631px;
    width: 50%;
    background-size: cover;
}

.main__d__right {
    width: 50%;
    background-color: #027fc1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    flex-direction: column;
}

.main__d__right__text {
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -.64px;
    line-height: 55px;
    color: #fff;
    padding: 0px 50px;
}

.main__e {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 120px 13.125vw;
}

.main__e__left {
    box-shadow: 0 2px 32px 0 rgba(0, 0, 0, .14);
    width: 39vw;
    height: 64.26vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 50px;
}

.main__e__left__heading {
    color: #5c5c5c;
    font-size: 36px;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: -.64px;
}

.main__e__left__list {
    padding-left: 20px;
    padding-top: 30px;
    padding-bottom: 50px;
}

.main__e__left__list__item span {
    color: #5c5c5c;
    font-size: 16px;
    letter-spacing: -.29px;
}

.main__e__left__download {
    width: max-content;
    text-decoration: none;
}

.main__e__left__download__button {
    height: 57px;
    width: 216px;
    background-color: #027fc1;
    color: #fff;
    font-size: 16px;
    letter-spacing: -.29px;
    line-height: 36px;
    cursor: pointer;
    transition: all .15s ease-in-out;
    outline: none;
    border: none;
    text-transform: uppercase;
}

.main__e__left__download__button:hover {
    border: 1px solid #027fc1;
    color: #027fc1;
    background: #fff;
}

.main__e__right {
    background-image: url('../assets/img/slikadva.jpg');
    background-size: cover;
    height: 64.26vh;
    width: 30.21vw;
}

.main__footer {
    background-color: #027fc1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 13.125vw;
}

.main__footer__wrap {
    display: flex;
    flex-direction: column;
}

.main__footer__wrap__heading {
    color: #fff;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
}

.main__footer__wrap__bottom__link {
    color: #fff;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    font-weight: 700;
    transition: all 1s cubic-bezier(.36, .69, .3, .64);
    letter-spacing: -.29px;
    text-decoration: none;
}

.main__footer__wrap__bottom__link:hover {
    text-decoration: underline;
    color: #d8d2d2;
}

.main__footer__wrap__bottom span {
    color: #fff;
    font-size: 36px;
    line-height: 48px;
    text-align: center;
    transition: all 1s cubic-bezier(.36, .69, .3, .64);
    padding: 0px 10px;
}

@media screen and (max-width: 1679px) {
    .main__a {
        padding: 80px 10vw;
    }

    .main__b {
        padding: 80px 10vw;
        padding-right: 80px;
    }

    .main__c {
        padding: 160px 10vw;
    }

    .main__b__wrap {
        gap: 76px;
    }

    .main__b__wrap__right {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex: 1;
    }

    .main__b__wrap__right img {
        margin-right: 0px;
    }

    .main__e {
        padding-left: 10vw;
        padding-right: 10vw;
    }
}

@media screen and (max-width: 1540px) {
    .main__d__left {
        background-position-x: 100%;
    }
}

@media screen and (max-width: 1340px) {
    .main__a__right {
        flex: 1;
    }

    .main__a__right__absolute {
        bottom: 30px;
        left: 24px;
    }
}

@media screen and (max-width: 1160px) {
    .main__a__right__absolute {
        left: 10px;
        bottom: 40px;
    }

    .main__a__right__img {
        width: 100%;
        margin-bottom: -30px;
    }
}

@media screen and (max-width: 1065px) {

    .main__b,
    .main__b__wrap {
        flex-direction: column;
    }

    .main__b__wrap {
        gap: 50px;
    }

    .main__b__wrap__left {
        width: 100%;
        padding-right: 0px;
    }

    .main__b__wrap__right {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
    }


    .main__b__wrap__right img {
        width: 100%;
        margin: 0px;
        height: 36.2vh;
        min-height: 300px;
    }
}

@media screen and (max-width: 1010px) {
    .main__d {
        flex-direction: column-reverse;
    }

    .main__d__left {
        width: 100%;
        height: 55vh;
        min-height: 300px;
    }

    .main__d__right {
        width: 100%;
    }

    .main__e {
        flex-direction: column;
    }

    .main__e__left {
        width: 100%;
        height: auto;
        margin-bottom: 50px;
        margin-right: 0px;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .main__e__right {
        width: 50%;
    }
}

@media screen and (max-width: 1000px) {
    .main__c {
        flex-direction: column-reverse;
        gap: 50px;
    }

    .main__c__right {
        width: 100%;
        height: auto;
    }

    .main__c__left {
        width: 100%;
        height: auto;
    }

    .main__c__left img {
        width: 100%;
        height: 42.96vh;
        min-height: 300px;
        background-position-y: 100%;
    }
}

@media screen and (max-width: 960px) {
    .main__a {
        flex-direction: column;
        align-items: center;
    }

    .main__a__left {
        width: 100%;
    }

    .main__a__left__smallText {
        width: 100%;
    }

    .main__a__right__img {
        margin-bottom: -60px;
    }

    .main__a__right {
        margin-top: 80px;
        align-items: flex-start;
        flex-direction: column;
    }

    .main__a__right__absolute {
        position: unset;
    }
}

@media screen and (max-width: 855px) {
    .main__footer__wrap__bottom {
        display: flex;
        flex-direction: column;
    }
}

@media screen and (max-width: 700px) {
    .main__hero__wrap {
        padding: 0px 20px;
    }

    .main__hero__wrap__contact {
        margin: 0px 20px;
    }

    .main__hero__wrap__content {
        padding-top: 28px;
        padding-bottom: 0px;
    }

    .main__hero__wrap__content hr {
        width: 90%;
    }

    .main__a {
        padding: 30px 20px;
    }

    .main__b {
        padding: 80px 20px;
    }

    .main__b__wrap__left__heading {
        font-size: 25px;
    }

    .main__b__wrap__left__text,
    .main__b__wrap__left__link {
        line-height: 25px;
    }

    .main__c {
        padding: 160px 20px;
    }

    .main__d__right__text {
        font-size: 25px;
        padding-left: 0;
        padding-right: 0;
        line-height: 32px;
    }

    .main__e {
        padding-left: 20px;
        padding-right: 20px;
    }

    .main__e__left {
        padding-left: 20px;
        padding-right: 20px;
    }

    .main__e__left__heading {
        font-size: 25px;
        line-height: 32px;
    }

    .main__e__right {
        width: 100%;
        background-position-x: 50%;
    }

    .main__footer {
        padding-right: 20px;
        padding-left: 20px;
    }

    .main__footer__wrap {
        flex: 1;
    }

    .main__footer__wrap__heading {
        font-size: 25px;
        line-height: 32px;
    }

    .main__footer__wrap__bottom__link {
        font-size: 25px;
        line-height: 32px;
    }

    .main__footer__wrap__bottom span {
        font-size: 25px;
        line-height: 32px;
    }
}

@media screen and (max-width: 600px) {
    .main__hero__wrap__contact h3 {
        display: none;
    }

    .main__hero__wrap__contact__lang {
        padding-left: 20px;
    }


    .main__c__right {
        padding: 50px 20px;
    }

    .main__c {
        padding: 50px 20px;
    }

    .main__b {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .main__e {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .main__footer {
        padding-top: 40px;
        padding-bottom: 40px;
    }
}

@media screen and (max-width: 400px) {
    .main__hero__wrap__contact a {
        font-size: 13px;
    }

    .main__hero__wrap__contact__lang {
        font-size: 16px !important;
    }

    .main__a__right__absolute {
        width: 100%;
    }
}
</style>
