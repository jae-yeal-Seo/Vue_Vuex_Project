
<template>
<div id="app">
    <h1>Welcome{{ userId }}</h1>
    <!-- $store.state.user.userId -> userId -->
    <input v-model="newId" type="text"><button @click="saveUserId">Save</button><br>
    <button @click="updateReviews">Update</button>
    <h1>{{reviewCount}}</h1>
    <!-- $store.getters[reviews/reviewCount] -> reviewCount -->
    <!-- 근데 어떻게 store.js와 구분하는지-->
    <ul>
        <li v-for="r in reviews" :key="r.id">
            <!-- $store.state.reviews.reviews -> reviews -->
            <p>{{r.body}}</p>
        </li>
    </ul>
    <v-simple-table>
        <template v-slot:default>
            <!-- template이 2개 쓰일수도 있다.. -->
        <thead>
            <tr>
                <th>Email</th>
                <th>Comment</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in reviews" :key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.body}}</td>
            </tr>
        </tbody>
        </template>

    </v-simple-table>
     <v-app id="inspire">
   

    </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default{
    data(){
        return {newId:''}
    },
    computed:{
        //namespaced가 설정되지 않은경우는 다음과 같이 쓴다.
        ...mapState({
            userId:state=>state.user.userId
        }),
        //namespaced:true라고 선언한 js의 경우는 다음과 같이 쓴다.ㅣ
        ...mapState('reviews',{
            reviews:state=>state.reviews
        }),
        ...mapGetters('reviews',['reviewCount'])
    }, 
    methods:{
        ...mapMutations(['updateUserId']), 
        ...mapActions('reviews',['getReviews']),
        saveUserId(){
            this.updateUserId(this.newId)
        },
        updateReviews(){
            this.getReviews()
        }
    }
}
</script>