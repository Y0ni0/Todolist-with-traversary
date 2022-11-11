
import { useState, useEffect } from 'react'
import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import React from 'react';
import AddTask from './Components/AddTask';

function App() {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])
    useEffect(() => {
        const fetchTasks = async () => {
            const res = await fetch('http//localhost:5000/tasks')
            const data = await res.json()

            console.log(data)
        }
        fetchTasks()
    }, [])

    //Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }
    //Toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ?
            { ...task, reminder: !task.reminder } : task))
    }
    //Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <div className='container'>
            <Header onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks To show'}
        </div>
    )
}

// class App extends React.Component {
//     render() {
//         return <h1>Hello form class</h1>
//     }
// }

export default App;