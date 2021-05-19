<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item" active-class="is-active">
        EICHGI
      </nuxt-link>
      <div :class="[menuVisible ? 'is-active' : '', 'navbar-burger', 'burger']" data-target="navMenuColordark-example"
           @click="burguerMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuColordark-example" :class="[menuVisible ? 'is-active' : '', 'navbar-menu']">
      <div class="navbar-start"></div>

      <div class="navbar-end">
<!--        <nuxt-link to="/blog" class="navbar-item" active-class="is-active">
          <i class="fa fa-rss"></i> &nbsp;
          Blog
        </nuxt-link>-->
        <nuxt-link to="/portfolio" class="navbar-item" active-class="is-active">
          <i class="fa fa-code"></i> &nbsp;
          Portfolio
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "navbar",
    created() {

    },
    data() {
      return {
        menuVisible: false,
      }
    },
    methods: {
      burguerMenu() {
        this.menuVisible = !this.menuVisible;
      }
    }
  }
</script>

<style scoped>

</style>
