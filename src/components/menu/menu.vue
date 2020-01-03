<template>
  <div id="nav">
    <el-container>
      <el-aside width="200px">
        <Sidebar :menuList='menuList'></Sidebar>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from './components/SideBar'
export default {
  name: 'comMenu',
  components: { Sidebar },
  data () {
    return {
      menuList: []
    }
  },
  created () {
    this.getMenuList()
  },
  methods: {
    getMenuList () {
      this.$axios.post('/api/api-m/backstageMenu/selectMenuByUserIdSiteId',
        {
          siteId: this.$store.state.siteId,
          userId: Number(window.sessionStorage.getItem('userId'))
        }
      ).then(res => {
        this.menuList = res.data
      })
    }
  }
}
</script>
<style lang="less" scope>
#nav {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 16px;
}
.ivu-layout-sider {
  width: 250px !important;
}
</style>
