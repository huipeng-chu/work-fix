<template>
  <div>
    <my-tree :data.sync="data" :fileDrop="fileDrop" :directoryDrops="directoryDrops" :delete="deleteFn"></my-tree>
  </div>
</template>
<script>
import myTree from './myTree'
export default {
  data () {
    return {
      listData: {
        code: 0,
        parent: [
          { name: '文件夹1', pid: 0, id: 1 },
          { name: '文件夹2', pid: 0, id: 2 },
          { name: '文件夹3', pid: 0, id: 3 },
          { name: '文件夹1-1', pid: 1, id: 4 },
          { name: '文件夹2-1', pid: 2, id: 5 }
        ],
        child: [
          { name: '文件夹1', pid: 1, id: 10001 },
          { name: '文件夹2', pid: 1, id: 10002 },
          { name: '文件夹2-1', pid: 2, id: 10003 },
          { name: '文件夹2-2', pid: 2, id: 10004 },
          { name: '文件夹1-1-1', pid: 4, id: 10005 },
          { name: '文件夹2-1-1', pid: 5, id: 10006 }
        ]
      },
      data: [],
      fileDrop: [
        { text: 'rm', value: '删除文件' }
      ],
      directoryDrops: [
        { text: 'rn', value: '修改名字' },
        { text: 'rm', value: '删除文件夹' }
      ]
    }
  },
  components: {
    myTree
  },
  created () {
    let { parent, child } = this.listData
    this.listData.parent.forEach(item => { item.type = 'parent' })
    this.data = [...parent, ...child]
  },
  methods: {
    // 删除
    deleteFn () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 3000)
      })
    },
    // 刷新数据
    refreshData (data) {
      this.allData = data
    }
  }
}
</script>
