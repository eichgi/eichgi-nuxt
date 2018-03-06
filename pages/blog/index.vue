<template>
  <div class="column is-9">
    <h1 class="title">Bienvenido a mi Blog!</h1>
    <div class="columns" v-for="chunk in postsChunked">
      <div class="column is-half">
        <PostCard :post="chunk[0]"/>
      </div>
      <div class="column is-half">
        <PostCard :post="chunk[1]"/>
      </div>
    </div>
    <!--<div class="columns">
      <div class="column is-half">
        <PostCard v-for="post in posts" :post="post"/>
      </div>
    </div>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import PostCard from '~/components/blog/post-card'

  function chunkArray(myArray, chunk_size) {
    let results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  }

  export default {
    created() {
      this.getRecentPosts();
    },
    components: {
      PostCard,
    },
    data() {
      return {
        images: [],
      }
    },
    name: "blog",
    layout: 'custom',
    computed: {
      posts: function () {
        return this.$store.getters.posts;
      },
      postsChunked: function () {
        return chunkArray(this.posts, 2);
      }
    },
    methods: {
      getRecentPosts() {
        axios.get('https://www.hoclabs.com/wp-json/wp/v2/posts/?_embed')
          .then((res) => {
            this.$store.commit('posts', res.data);
          });
      },
    },
  }
</script>

<style scoped>

</style>
