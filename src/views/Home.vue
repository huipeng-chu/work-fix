<template>
  <div>
    <el-container>
      <h5>楚会鹏:</h5>
      <router-link :to="{ path: '/home/checkbox' }">多选框巧妙实现保存数据与显示文本的不同</router-link>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h5 {
    text-align: center;
  }
</style>
