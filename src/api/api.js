import axios from 'axios'

export const getTodoList = params => {
  return axios.get(`/todo/list`, {
    params: params
  })
}
export const addTodo = params => {
  return axios.post(`/todo/addTodo`, params).then(res => res.data)
}
export const getTodo = params => {
  return axios.post(`/todo/listId`, {
    params: params
  })
}
export const addRecord = params => {
  return axios.post(`/todo/addRecord`, params).then(res => res.dara)
}
