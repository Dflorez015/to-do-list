import React, { useState, useContext } from 'react'
// Componentes
import FormTask from "./FormTask"
// Context
import TaskContext from '../context/Task/TaskContext'

function Activity({ desc, id }) {
    // Context
    const { removeTask } = useContext(TaskContext)
    // Edit Modal
    const [openModal, setOpenModal] = useState(false)
    // Dropdown menu
    const [drop, setDrop] = useState(false)

    // Cierra el modal de creación de tareas
    const closeModal = () => {
        setOpenModal(false)
    }

    // Opciones DropDown Menu
    const dropMenus = () => {
        return (
            <div
                className="dropdown-content" >
                <ul
                    onClick={() =>
                        setOpenModal(!openModal) // Abre el modar para editar
                    }>
                    Edit
                </ul>
                <ul onClick={() =>
                    removeTask(id)
                }>
                    Delete
                </ul>
            </div>
        )
    }

    return (
        <>
            <FormTask
                openModal={openModal}
                closeModal={closeModal}
                title={"Edit Task"}
                desc={desc}
                id={id}
            >

            </FormTask>
            <div className="task">
                <nav className="task-option">
                    <ul>check</ul>
                    <ul
                        onClick={() =>
                            setDrop(!drop)
                        }>
                        <div className="dropdown">
                            options

                            {/* DropDown Menu*/}
                            {drop && dropMenus()}
                        </div>
                    </ul>
                </nav>
                <p> {desc} </p>
            </div>
        </>
    )
}

export default Activity
