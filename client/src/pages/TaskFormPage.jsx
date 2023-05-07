import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { createTask, deleteTask } from '../services/tasks'

function TaskFormPage () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const navigate = useNavigate()
  const params = useParams()
  console.log(params)

  const onSubmit = handleSubmit(async (data) => {
    await createTask(data)

    navigate('/')
  })

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
