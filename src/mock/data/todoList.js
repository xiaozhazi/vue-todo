import Mock from 'mockjs' // 导入mockjs模块
let Todos = [] // 定义我们需要的数据
const COUNT = [1, 2, 3, 4, 5, 6, 7, 8] // 定义所需数据量
for (let i = 1; i <= COUNT.length; i++) {
  Todos.push(Mock.mock({
    id: Mock.Random.guid(),
    title: Mock.Random.first(),
    isDelete: false,
    locked: Mock.Random.boolean(),
    record: COUNT.map(() => {
      return {
        text: Mock.Random.cparagraph(2),
        isDelete: false,
        checked: Mock.Random.boolean()
      }
    })
  }))
}

export {
  Todos
}
