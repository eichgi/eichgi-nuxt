import Vuex from 'vuex'

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
    getters: {
      posts: state => {
        return state.posts;
      }
    },
  })
};

export default createStore
