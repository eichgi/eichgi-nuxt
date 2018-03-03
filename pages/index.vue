<template>
  <div id="app">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo-white.png" alt="Bulma: a modern CSS framework based on Flexbox"
               width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navMenuColordark-example">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenuColordark-example" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/documentation/overview/start/">
              Docs
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" href="/documentation/overview/start/">
                Overview
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                Modifiers
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Columns
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Layout
              </a>
              <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
                Form
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="https://bulma.io/documentation/elements/box/">
                Elements
              </a>
              <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                Components
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet"
                   data-social-target="http://localhost:4000" target="_blank"
                   href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span class="icon">
                <svg class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" data-fa-processed="" data-prefix="fab"
                     data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                <!-- <i class="fab fa-twitter"></i> -->
              </span>
                  <span>
                Tweet
              </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
              <span class="icon">
                <svg class="svg-inline--fa fa-download fa-w-16" aria-hidden="true" data-fa-processed=""
                     data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512"><path fill="currentColor"
                                                 d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>
                <!-- <i class="fas fa-download"></i> -->
              </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="section">
        <div class="columns">
          <div class="column is-3 has-text-centered border-right">
            <div class="image">
              <img src="~/assets/images/me.jpg">
            </div>
            <h1 class="title" style="margin-top: 1em">
              Hiram Guerrero
            </h1>
            <!--<h2 class="subtitle">
              Desarrollador de Software
            </h2>-->
            <a href="https://github.com/eichgi" target="_blank" class="button is-dark is-fullwidth">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/hiram-guerrero/" target="_blank"
               class="button is-dark is-fullwidth linked-in-button">
              <span class="icon">
                <i class="fa fa-linkedin-square"></i>
              </span>
              <span>LinkedIn</span>
            </a>
          </div>
          <div class="column is-9">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <p class="">Soy un desarrollador de software enfocado en tecnologías web y móvil. Constantemente estoy
                    aprendiendo y desarrollando proyectos que me impongan retos para poder mejorar y
                    continuar actualizado. Mucho de los que aprendo lo comparto en mi <a href="#">Blog</a> y en <a
                      href="#">Medium</a>.</p>
                </div>
              </div>
            </div>
            <hr>
            <div class="columns">
              <div class="column is-12">
                <p class="subtitle">Últimos cursos realizados</p>
              </div>
            </div>
            <div class="columns">
              <div class="column is-half">
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      <p class="subtitle">Backend</p>
                      <ul style="list-style: none">
                        <li>
                          <a href="https://www.udemy.com/certificate/UC-M22JPR5Y/" target="_blank">Udemy: Git y Github
                            desde 0</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">ED team: Node JS Desde 0</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">CódigoFacilito: Desarrollo de Tienda en Línea con Laravel y PHP</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">Udemy: PHP7 Desde básico hasta desarrollar un software de venta</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">Udemy: API RESTful con Laravel 5.4: Guía Definitiva</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-spinner fa-spin"></i>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.udemy.com/certificate/UC-ZO911HBM/" target="_blank">Udemy: The Complete Node JS Developer Course</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.udemy.com/certificate/UC-LKG6SYX2/" target="_blank">Udemy: PHP with
                            Laravel for beginners - Become a Master in Laravel</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">FreeCodeCamp: Backend Development Program</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-spinner fa-spin"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      <p class="subtitle">DevOps</p>
                      <ul style="list-style: none">
                        <li>
                          <a href="https://www.udemy.com/certificate/UC-YIMC2R57/" target="_blank">AWS Concepts</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.udemy.com/certificate/UC-95XW8KD5/" target="_blank">AWS Essentials</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="column is-half">
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      <p class="subtitle">Frontend</p>
                      <ul style="list-style: none">
                        <li>
                          <a href="#">Aprende Vue2 y Firebase paso a paso</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">ED team: CSS Desde 0</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">CodeSchool: Javascript Roadtrip</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-spinner fa-spin"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">Nuxt.js - Vue.js on Steroids</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-spinner fa-spin"></i>
                          </span>
                        </li>
                        <li>
                          <a href="https://www.freecodecamp.org/eichgi/front-end-certification">FreeCodeCamp: Frontend
                            Development Program</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      <p class="subtitle">Misc</p>
                      <ul style="list-style: none">
                        <li>
                          <a href="https://www.udemy.com/certificate/UC-ADETGY5K/">Udemy: Aprende Wordpress</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">CodeSchool: The sequel to SQL</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">Udemy: Wordpress Avanzado - Custom Post Types, Taxonomías y Metaboxes</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-spinner fa-spin"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">ED team: Android avanzado con Firebase</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-check-circle"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#">Udemy: Programación de Android desde Cero</a>
                          <span class="icon is-pulled-right red-color">
                            <i class="fa fa-spinner fa-spin"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>
  .image {

  }

  .image img {
    width: 60%;
    margin: 0 auto;
  }

  .border-right {
    border-right: 1px solid #DDD;
  }

  .linked-in-button,
  .linked-in-button:hover {
    background: #0077B5;
  }

  .button {
    margin-bottom: 1em;
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
</style>
