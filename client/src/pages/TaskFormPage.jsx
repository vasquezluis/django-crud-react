import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { getTask, createTask, deleteTask, updateTask } from '../services/tasks'

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
    } else {
      await createTask(data)
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
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='description'
          placeholder='Title'
          {...register('title', { required: true })}
        />
        {errors.title && <span>Title is required</span>}

        <textarea
          name='description'
          rows='3'
          placeholder='Description'
          {...register('description', { required: true })}
        />
        {errors.description && <span>Description is required</span>}

        <button>Save</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm('are you sure?')
            if (accepted) {
              await deleteTask(params.id)
              navigate('/tasks')
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  )
}

export default TaskFormPage
