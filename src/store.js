import {createStore} from 'vuex'

var store = createStore({
    state(){
        return {
            count : 0,
        }
    },
    mutations: {
        increment(store){
            state.count++
        }
    }
})

export default store