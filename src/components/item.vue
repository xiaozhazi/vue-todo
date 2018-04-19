<template>
  <div class="list-item editingClass editing">
    <label class="checkbox"> <!--自定义的多选框-->
      <input type="checkbox" v-model="item.checked">
      <span class="checkbox-custom"></span>
    </label>
    <input type="text" v-model="item.text" placeholder="test">
    <a class="delete-item">
      <span class="icon-trash"></span>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {
          checked: false,
          text: 'hello, world'
        }
      }
    }
  }
}
</script>
<style lang="less">
@import '../common/style/list-items.less';
</style>
