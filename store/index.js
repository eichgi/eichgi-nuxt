import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      posts: [],
      journalPosts: [],
    },
    mutations: {
      increment(state) {
        state.counter++
      },
      posts(state, posts) {
        state.posts = posts;
      },
      journalPosts(state, posts) {
        state.journalPosts = posts;
      }
    },
    getters: {
      posts: state => {
        return state.posts;
      },
      journalPosts: state => {
        return state.journalPosts;
      }
    },
  })
};

export default createStore
