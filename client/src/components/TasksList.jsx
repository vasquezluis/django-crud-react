import { useState, useEffect } from 'react'
import { getTasks } from '../services/tasks'
import TaskCard from './TaskCard'

function TasksList () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    (async () => {
      const result = await getTasks()
      setTasks(result)
    })()
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
