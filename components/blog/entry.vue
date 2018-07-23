<template>
  <div class="card">
    <div class="card-image" v-if="post.featured.path">
      <figure class="image is-4by3">
        <img :src="post.featured.path">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="subtitle red-color">{{post.title}}</p>
        </div>
      </div>
      <p class="content" v-html="postExcerpt(post.content, 250)"></p>
      <a :href="link" target="_blank" class="button is-link is-fullwidth">Ver entrada</a>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log(this.post);
    },
    name: "entry",
    props: ['post'],
    computed: {
      link: function () {
        //return `${process.env.SITE}/entradas/${this.post._id}`;
        return `${process.env.SITE}`;
      }
    },
    methods: {
      postExcerpt(content, length = 150) {
        return content ? `${content.substr(0, length)}...` : '';
      },
    }
  }
</script>

<style scoped>
  .card {
    margin-bottom: 1em;
  }
</style>
