import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      posts: [],
    },
    mutations: {
      increment(state) {
        state.counter++
      },
      posts(state, posts) {
        state.posts = posts;
      }
    },
    getters: {},
    actions: {
      getPostsFromWP({commit}) {
        axios.get('https://www.hoclabs.com/wp-json/wp/v2/posts')
          .then((res) => {
            console.log(res);
            //this.posts = res.data;
            commit('posts', res.data);
            //this.getAllMedia();
          });
      },
    }
  })
};

export default createStore
