<template>
  <div class="column is-9">
    <div class="columns">
      <div class="column is-half">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              What do I do?
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fa fa-wrench" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              I am a Full stack dev and Devops learner. I have experience with:
              <ul>
                <li>Implementation of UI/UX</li>
                <li>Database design and modeling</li>
                <li>API construction and integration</li>
                <li>Management and deployment of staging and production environments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-half">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Main work tools
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fa fa-wrench" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="columns">
                <div class="column is-third">
                  <img class="image is-96x96" src="@/assets/images/logos/laravel.png" alt="Laravel">
                </div>
                <div class="column is-third">
                  <img class="image is-96x96" src="@/assets/images/logos/vue.png" alt="Vue">
                </div>
                <div class="column is-third">
                  <img class="image is-96x96" src="@/assets/images/logos/react.png" alt="React">
                </div>
              </div>
              <div class="columns">
                <div class="column is-third">
                  <img class="image is-96x96" src="@/assets/images/logos/cloud.png" alt="Cloud">
                </div>
              </div>
            </div>
            <!--<div class="content">
              <div class="columns">
                <div class="column is-half">
                  <img class="image" src="@/assets/images/logos/lamp.png" alt="Lamp">
                </div>
                <div class="column is-half">
                  <img class="image is-96x96" src="@/assets/images/logos/laravel.png" alt="Laravel">
                </div>
              </div>
              <div class="columns">
                <div class="column is-half">
                  <img class="image is-96x96" src="@/assets/images/logos/vue.png" alt="Vue">
                </div>
                <div class="column is-half">
                  <img class="image is-96x96" src="@/assets/images/logos/android_studio.png" alt="Android Studio">
                </div>
              </div>
            </div>-->
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="columns">
      <div class="column is-12">
        <p class="subtitle">Side Projects</p>
        <p>These are some personal projects I have launched or collaborated:</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <!--<swiper-slide>
            <img src="/proyectos/sx-1.png" alt="" width="100%" @click="goProject('simplex')">
          </swiper-slide>-->
          <swiper-slide>
            <img src="/proyectos/devjournal-1.png" alt="" width="100%" @click="goProject('devjournal')">
          </swiper-slide>
          <!--<swiper-slide>
            <img src="/proyectos/rovix.png" alt="" width="100%" @click="goProject('rovix')">
          </swiper-slide>
          <swiper-slide>
            <img src="/proyectos/alemanisch.jpg" alt="" width="100%" @click="goProject('alemanisch')">
          </swiper-slide>-->
          <swiper-slide>
            <img src="/proyectos/la-logo.png" alt="" width="100%" @click="goProject('legion-anime')">
          </swiper-slide>
          <swiper-slide>
            <img src="/proyectos/comunidad.jpg" alt="" width="100%" @click="goProject('comunidad')">
          </swiper-slide>
          <!--<swiper-slide>
            <img src="/proyectos/eichgi.png" alt="" width="100%" @click="goProject('eichgi')">
          </swiper-slide>-->
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
  name: 'portfolio',
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 5000,
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  layout: 'custom',
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    goProject(id) {
      this.$router.push(`/portfolio/${id}`);
    }
  }
}
</script>

<style scoped>

.image {
  margin: 0 auto;
}

ul {
  list-style: none;
  padding: 0;
  margin-left: 0;
}

li {
  padding-left: 1.3em;
  border-bottom: none;
}

li:before {
  content: "\f105";
  font-family: 'FontAwesome';
  font-weight: bold;
  display: inline-block;
  margin-left: -1.3em;
  width: 1.3em;
}
</style>
