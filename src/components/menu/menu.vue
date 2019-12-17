<template>
  <div id='app'>
    <Sidebar :menuList='menuList'/>
  </div>
  </template>

<script>
import Sidebar from './components/SideBar'
export default {
  name: 'menu',
  components: { Sidebar },
  data () {
    return {
      menuList: [
        {
          path: '/func1',
          title: '功能1',
          children: []
        },
        {
          path: '/func2',
          title: '功能2',
          children: []
        },
        {
          path: '/func3',
          title: '功能3',
          children: [
            {
              path: '/func31',
              title: '功能3-1',
              children: [
                {
                  path: '/func31',
                  title: '功能3-1'
                }
              ]
            },
            {
              path: '/func32',
              title: '功能3-2',
              children: []
            },
            {
              path: '/func33',
              title: '功能3-3',
              children: []
            }
          ]
        }
      ]
    }
  }
}
</script>
