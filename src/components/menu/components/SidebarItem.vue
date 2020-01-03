<template>
  <div v-if="item.backstageMenuList">
    <template v-if="item.backstageMenuList.length == 0">
      <el-menu-item :index="'/' + item.path + '/' + item.name" class="active"
          :key="item.id">
          <i v-if="iconList[item.id] != null && item.parentId == 0">
            <img :src="iconList[item.id]">
          </i>
           <i v-else-if="item.parentId == 0" class="el-icon-menu"></i>
        {{item.title}}
      </el-menu-item>
    </template>

    <el-submenu v-else :index="'/' + item.path + '/' + item.name + item.id">
      <template slot="title">
          <i v-if="iconList[item.id] != null && item.parentId == 0">
            <img :src="iconList[item.id]">
          </i>
           <i v-else-if="item.parentId == 0" class="el-icon-menu"></i>
        {{item.title}}
      </template>

      <template v-for="child in item.backstageMenuList">
        <sidebar-item
          v-if="child.backstageMenuList&&child.backstageMenuList.length>0"
          :item="child"
          :key="child.id"
          />
        <el-menu-item
          v-else
          :key="child.id"
          :index="'/' + child.path + '/' + child.name"
          >
          <span class="state"></span>
          <!-- <i class="el-icon-location" v-if="child.parentId == 0"></i> -->
          {{child.title}}
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    ind: {
      type: Number
    }
  },
  data () {
    return {
      iconList: {
        1 : '../../../assets/images/menu-zhuye.png',
        2: '../../../assets/images/menu-renli.png',
        26: '../../../assets/images/menu-xinwen.png',
        31: '../../../assets/images/menu-shenqing.png',
        36: '../../../assets/images/menu-zhidu.png',
        41: '../../../assets/images/menu-chuchai.png',
        49: '../../../assets/images/menu-huiyi.png',
        56: '../../../assets/images/menu-guanli.png',
        63: '../../../assets/images/menu-rizhi.png',
        68: '../../../assets/images/menu-richeng.png',
        75: '../../../assets/images/menu-liucheng.png',
        231: '../../../assets/images/menu-anquan.png',
        236: '../../../assets/images/menu-shengchan.png',
        246: '../../../assets/images/menu-guanli.png'
      }
    }
  },
  methods: {
    getLastMenu (data) {
      if (data.backstageMenuList.length == 0) {
        console.log('最后一级', data);
        this.$store.dispatch('addVisitedViews', route);
      }
    }
  }
}
</script>
<style lang="less" scoped>
.el-icon-menu {
  color: #fff;
}
.el-menu-item {
  position: relative;
}
.el-menu-item:hover {
  background-color: #6e9bdb !important;
  span {
    background: #fff;
  }
}
.state {
  position: absolute;
  left: 0;
  width: 2px;
  height: 100%;
  background: transparent;
}
.el-menu-item.is-active {
   background-color: #6e9bdb !important;
}
</style>