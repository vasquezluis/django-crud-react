import { useNavigate } from 'react-router-dom'

function TaskCard ({ task }) {
  const navigate = useNavigate()

  return (
    <div className='bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer' onClick={() => navigate(`/tasks/${task.id}`)}>
      <h1 className='font-bold uppercase text-white'>{task.title}</h1>
      <p className='text-slate-400'>{task.description}</p>
    </div>
  )
}

export default TaskCard
