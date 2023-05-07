import axios from 'axios'

const tasksAPI = axios.create({
  baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getTasks = async () => {
  try {
    const response = await tasksAPI.get('/')
    const data = await response.data

    console.log(data)

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export const createTask = async (task) =>
  tasksAPI.post('/', task)
