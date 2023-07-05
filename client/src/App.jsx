import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1 className='text-4xl font-bold text-center'>Hola mundo</h1>} />
        <Route path='/login' element={<h1 className='text-4xl font-bold text-center'>Login</h1>} />
        <Route path='/register' element={<h1 className='text-4xl font-bold text-center'>Register</h1>} />
        <Route path='/tasks' element={<h1 className='text-4xl font-bold text-center'>Tasks List</h1>} />
        <Route path='/add-task' element={<h1 className='text-4xl font-bold text-center'>Add task</h1>} />
        <Route path='/tasks/:id' element={<h1 className='text-4xl font-bold text-center'>Update Task</h1>} />
        <Route path='/profile' element={<h1 className='text-4xl font-bold text-center'>Profile</h1>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App