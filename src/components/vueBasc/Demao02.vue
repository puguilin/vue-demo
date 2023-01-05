<template>
  <div id="demao02">
    <!-- https://www.kancloud.cn/wangjiachong/vue_notes/2153501 -->
    <h1>高级语法 vue3 setup 每个功能的代码都汇聚在一块</h1>
   
    <button  @click="handleClick">{{name}}</button>
    
  </div>
</template>


<script>
export default {
  name: "demao02",
  data() {
    return {
      message: "hello",
      show: false,
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    },
  },
  setup(props, contex) {
    return {
      name: "dell", // Options API 中data中的变量
      handleClick() {
        // Options API 中methods中的方法
        alert(123);
        
      },
    };
  },
};
</script>

    <style>
</style>