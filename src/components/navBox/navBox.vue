<template>
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Sider hide-trigger>
        <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
      </Sider>
      <Content>Content</Content>
    </Layout>
  </Layout>
</template>

<script>
export default {
  name: 'navBox.vue',
  comments: {

  }
}
</script>

<style scoped>

</style>
