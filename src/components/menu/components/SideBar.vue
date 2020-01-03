<template>
  <div class="sidebar-container">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        router
        unique-opened
        mode="vertical"
        text-color="#FBFBFD"
        active-text-color="#fff"
        @select = "selectMenu"
        >
        <sidebar-item v-for="(menu, ind) in menuList" :key="menu.id" :item="menu" :ind="ind"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import SidebarItem from './SidebarItem'
export default {
  name: 'Sidebar',
  components: { SidebarItem },
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },
  created () {

  },
  methods: {
    selectMenu (index, path) {
      console.log(index);
      console.log(path);
    }
  }
}
</script>
<style lang="less" scope>
.el-submenu__title:hover {
  background-color: #6e9bdb !important;
}
.sidebar-container {
  transition: width 0.28s;
  // width: 160px !important;
  // height: 738px;
  height: 100%;
  // position: fixed;
  font-size: 0px;
  // bottom: 0;
  // left: 0;
  z-index: 1001;
  overflow: hidden;
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }
  .el-scrollbar {
    height: 100%;
    overflow: hidden;
  }
  .el-submenu__title i {
    color: #fff;
  }
  .scrollbar-wrapper {
    overflow-x: hidden !important;
    .el-scrollbar__view {
      height: 100%;
    }
  }
  .el-scrollbar__bar.is-vertical {
    right: 0px;
  }
  .is-horizontal {
    display: none;
  }
  a {
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }
  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
  }
  .is-active > .el-submenu__title {
    color: #f4f4f5 !important;
  }
  .el-menu.el-menu--inline {
    background: #6090d2;
  }
  .el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid transparent;
    color: #fff;
    font-size: 20px;
  }
  .el-menu {
    background: #4079c9;
  }
}
</style>