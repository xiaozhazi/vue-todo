<template>
  <div class="page lists-show">
    <nav> <!--容器上半部分-->
      <div class="nav-group">
        <a class="nav-item">
          <span class="icon-list-unordered"></span>
        </a>
      </div>
      <h1 class="title-page">
        <span class="title-wrapper">{{todo.title}}</span> <!--title-->
        <span class="count-list">{{todo.count || 0}}</span> <!--count-->
      </h1>
      <div class="nav-group right"> <!--右边的删除，锁定图标容器-->
        <div class="options-web">
          <a class="nav-item">
            <span class="icon-lock" v-if="todo.locked"></span>
            <span class="icon-unclock" v-else></span>
          </a>
          <a class="nav-item"> <!--删除图标-->
            <span class="icon-trash"></span>
          </a>
        </div>
      </div>

      <div class="form todo-new input-symbol"> <!--新建todo item-->
        <input type="text" v-model="text" placeholder='please input' :disabled="todo.locked"/>
        <span class="icon-add"></span>
      </div>
    </nav>
    <div class="content-scrollable list-items">
    </div>
  </div>
</template>
<script>
import item from './item'
import { getTodo } from '../api/api'
export default {
  data () {
    return {
      todo: {
        title: 'Monday',
        count: 12,
        locked: false
      },
      items: [],
      text: ''// 新增代办单项绑定的值
    }
  },
  components: {
    item
  }
}
</script>

<style lang="less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';

</style>
