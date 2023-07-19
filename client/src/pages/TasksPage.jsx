import { useEffect } from "react"
import { useTasks } from "../context/TasksContext"
import TaskCard from "../components/TaskCard"

function TasksPage() {

    const { getTasks, tasks, deleteTask } = useTasks()

    useEffect(() => {
        getTasks()
    }, [])

    if(tasks.length == 0) return (<h1 className="h-[calc(100vh-200px)] text-center text-4xl">No tasks</h1>)

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {
                tasks.map(task => (
                    <TaskCard key={task._id} task={task} deleteTask={deleteTask}/>
                ))
            }
        </div>
    )
}

export default TasksPage