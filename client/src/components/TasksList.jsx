import { useState, useEffect } from 'react'
import { getTasks } from '../services/tasks'
import TaskCard from './TaskCard'

function TasksList () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const response = async () => {
      const result = await getTasks()
      const data = await result.data
      setTasks(data)
    }
    response()
  }, [])

  return (
    <div>
      {
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      }
    </div>
  )
}

export default TasksList
