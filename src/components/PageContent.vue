<template>
  <div>
    <ul>
        <li v-for="item in itemsList" v-bind:key="item.name" >
            <h2 v-on:click="item.show = !item.show">{{item.name}}</h2>
            <img v-bind:src="item.image" v-show="item.show"/>
            <Counter></Counter>
            <button v-bind:id ="item.id" v-on:click="deleteItem(index, item)">Delete</button>
        </li>
    </ul>
  </div>
</template>


<script>
import Counter from './Counter.vue'
import database from '../firebase.js'
export default {
  data(){
    return{
        itemsList: []
        }
  },
  components:{
    'Counter':Counter
  },
  methods: {
    fetchItems:function(){
      database.collection('items').get().then((querySnapShot)=>{
        let item={}
        querySnapShot.forEach(doc=>{
          item=doc.data()
          item.show=false
          item.id = doc.id
          this.itemsList.push(item)
          }) 
        }) 
    },
    deleteItem:function(index, item){
      //Deleting from database
      database.collection('items').doc(item.id).delete()
      //Deleting from itemsList array
      this.itemsList.splice(index, 1)
      //Msg to be displayed. Can be made as an alert
      console.log("Item Deleted Successfully")
    }
    },
    created(){
      this.fetchItems()
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:rgb(122, 63, 100);
    padding:10px;
    border-style: solid;
    border-color:black;
    border-width: 2px;
}
h1{
    color:ivory
}
h2{
  text-align: center
}
#itemsList{
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
    padding: 0 5px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 10px;
    border: 1px solid #222;
    margin: 10px;
}
img{
  width:100px;
  height:100px;
}
</style>