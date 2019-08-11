<template>
  <div class="column is-9">
    <p class="title has-text-centered">{{project.title}}</p>
    <p>{{project.description}}</p>
    <br>
    <p class="subtitle">Screenshots</p>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(image, index) in project.images">
        <img :src="image" width="100%">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <p class="subtitle">Herramientas</p>
    <p v-html="project.tools"><!--{{project.tools}}--></p>
  </div>
</template>

<script>
  import projects from '~/assets/projects/projects.json'

  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    //name: "_id",
    layout: 'custom',
    created() {
      let id = this.$route.params.id;
      this.getProject(id);
    },
    data() {
      return {
        project: {},
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
    components: {
      swiper,
      swiperSlide
    },
    methods: {
      getProject(id) {
        this.project = projects[id];
        console.log(this.project.images);
      }
    }
  }
</script>

<style scoped>

</style>
