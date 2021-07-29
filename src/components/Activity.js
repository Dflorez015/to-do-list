import React, { useState, useContext } from 'react'
// Componentes
import FormTask from "./FormTask"
// Context
import TaskContext from '../context/Task/TaskContext'
import Swal from 'sweetalert2'

function Activity({ desc, id }) {
    // Context
    const { removeTask } = useContext(TaskContext)
    // Edit Modal
    const [openModal, setOpenModal] = useState(false)
    // check
    const [check, setCheck] = useState(true)
    // Dropdown menu
    const [drop, setDrop] = useState(false)

    // Cierra el modal de creación de tareas
    const closeModal = () => {
        setOpenModal(false)
    }

    // Si se realiza una tarea la descripción de la misma se tacha
    const checkTask = (check) => {
        setCheck(check)
        let desc = document.querySelector(`#description${id}`)
        if (!check) {
            desc.style.textDecoration = "line-through"
        } else {
            desc.style.textDecoration = "none"
        }
    }

    // Mensaje de confirmación de borrado
    const alertDelete = () => {
        let config = {
            title: 'Do you want delete this task?',
            showDenyButton: true,
            showCancelButton: true,
            showConfirmButton: false,
            denyButtonText: `Delete`,
        }
        Swal.fire(
            config
        ).then((result) => {
            if (result.isDenied) {                
                removeTask(id)
            }
        }
        )
    }

    // Opciones DropDown Menu
    const dropMenus = () => {
        return (
            <div
                className="dropdown-content" >
                {check && // Si se realiza una actividad se inhabilita la opción de editar
                    <ul
                        onClick={() =>
                            setOpenModal(!openModal) // Abre el modar para editar
                        }>
                        Edit
                    </ul>
                }
                <ul onClick={() =>
                    alertDelete(id)
                }>
                Delete
                </ul>
            </div >
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
                <ul className="container-check">
                    <label className="container-check"
                    >|
                        <input type="checkbox" ></input>
                        <span className="checkmark" onClick={() => checkTask(!check, id)}></span>
                    </label>
                </ul>
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
            <p id={`description${id}`}> {desc} </p>
        </div>
    </>
)
}

export default Activity
