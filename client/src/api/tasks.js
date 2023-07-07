import Cookies from "js-cookie"
import axios from "./axios"

const cookies = Cookies.get()

export const getTasksRequest = () => axios.get(`/tasks`, { headers: { Authorization: `Bearer ${cookies.token}` } })

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`, { headers: { Authorization: `Bearer ${cookies.token}` } })

export const createTaskRequest = (task) => axios.post(`/tasks`, task, { headers: { Authorization: `Bearer ${cookies.token}` } })

export const updateTaskRequest = (id, task) => axios.put(`/tasks/${id}`, task, { headers: { Authorization: `Bearer ${cookies.token}` } })

export const deleteTasksRequest = (id) => axios.delete(`/tasks/${id}`, { headers: { Authorization: `Bearer ${cookies.token}` } })

