import axios from 'axios'

export default{
    namesapaced:true,
    state:()=>({
        reviews:[]
    }),
    mutations:{
        updateReviews(state,reviews){
            state.reviews = reviews
        }
    },
    getters:{
        reviewCount(state /* , getters, rootState */){
            return state.reviews.lenth
        }
    },
    actions:{
        getReviews({commit}){
            axios.get('/api/comments')
            .then(response=>{
                commit('updateReviews',response.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}