<template>
  <el-row>
    <el-col :span="6">
      <el-tree :data="allData" :props=defaultProps default-expand-all :render-content="render"
        :expand-on-click-node="false">
      </el-tree>
    </el-col>
  </el-row>
</template>
<script>
import _ from 'lodash'
export default {
  data () {
    return {
      allData: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      // 默认当前点击项ID
      currentId: '',
      currentContent: ''
    }
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    fileDrop: {
      type: Array,
      default: () => []
    },
    directoryDrops: {
      type: Array,
      default: () => []
    },
    delete: {
      type: Function
    }
  },
  watch: {
    data () {
      this.changeData()
    }
  },
  created () {
    this.changeData()
  },
  methods: {
    changeData () {
      // 扁平的数据 变成 多层数据 递归数据
      let allData = _.cloneDeep(this.data)
      let treeMapList = allData.reduce((data, item) => {
        data[item['id']] = item
        return data
      }, {})
      let result = allData.reduce((data, item) => {
        var parent = treeMapList[item.pid]
        if (parent) {
          parent.hasOwnProperty('children') ? parent['children'].push(item) : parent['children'] = [item]
        } else if (item.pid === 0) {
          data.push(item)
        }
        return data
      }, [])
      this.allData = result
    },
    isParent (data) {
      return data.type === 'parent'
    },
    ok (data) {
      // 删除页面数据
      let list = _.cloneDeep(this.data)
      let item = list.find(item => item.id === data.id)
      if (item.name === this.currentContent) {
        this.currentId = ''
        return
      }
      console.log(item)
      item.name = this.currentContent
      // 向父级传递数据。重新刷新data数据
      this.$emit('update:data', list)
      this.$message({
        type: 'success',
        message: '修改成功!'
      })
      this.currentId = ''
    },
    cancel () {
      this.currentId = ''
    },
    handleRename (data) { // 重命名
      this.currentContent = data.name
      this.currentId = data.id
    },
    remove (id) {
      console.log(id)
      // 删除页面数据
      let list = _.cloneDeep(this.data)
      list = list.filter(item => item.id !== id)
      console.log(list)
      // 向父级传递数据。重新刷新data数据
      this.$emit('update:data', list)
    },
    handleRemove (data) { // 删除
      this.$confirm(`此操作将永久删除该文件,${data.name}, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 如果用户传递了delete方法 可以直接调用
        this.delete ? this.delete(data.id).then(() => {
          this.remove(data.id)
        }) : this.remove(data.id)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleCommand (data, value) {
      console.log(value)
      if (value === 'rn') {
        this.handleRename(data)
      } else if (value === 'rm') {
        console.log('进入')
        this.handleRemove(data)
      }
    },
    render (h, { node, data, store }) {
      let list = this.isParent(data) ? this.directoryDrops : this.fileDrop
      return (<div style="width:100%;">
        {
          this.isParent(data) ? !node.expanded ? <i class="el-icon-folder"></i> : <i class="el-icon-folder-opened"></i>
            : <i class="el-icon-document"></i>
        }
        {
          this.currentId === data.id ? <el-input size="mini" style="width: 70%;" value={this.currentContent} v-model={this.currentContent}></el-input> : data.name
        }
        {
          this.currentId !== data.id
            ? <el-dropdown placement="bottom-start" trigger="click" style="float:right" on-command={
              this.handleCommand.bind(this, data)
            }>
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                {
                  list.map(item => (
                    <el-dropdown-item command={item.text}>
                      {item.value}
                    </el-dropdown-item>
                  ))
                }
              </el-dropdown-menu>
            </el-dropdown> : <span class="btn-group">
              <el-button size="mini" type="text" on-click={this.ok.bind(this, data)}>确定</el-button>
              <el-button size="mini" type="text" on-click={this.cancel}>取消</el-button></span>
        }
      </div >)
    }
  }
}
</script>
<style lang="less" scoped>
.el-tree .el-input {
  height: 21px;
  line-height: 21px;
}
.btn-group {
  width: 20%;
  float: right;
}
</style>
