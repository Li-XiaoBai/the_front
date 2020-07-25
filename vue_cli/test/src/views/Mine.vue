<template>
    <div>
        <h2>我的页面</h2>
        <br>
        {{msg}}
        <!-- {{$route.params.id}} -->
        {{$route.query.id}}
        <router-link to="/mine/test1">子路由一</router-link>|
        <router-link to="/mine/test2">子路由二</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                msg:'hehe'
            }
        },
        methods:{

        },
        created(){
            console.log(this.$route.params.id);
        }
    }
</script>

<style lang="scss" scoped>

</style>