
import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import React from 'react';
import { useState } from 'react'


function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm ',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th at 1:30pm ',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shoping',
            day: 'Feb 5th at 2:30pm ',
            reminder: false,
        }
    ])
    //Delete task
    const deleteTask = (id) => {
        console.log('delete', id)
    }

    return (
        <div className='container'>
            <Header />
            <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
    )
}

// class App extends React.Component {
//     render() {
//         return <h1>Hello form class</h1>
//     }
// }

export default App;