import { createContext, useContext, useState } from 'react'
import { createTaskRequest, deleteTasksRequest, getTasksRequest } from '../api/tasks'

const TaskContext = createContext()

export const useTasks = () => {
    const context = useContext(TaskContext)

    if (!context) {
        throw new Error("useTasks must be used within an TaskProvider")
    }
    return context;

}

export const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        try {
            const res = await getTasksRequest()
            setTasks(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const createTask = async (task) => {
        try {
            const res = await createTaskRequest(task)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTask = async (id) => {
        try {
            const res = await deleteTasksRequest(id)

            if (res.status == 204) setTasks(tasks.filter(task => task._id != id))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TaskContext.Provider value={{ tasks, createTask, getTasks, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}