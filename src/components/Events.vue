<template>
<div id = "app">
    <h1>Events</h1>
    <h1>{{ event_title }}</h1>
    <h1>{{searched_event}}</h1>
</div>
</template>

<script>
export default{
    name:'Events',
    props:['event_id','query_id'],
    computed:{
        event_title(){
            if(this.event_id=='1'){
                return 'event one parameter'
            }else if(this.event_id=='2'){
            return 'event two parameter'
            }else 
            return 'event another parameter'
        },
        searched_event(){
            if(this.query_id){
                return 'event query return'
            }else
                return 'event another query'
        }
    }
}
</script>