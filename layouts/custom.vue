<template>
  <div id="main-container">
    <navbar></navbar>
    <div class="container">
      <section class="section">
        <div class="columns">
          <!--<div :class="[path != '/' ? 'is-hidden-touch' : '', 'column is-3 has-text-centered border-right']">
            <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="es_ES" data-type="vertical"
                 data-theme="dark" data-vanity="hiram-guerrero" style="padding: 0.75rem; width: 100% !important;">
              <a class="LI-simple-link" href='https://mx.linkedin.com/in/hiram-guerrero?trk=profile-badge'>Hiram
                Guerrero</a>
            </div>
          </div>-->
          <div :class="[path != '/' ? 'is-hidden-touch' : '', 'column is-3 has-text-centered border-right']">
            <div class="image">
              <img src="~/assets/images/me.jpg">
            </div>
            <h1 class="title" style="margin-top: 1em">
              Hiram Guerrero
            </h1>
            <a href="https://github.com/eichgi" target="_blank" class="button is-dark">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/hiram-guerrero/" target="_blank"
               class="button is-dark linked-in-button">
              <span class="icon">
                <i class="fa fa-linkedin-square"></i>
              </span>
              <span>LinkedIn</span>
            </a>
            <nuxt-link to="/contact" class="button is-dark message-button">
              <span class="icon">
                <i class="fa fa-envelope"></i>
              </span>
              <span>Contact</span>
            </nuxt-link>
          </div>
          <nuxt/>
        </div>
      </section>
    </div>
    <custom-footer></custom-footer>
  </div>
</template>
<script>
  import navbar from '~/components/navigation/navbar'
  import footer from '~/components/navigation/footer'

  export default {
    created() {
      console.log(this.$route.path);
    },
    components: {
      navbar,
      'custom-footer': footer,
    },
    computed: {
      path: function () {
        return this.$route.path;
      },
    }
  }
</script>
<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    max-width: 1440px;
    margin: 0 auto;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .image img {
    width: 40%;
    margin: 0 auto;
  }

  .border-right {
    border-right: 1px solid #DDD;
  }

  .red-color {
    color: #D91E18;
  }

  ul {
    margin: 0;
  }

  li {
    border-bottom: 1px solid #DDD;
  }

  li:last-child {
    border-bottom: none;
  }

  li a:hover,
  li a:focus {
    color: #D91E18;
  }

  section {
    padding: 12px !important;
  }

  .horizontal-space {
    width: 10px;
  }

  .button {
    margin-right: 1em;
    margin-bottom: 1em;
  }

  .linked-in-button,
  .linked-in-button:hover {
    background: #0077B5 !important;
  }

  .message-button,
  .message-button:hover {
    background: #D91E18 !important;
  }

  @media screen and (min-width: 1024px) {
    .button {
      width: 100%;
    }

    .image img {
      width: 40%;
    }

    .horizontal-space {
      display: none;
    }
  }
</style>
