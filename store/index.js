import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: 'hello Vuex!',
        num: 12,
        item:[
          {name: "Jane", age: 33},
        ]
      }
    }
  })
}
export default createStore
