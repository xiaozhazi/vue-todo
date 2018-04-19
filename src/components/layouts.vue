<template>
  <section class="container"> <!--最外面的容器-->
    <section class="menu">
      <menus></menus>
    </section> <!--left-->
    <section class="content-container"> <!--right-->
      <todo></todo>
    </section>
  </section>
</template>

<script>
import menus from './menus'
import todo from './todo'
export default {
  components: {
    menus,
    todo
  }
}
</script>

<style lang="less">
  @import '../common/style/layouts.less';
</style>
