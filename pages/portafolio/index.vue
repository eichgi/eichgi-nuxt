<template>
  <div class="column is-9">
    <div class="columns">
      <div class="column is-half">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              A que le muevo?
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fa fa-wrench" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              Soy desarrollador Full Stack y me gusta participar en proyectos multiplataforma. Tengo experiencia en:
              <ul>
                <li>Creación de interfaces</li>
                <li>Diseño y creación de bases de datos</li>
                <li>Construcción e integración de APIs propias y de terceros</li>
                <li>Creación, despliegue y administración de entornos de desarrollo y producción</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-half">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Principales herramientas de trabajo
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="columns">
      <div class="column is-12">
        <p class="subtitle">Side Projects</p>
        <p>Estos son algunos proyectos personales que he lanzado y/o colaborado, de los cuáles he aprendido mucho.</p>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <img src="/proyectos/sx-1.png" alt="" width="100%" @click="goProject('simplex')">
          </swiper-slide>
          <swiper-slide>
            <img src="/proyectos/devjournal-1.png" alt="" width="100%" @click="goProject('devjournal')">
          </swiper-slide>
          <swiper-slide>
            <img src="/proyectos/rovix.png" alt="" width="100%" @click="goProject('rovix')">
          </swiper-slide>
          <swiper-slide>
            <img src="/proyectos/alemanisch.jpg" alt="" width="100%" @click="goProject('alemanisch')">
          </swiper-slide>
          <swiper-slide>
            <img src="/proyectos/la-logo.png" alt="" width="100%" @click="goProject('legion-anime')">
          </swiper-slide>
          <swiper-slide>
            <img src="/proyectos/comunidad.jpg" alt="" width="100%" @click="goProject('comunidad')">
          </swiper-slide>
          <swiper-slide>
            <img src="/proyectos/eichgi.png" alt="" width="100%" @click="goProject('eichgi')">
          </swiper-slide>
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
    name: 'portafolio',
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
        this.$router.push(`/portafolio/${id}`);
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
