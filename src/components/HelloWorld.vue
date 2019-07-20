<template>
  <div class="content">
    <div class="top"></div>
    <div class="body">
      <div class="bodyLeft"></div>
      <div class="bodyRight"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less" scoped>
.content{
  margin:0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: red;
  .top{
    height: 20%;
    background-color: blue;
  }
  .body{
    display: flex;
    height: 80%;
    .bodyLeft{
      width: 15%;
      background-color: aqua;
    }
    .bodyRight{
      width: 85%;
      background-color: chartreuse;
    }
  }
}
</style>
