<template>
  <div class="homePage">
    <div class="contentInfo">

    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="less" scoped>
.homePage{
  height: 100%;
  background-color: #EEF5FD;
  .contentInfo{
    height: 100%;
    background-color: #fff;
    margin: 8px 0 0 8px;
  background-image: url('~@assets/welcome.jpg');
  // background: linear-gradient(#3FB293,#2E9BD4);
  background-size: 100% 100%;
  }
}
</style>
