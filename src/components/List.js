import React, { useContext } from 'react'
// Componentes
import Activity from './Activity'
// Context
import TaskContext from '../context/Task/TaskContext'

export default function List({ title }) {
    // Lista de tareas
    const { tasks } = useContext(TaskContext)

    return (
        <div className="list-cont">
            <table className="table">
                <thead>
                    <tr key="titulo">
                        <th>{title}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <tr key={task.id}>
                                <td>
                                    <Activity desc={task.desc} id={task.id} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
