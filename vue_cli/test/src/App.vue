<!--总组件-->
<template>
  <div id="app">
    
    <commen></commen>|
    <br>
    <router-link to="/">Home</router-link> |
    <!-- <router-link to="/mine">我的</router-link> -->
    <router-link :to="{name:'mine',params:{id:666}}">我的params</router-link>|
    <!-- params传参前面只能用name  且刷新后最开始不显示 -->
    <router-link :to="{path:'/mine',query:{id:666}}">我的query</router-link>|
    <!-- query传参前面只能用parh(路径)  且刷新后最开始显示 -->
    <router-link to="/Test/5/lisi">test测试</router-link>
    <!-- 路径参数传参， 但是要在router.js里修改 -->
    <router-view></router-view>
    <!-- 用于显示路由 -->
  </div>
</template>
<script>
      //1--导入 
    import Commen from './components/Commen';
    export default {
      // 2 -- components中声明
      components:{
        Commen,
      }
        
    }
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
