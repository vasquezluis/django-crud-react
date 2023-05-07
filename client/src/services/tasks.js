import axios from 'axios'

const tasksAPI = axios.create({
  baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getTask = async (id) => {
  const response = await tasksAPI.get(`/${id}`)
  const data = await response.data

  return data
}

export const getTasks = async () => {
  try {
    const response = await tasksAPI.get('/')
    const data = await response.data

    return data
  } catch (error) {
    throw new Error(error.message)
  }
}

export const createTask = async (task) =>
  tasksAPI.post('/', task)

export const deleteTask = async (id) =>
  tasksAPI.delete(`/${id}/`)

export const updateTask = async (id, task) =>
  tasksAPI.put(`/${id}/`, task)
