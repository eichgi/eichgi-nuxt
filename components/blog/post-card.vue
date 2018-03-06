<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="post['_embedded']['wp:featuredmedia'][0]['source_url']" :alt="post.title.rendered">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="subtitle">{{post.title.rendered}}</p>
        </div>
      </div>
      <div class="content" v-html="post.excerpt.rendered"></div>
      <a href="#" class="button is-link is-fullwidth">Ver</a>
    </div>
  </div>
</template>

<style scoped>
  .card {
    margin-bottom: 1em;
  }
</style>

<script>
  export default {
    name: "post-card",
    props: ['post'],
  }
</script>

