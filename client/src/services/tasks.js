import axios from 'axios'

const tasksAPI = axios.create({
  baseURL: 'http://localhost:8000/tasks/api/v1'
})

export const getTasks = () => {
  return tasksAPI.get('/tasks/')
}
