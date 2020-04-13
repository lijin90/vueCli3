<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p @click="getData">获取数据</p>
     <router-link to="/menu1">menu1</router-link>
     <router-link to="/menu2">menu2</router-link>
     <router-link to="/menu3">menu3</router-link>
     <router-view/>
  </div>
</template>
<style lang="stylus">

</style>
<script>
// import {test2} from /'../../public/common/DataStore'
export default {
  name:'About',
  data(){
    return{
        arrList:[
          {'name':"lijin1",'sex':"男"},
          {'name':"lijin2",'sex':"男"},
          {'name':"lijin3",'sex':"男"},
          ]
    }
  },
  created(){
    // this.DataStore.a.name='lj'
    console.log(vueBase.b.baseUrl);
    vueBase.b.baseUrl='changeWWW';
  },
  methods:{
     getData(){
       
        console.log(vueBase);
      //  test2('lijin');
      // this.DataStore.test2('lijin2');
      //  console.log(this.DataStore);
     }
  }
}
</script>
