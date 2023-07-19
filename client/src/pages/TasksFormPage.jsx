import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TasksContext'
import { useNavigate, useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

function TasksFormPage() {

    const { register, handleSubmit, setValue } = useForm()

    const { createTask, getTask, updateTask } = useTasks()

    const navigate = useNavigate()

    const params = useParams()

    useEffect(() => {
        const loadTask = async () => {
            if (params.id) {
                const task = await getTask(params.id)
                setValue('title', task.title)
                setValue('description', task.description)
                setValue('date', dayjs.utc(task.date).format('YYYY-MM-DD'))
            }
        }

        loadTask();
    }, [])


    const onSubmit = handleSubmit((data) => {

        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format()
        }


        if (params.id) {
            updateTask(params.id, dataValid)
        } else {
            createTask(dataValid)
        }
        navigate('/tasks')
    })

    return (
        <div className='flex h-[calc(100vh-200px)] items-center justify-center'>
            <div className='dark:bg-zinc-800 dark:text-white border border-black max-w-md w-full p-10 rounded-md'>
                
                <form onSubmit={onSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder='Title' {...register('title')} autoFocus
                        className='w-full dark:bg-zinc-700  px-4 py-2 rounded-md my-2' />

                    <label htmlFor="description">Description</label>
                    <textarea rows="3" placeholder='Description' {...register('description')}
                        className='w-full dark:bg-zinc-700  px-4 py-2 rounded-md my-2'>
                    </textarea>

                    <label htmlFor="date">Date</label>
                    <input type="date" placeholder='Title' {...register('date')}
                        className='w-full dark:bg-zinc-700  px-4 py-2 rounded-md my-2' />

                    <button className='bg-indigo-500 px-3 py-2 rounded-md mt-4'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default TasksFormPage