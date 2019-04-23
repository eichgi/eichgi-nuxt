<template>
  <div class="column is-9" style="min-height: 85vh;">
    <p class="quote">Learning for sharing, sharing to continue learning.</p>
    <!--<div v-show="this.postsChunked.length === 0">-->
    <div v-show="showLoading">
      <p class="subtitle has-text-centered">Cargando...</p>
      <div class="sk-wave">
        <div class="sk-rect sk-rect1"></div>
        <div class="sk-rect sk-rect2"></div>
        <div class="sk-rect sk-rect3"></div>
        <div class="sk-rect sk-rect4"></div>
        <div class="sk-rect sk-rect5"></div>
      </div>
    </div>
    <!--<div class="columns" v-for="chunk in postsChunked">
      <div class="column is-half">
        <PostCard :post="chunk[0]"/>
      </div>
      &lt;!&ndash;<div class="column is-half">
        <PostCard :post="chunk[1]"/>
      </div>&ndash;&gt;
    </div>-->
    <div v-show="!showLoading">
      <div class="columns">
        <div class="column is-half">
          <p class="title has-text-centered has-text-underlined">HOC Labs</p>
        </div>
        <div class="column is-half">
          <p class="title has-text-centered has-text-underlined">DevJournal</p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <PostCard v-for="post in posts" :post="post"/>
        </div>
        <div class="column is-half">
          <entry :post="entry" v-for="entry in journalPosts"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import PostCard from '~/components/blog/post-card'
  import entry from '~/components/blog/entry'

  export default {
    created() {
      this.getRecentPosts();
      this.getRecentJournalPosts();
    },
    components: {
      PostCard,
      entry,
    },
    data() {
      return {
        images: [],
        filters: {
          sort: {_created: -1},
          limit: 7,
          skip: 0,
        }
      }
    },
    name: "blog",
    layout: 'custom',
    computed: {
      posts: function () {
        return this.$store.getters.posts;
      },
      journalPosts: function () {
        return this.$store.getters.journalPosts;
      },
      postsChunked: function () {
        //return this.chunkArray(this.posts, 2);
        return [];
      },
      showLoading: function () {
        //return this.posts === 0;
        return !(this.posts.length > 0 && this.journalPosts.length > 0);
      }
    },
    methods: {
      getRecentJournalPosts() {
        this.$axios.$post(`${process.env.SERVER}/api/collections/get/publicaciones?token=${process.env.TOKEN}`, this.filters)
          .then(res => {
            this.$store.commit('journalPosts', res.entries);
          });
      },
      getRecentPosts() {
        axios.get(`${process.env.WP_HOCLABS}/wp-json/wp/v2/posts/?_embed&per_page=5`)
          .then((res) => {
            this.$store.commit('posts', res.data);
          });
      },
      chunkArray(myArray, chunk_size) {
        let results = [];
        while (myArray.length) {
          results.push(myArray.splice(0, chunk_size));
        }
        return results;
      }
    },
  }
</script>

<style scoped>
  .sk-wave {
    margin: 40px auto;
    /*width: 50px;*/
    height: 40px;
    height: 60px;
    text-align: center;
    font-size: 10px;
  }

  .sk-wave .sk-rect {
    background-color: #333;
    background-color: #D91E18;
    margin: 0 1px;
    height: 100%;
    width: 6px;
    width: 8px;
    display: inline-block;
    -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
    animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
  }

  .sk-wave .sk-rect1 {
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }

  .sk-wave .sk-rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .sk-wave .sk-rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  .sk-wave .sk-rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .sk-wave .sk-rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-waveStretchDelay {
    0%, 40%, 100% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }

  @keyframes sk-waveStretchDelay {
    0%, 40%, 100% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }

  .quote {
    border-left: 5px solid #7f828b;
    padding: 1em 2em;
    background: #dbe1ec;
    border-radius: 1px;
    margin-bottom: 1.5em;
    font-style: italic;
  }
</style>
