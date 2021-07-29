import React, { useState, useContext, useEffect } from 'react'
// Modal
import Modal from "react-modal"
// Context
import TaskContext from "../context/Task/TaskContext"
// Swal
import Swal from 'sweetalert2'

Modal.setAppElement('#root')

function FormTask({ id, title, desc, openModal, closeModal }) {
    // Context
    const { addTask, editTask } = useContext(TaskContext)
    // Hook textArea
    const [textArea, setTextArea] = useState("")
    // Mensaje de validación
    const msnAdd = {
        title: 'Added successfully ',
        icon: 'success',
        confirmButtonText: 'Ok!'
    }
    const msnEmpty = {
        title: 'Empty description',
        text: 'Please write a drescription.',
        icon: 'error',
        confirmButtonText: 'Ok!'
    }

    // Cambia el valor del textArea si se desea editar una tarea 
    useEffect(() => {
        if (desc && title === "Edit Task") {
            setTextArea(desc)
        }

    }, [desc, title])

    return (
        <Modal
            className="modal"
            isOpen={openModal}
            onRequestClose={closeModal}>

            <div className="head-card" >
                <header>{title}</header>
                <label
                    onClick={() => {
                        closeModal();
                        if (title === "Add Task") setTextArea("")
                    }}>
                    X
                </label>
            </div>

            <div className="body-card">
                <label htmlFor="desc-task">Task description:
                </label>

                <p>
                    <textarea className="desc-task"
                        value={textArea}
                        onChange={(e) => { setTextArea(e.target.value); }}
                        maxLength="300">
                    </textarea>
                </p>
            </div>
            <div className="footer-card">

                {/* Si se desea crear imprime un botón
                    Si se desea editar imprime otro
                */}
                {title !== "Edit Task" ?
                    <button className="add-btn"
                        onClick={() => {
                            if (textArea !== "") {
                                addTask(textArea) // Agrega la tarea
                                setTextArea("") // Limpia la el textArea del form
                                Swal.fire(msnAdd) // Alerta de confirmación
                            }else{
                                Swal.fire(msnEmpty) // Alerta de error
                            }
                        }
                        }>
                        Create task
                    </button>
                    :
                    <button className="add-btn"
                        onClick={() => {
                            editTask(id, textArea) // Edita la tarea
                        }
                        }>
                        Edit  task
                    </button>
                }

            </div>

        </Modal>
    )
}

export default FormTask
