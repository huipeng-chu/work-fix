<template>
    <div>
      <template>
        <div class="tip">
          1.初始接收'1,2,4' 让第1/3/4个多选框处于选中状态
          2.多选框的被选中的值[1,2,4]
        </div>
        <el-checkbox-group v-model="checkList" @change="listChange()">
          <el-checkbox :label="item.value" v-for="(item) in types"
                       :key="item.id">
            {{item.label}}
            <el-button type="text">配置</el-button>
          </el-checkbox>
        </el-checkbox-group>
      </template>
    </div>
</template>

<script>
export default {
  name: 'checkBox',
  data () {
    return {
      checkList: [],
      types: [
        {
          label: '极光推送',
          value: '1'
        },
        {
          label: '电话推送',
          value: '2'
        },
        {
          label: '邮件推送',
          value: '3'
        },
        {
          label: '地址推送',
          value: '4'
        }
      ]
    }
  },
  created () {
    this.getCheckList()
  },
  methods: {
    listChange (value) {
      console.log('更新后的值', this.checkList)
    },
    getCheckList () {
      // 假设选中的是 1,2,4
      var getDataType = '1,2,4'
      this.checkList = getDataType.split(',')
      this.checkList.forEach(item => Number(item))
      console.log(this.checkList)
    }
  }
}
</script>

<style scoped>
  .el-checkbox {
    display: block;
  }
</style>
