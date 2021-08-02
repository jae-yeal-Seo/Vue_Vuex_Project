<template>
<div id = "app">
    <h1>{{ menu_name }}</h1>
    <h1>{{searched_menu}}</h1>
    <ul>
        <li v-for="menu in menus" :key="menu.menuId"><a :href="'/menus/'+menu.id">{{menu.name}}</a></li>
    </ul>
</div>
</template>

<script>
export default{
    name:'Menus',
    data(){
        return {
            menus:[
            {
                menuId:1,
                menuName:'menu1'
            },
            {
                menuId:2,
                menuName:'menu2'
            },
            {
                menuId:3,
                menuName:'menu3'
            }
            ]
        }
    },
    computed:{
        menu_name(){
            const id = this.$route.params.menu.id
            if(id=='1')
            return '맛있는 아메리카노'
            else if(id=='2')
            return '맛있는 카페라떼'
            else
            return '맛있는 망무디'
        },
        searched_menu(){
            const id = this.$route.query.menu_id
            if(id=='1')
            return '아이스 쿼리카노'
            else if(id=='2')
            return '쿼리라떼'
            else
            return '어나더 쿼리'
        }
    }
}
</script>