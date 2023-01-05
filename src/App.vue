
<template>
<div id = "app">
    <p>
      <!-- <el-button>
              <router-link to="/home"></router-link>
      </el-button> -->
            
    </p>
    <div id = 'App'>
      <img alt="Vue logo" src="./assets/logo.png">

    </div>
    
    <router-view/>
	</div>
</template>

<script>
// App.vue 的名称叫 app
    export default {
        name: 'app'
    }
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
