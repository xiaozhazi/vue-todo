import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Mock from 'mockjs'
import {
  Todos
} from './data/todoList'
export default {
  /**
   * mock start
   */
  start () {
    let mock = new MockAdapter(axios) // 创建MockAdapter实例
    // 获取todo列表
    mock.onGet('/todo/list').reply(config => {
      let mockTodo = Todos.map(todo => { // 重组Todos数组
        return {
          id: todo.id,
          title: todo.title,
          count: todo.record.filter((data) => {
            if (data.checked === false) return true
            return false
          }).length,
          locked: todo.locked,
          isDeleted: todo.isDelete
        }
      }).filter(todo => {
        if (todo.isDelete === true) return false
        return true
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todos: mockTodo // 返回状态为200, 并且返回todos数据
          }])
        }, 200)
      })
    })
    // 新增一条todo
    mock.onPost('/todo/addTodo').reply(config => {
      Todos.push({
        id: Mock.Random.guid(),
        title: 'newList',
        isDelete: false,
        locked: false,
        record: []
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200])
        }, 200)
      })
    })
    // 获取todo单个列表
    mock.onGet('/todo/listId').reply(config => {
      let {
        id
      } = config.params
      let todo = Todos.find(todo => {
        return id && todo.id === id
      })
      todo.count = todo.record.filter((data) => {
        return data.checked === false
      }).length
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todo: todo
          }])
        }, 200)
      })
    })
  }
}
