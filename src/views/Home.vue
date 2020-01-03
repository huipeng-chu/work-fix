<template>
  <div>
    <el-container>
      <el-row>
        <el-col :span="24" :offset="4">
          <h5>楚会鹏:</h5>
          <el-card class="box-card">
            <router-link tag="div" :to="{ path: '/home/checkbox' }">多选框巧妙实现保存数据与显示文本的不同</router-link>
            <router-link tag="div" :to="{ path: '/home/menu' }">菜单 和 历史标签页</router-link>
            <router-link tag="div" :to="{ path: '/home/tree' }">树形结构类文件的封装</router-link>
          </el-card>
        </el-col>
      </el-row>
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
