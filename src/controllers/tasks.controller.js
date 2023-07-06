import Task from '../models/task.model.js'


export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id
        }).populate('user')

        if (!tasks) return res.status(404).json({ message: 'Tasks empty' })

        res.json(tasks)
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' })
    }
}

export const createTask = async (req, res) => {
    try {
        const { title, description, date } = req.body;

        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id
        })

        const savedTask = await newTask.save();

        res.json(savedTask)
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' })

    }
}

export const getTask = async (req, res) => {
    try {
        const id_task = req.params.id;

        const taskFound = await Task.findById(id_task)
        if (!taskFound) return res.status(404).json({ message: 'Task not found' })

        res.json(taskFound)
    } catch (error) {
        return res.status(404).json({ message: 'Task not found' })
    }
}

export const updateTask = async (req, res) => {
    try {
        const id_task = req.params.id;

        const task = await Task.findByIdAndUpdate(id_task, req.body, { new: true })
        if (!task) return res.status(404).json({ message: 'Task not found' })

        res.json(task)
    } catch (error) {
        return res.status(404).json({ message: 'Task not found' })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const id_task = req.params.id;

        const task = await Task.findByIdAndDelete(id_task)
        if (!task) return res.status(404).json({ message: 'Task not found' })

        return res.sendStatus(204)
    } catch (error) {
        return res.status(404).json({ message: 'Task not found' })
    }
}
