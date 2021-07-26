import React, { useContext, useState } from 'react'
// Componentes
import FormTask from './FormTask'
// Context
import TaskContext from '../context/Task/TaskContext'

export default function AddTask() {
    const { getFactCat } = useContext(TaskContext)

    const [openModal, setOpenModal] = useState(false)

    // Cierra el modal de creación de tareas
    const closeModal = () => {
        setOpenModal(false)
    }


    return (
        <div>

            <button
                className="add-btn"
                onClick={() => setOpenModal(!openModal)}>
                <h3>Add task</h3>
            </button>

            <FormTask
                openModal={openModal}
                closeModal={closeModal}
                title={"Add Task"}
            />



        </div>
    )
}
