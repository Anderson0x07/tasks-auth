import { Link } from "react-router-dom"
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { Card } from 'flowbite-react';

dayjs.extend(utc)

function TaskCard({ task, deleteTask }) {

    return (
        <>
            <Card>

                <div className="flex flex-col items-center py-5">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {task.title}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {task.description}
                    </span>
                    <span className="text-sm mt-8 text-gray-500 dark:text-gray-400">
                        {dayjs(task.date).utc().format('DD/MM/YYYY')}
                    </span>

                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        <Link
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            to={`/tasks/${task._id}`}
                        >
                            Edit
                        </Link>
                        <button
                            className="inline-flex items-center rounded-lg  bg-red-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-700   dark:bg-red-800   dark:hover:bg-red-900 "
                            onClick={() => deleteTask(task._id)}
                        >
                            Delete
                        </button>
                    </div>


                </div>
            </Card>
        </>
    )
}

export default TaskCard