<template>
    <div>
        <h2>获取store中的count值  {{this.$store.state.count}}</h2>
        <button @click="reduce(2)">减值（参数传的2）</button>

        <h2>获取store中的num值  {{this.$store.state.num}}</h2>
        <button @click="add(1)">增加值（参数传的1）</button>
    
    </div>
</template>


<script>
//1、 导入 useStore 函数
import { useStore } from 'vuex'

    export default ({
        name:"mutations",

        setup() {
            const store = useStore()    // 2、获取store
            function add(num) {
                store.commit("sum", num)  //sum  是 状态管理里面mutations 的 sum这个方法
            }
            function reduce(num) {
                store.commit("reduce",num)  //reduce  是 状态管理里面mutations 的 reduce这个方法
            }
            return { add, reduce }
        }

    })


</script>

<style >

</style>
