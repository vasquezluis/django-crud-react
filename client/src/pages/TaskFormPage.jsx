import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { getTask, createTask, deleteTask, updateTask } from '../services/tasks'
import { toast } from 'react-hot-toast'

function TaskFormPage () {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()
  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data)
      toast.success('Tarea actualizada', {
        position: 'bottom-right',
        style: { background: '#101010', color: '#fff' }
      })
    } else {
      await createTask(data)
      toast.success('Tarea creada', {
        position: 'bottom-right',
        style: { background: '#101010', color: '#fff' }
      })
    }
    navigate('/')
  })

  useEffect(() => {
    async function loadTask () {
      if (params.id) {
        const res = await getTask(params.id)
        setValue('title', res.title)
        setValue('description', res.description)
      }
    }
    loadTask()
  }, [])

  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>
        <input
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
          type='text'
          name='description'
          placeholder='Title'
          {...register('title', { required: true })}
        />
        {errors.title && <span>Title is required</span>}

        <textarea
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
          name='description'
          rows='3'
          placeholder='Description'
          {...register('description', { required: true })}
        />
        {errors.description && <span>Description is required</span>}

        <button
          className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'
        >Save
        </button>
      </form>

      {params.id && (
        <div className='flex justify-end'>
          <button
            className='bg-red-500 p-3 rounded-lg w-48 mt-3'
            onClick={async () => {
              const accepted = window.confirm('are you sure?')
              if (accepted) {
                await deleteTask(params.id)
                toast.success('Tarea eliminada', {
                  position: 'bottom-right',
                  style: { background: '#101010', color: '#fff' }
                })
                navigate('/tasks')
              }
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default TaskFormPage
