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
            <div className="add-options">
                <h4>Add options</h4>
                <button
                    className="add-btn"
                    onClick={() => setOpenModal(!openModal)}>
                    <h3>Add task</h3>
                </button>

                <button className="add-btn fact-cat"
                    onClick={() => getFactCat()}>
                    <h3>Add fact cat</h3>
                </button>
            </div>

            <FormTask
                openModal={openModal}
                closeModal={closeModal}
                title={"Add Task"}
            />



        </div>
    )
}
