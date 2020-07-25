<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- {{$store.state.count}} -->
    <!-- {{count}} -->
    <!-- {{$store.getters.sum}} -->
    {{sum}}
    <!-- 用commit调用ations中的方法 -->
    <button @click="$store.commit('add',5)">add</button>
    <button @click="addAction">addAction</button>
    <button @click="$store.commit('reduce')">reduce</button>
  </div>
</template>

<script>
// 节构赋值  es6
// let obj = {name:'zs'};
// let {name} = obj;
// let arr = [1,2,3];
// let [a,b,c] = arr;

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// 
import{mapState,mapMutations,mapGetters,mapActions} from 'vuex';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  // 映射（将mapstate映射成count）
  // 计算属性
  computed:{
    // 扩展运算符...合成一个对象  es6语法
    ...mapState(['count']),
    ...mapGetters(['sum'])
  },
  //返回对象
  // 方法映射
  methods:{
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction'])
    }
}
</script>
