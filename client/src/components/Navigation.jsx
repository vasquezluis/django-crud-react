import { NavLink } from 'react-router-dom'

function Navigation () {
  return (
    <div className='flex justify-between py-3'>
      <NavLink to='/tasks'>
        <h1 className='font-bold text-3xl mb-4'>Task App</h1>
      </NavLink>
      <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
        <NavLink to='/tasks-create'>Create task</NavLink>
      </button>
    </div>
  )
}

export default Navigation
