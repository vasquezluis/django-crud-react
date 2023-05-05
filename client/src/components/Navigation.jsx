import { NavLink } from 'react-router-dom'

function Navigation () {
  return (
    <div>
      <NavLink to='/tasks'>
        <h1>Task App</h1>
      </NavLink>
      <NavLink to='/tasks-create'>Create task</NavLink>
    </div>
  )
}

export default Navigation
