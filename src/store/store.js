import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        userId:'user',
        reviews:[]
    },
    mutations:{
        updateUserId(state, newId){
            state.userId = newId;
        },
        updateReviews(state,reviews){
            state.reviews = reviews
        }
    },
    actions:{//비동기 처리가 가능(.then, .catch사용)
        getReviews({commit}){
            axios.get('/api/comment')
            .then(response=>{
                commit('updateReviews',response.data)
            })
            .catch(err=>{
                console.log(err)
            })
        },
       
    },
    getters:{
        reviewCount(state /* , getters, rootState */){
            return state.reviews.lenth
        }
    },
});