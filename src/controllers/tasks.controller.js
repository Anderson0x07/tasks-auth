import Task from '../models/task.model.js'


export const getTasks = async (req, res) => {
    const tasks = await Task.find({
        user: req.user.id
    }).populate('user')

    if (!tasks) return res.status(404).json({ message: 'Tasks empty' })

    res.json(tasks)
}

export const createTask = async (req, res) => {
    const { title, description, date } = req.body;

    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    })

    const savedTask = await newTask.save();

    res.json(savedTask)
}

export const getTask = async (req, res) => {
    const id_task = req.params.id;

    const taskFound = await Task.findById(id_task)
    if (!taskFound) return res.status(404).json({ message: 'Task not found' })

    res.json(taskFound)
}

export const updateTask = async (req, res) => {
    const id_task = req.params.id;

    const task = await Task.findByIdAndUpdate(id_task, req.body, { new: true })
    if (!task) return res.status(404).json({ message: 'Task not found' })

    res.json(task)
}

export const deleteTask = async (req, res) => {
    const id_task = req.params.id;

    const task = await Task.findByIdAndDelete(id_task)
    if (!task) return res.status(404).json({ message: 'Task not found' })

    return res.sendStatus(204)
}
