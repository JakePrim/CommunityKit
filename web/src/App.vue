<template>
  <div id="app">
    <p-header></p-header>
    <router-view></router-view>
    <p-footer></p-footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    'p-header': Header,
    'p-footer': Footer
  }
}
</script>

<style lang="scss" scoped>
@import "assets/layui/css/layui.css";
@import "assets/css/global.css";
@import "assets/layui/css/modules/layer/default/layer.css";
</style>
