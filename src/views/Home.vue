<template>
  <div class="home">
    <div id="nav">
      <p>{{ value }}</p>
      <input type="text" v-model="cityName" />
      <h2>{{ getChangeName }}</h2>
      <h1 @click="mutations">改变vuex name</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <h1>{{ city }}</h1>
      <h1>{{ getChangeName }}</h1>
      <!-- 按钮导航 -->
      <router-link tag="button" to="/citylist">获取城市列表</router-link>
    </div>
    <h1 @click="change">changeName</h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      cName: "",
      cityName: "shanghai",
      value: ""
    };
  },
  watch: {
    // cityName: 'nameChange'
    cityName: {
      handler(newName, oldName) {
        console.log(`newVal:${newName}, oldVal:${oldName}`);
        this.value = this.cityName;
      },
      // console.log(newName,oldName)
      deep: true,
      immediate: true
    }
  },
  computed: {
    //  ...mapGetters([
    // 	'getChangeName',
    // 	'getCityFn'
    // ]),

    ...mapGetters({
      city: "getCityFn"
    }),
    // city: function() {
    //   // 通过vuex的getters方法来获取state里面的数据
    //   return this.$store.getters.getCityFn;
    // },
    getChangeName: function() {
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getChangeName;
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    mutations() {
      this.$store.commit("change1");
      console.log(this.$store, this.$store.state);
    },
    // ...mapMutations({
    //     mutations
    // }),
    //  mutations(){
    //   this.$store.commit('change',{
    //     changeName:'12321312'
    //   });
    change() {
      this.DataStore.a.name = "changeName";
      console.log(this.DataStore.a.name);
    }
  },
  async created() {
    try {
      const aa = await this.GetApi.apiAxios(
        "http://jsonplaceholder.typicode.com/todos"
      );
      const bb = await this.GetApi.apiAxios(
        "http://jsonplaceholder.typicode.com/users"
      );
      console.log(aa, bb);
      Promise.all([aa, bb])
        .then(result => {
          console.log(result); //['成功了', 'success']
        })
        .catch(error => {
          console.log(error);
        });
    } catch {}

    //  await this.$axios.get('http://jsonplaceholder.typicode.com/users').then(function(res){
    //  console.log(res)
    // }).catch(function (error) {
    //     console.log(error);
    // });
    // const PostS=this.GetApi.getpost('http://jsonplaceholder.typicode.com/users');

    this.cName = this.$store.state.changeName;
    this.DataStore.a.name = "lj";
    console.log(this.$store, this.$store.state);
    console.log(this.DataStore.a.name);
  }
};
</script>
