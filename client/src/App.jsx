import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { AuthProvider } from './context/AuthContext'
import TasksPage from './pages/TasksPage'
import TasksFormPage from './pages/TasksFormPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import ProtectedRoutes from './ProtectedRoutes'
import { TaskProvider } from './context/TasksContext'
import Nav from './components/Navbar'
import { DarkThemeToggle, Flowbite } from 'flowbite-react'


function App() {
  return (

    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Flowbite>
            <div className=" dark:text-white dark:bg-slate-700">
              <div className="w-full h-full  mx-auto p-4 md:py-8">
                <Nav dark={<DarkThemeToggle />} />

                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/register' element={<RegisterPage />} />

                  <Route element={<ProtectedRoutes />}>
                    <Route path='/tasks' element={<TasksPage />} />
                    <Route path='/add-task' element={<TasksFormPage />} />
                    <Route path='/tasks/:id' element={<TasksFormPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                  </Route>
                </Routes>
              </div>
            </div>
          </Flowbite>
          <footer className="bg-white shadow dark:bg-gray-900 ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} Tasks Manager By AndersonDev. All Rights Reserved.</span>
            </div>
          </footer>

        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App