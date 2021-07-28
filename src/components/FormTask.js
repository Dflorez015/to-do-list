import React, { useState, useContext, useEffect } from 'react'
// Modal
import Modal from "react-modal"
// Context
import TaskContext from "../context/Task/TaskContext"

Modal.setAppElement('#root')

function FormTask({ id, title, desc, openModal, closeModal }) {
    // Context
    const { addTask, editTask } = useContext(TaskContext)
    // Hook textArea
    const [textArea, setTextArea] = useState("")
    // Estilos de los modales
    const modalStyle = {
        content: {
            width: "50vw",
            minWidth: "250px",
            minHeight: "195px",
            margin: "20vh auto",
            padding: "0px",
            boxShadow: "1px 7px 14px rgba(0,0,0,0.3)"
        }
    }

    // Cambia el valor del textArea si se desea editar una tarea 
    useEffect(() => {
        if(desc && title === "Edit Task"){
            setTextArea(desc)
        }

    }, [desc, title])

    return (
        <Modal
            className="modal"
            style={modalStyle}
            isOpen={openModal}
            onRequestClose={closeModal}>

            <div className="head-card" >
                <header>{title}</header>
                <label
                    onClick={closeModal}>
                    X
                </label>
            </div>
            <div className="body-card">
                <form >
                    <label htmlFor="desc-task">Task description:
                    </label>

                    <textarea className="desc-task"
                        value={textArea}
                        onChange={(e) => { setTextArea(e.target.value); }}
                        maxLength="300">

                    </textarea>
                </form>
            </div>
            <div className="footer-card">

                {title !== "Edit Task" ?
                    <button className="add-btn"
                    onClick={() => {
                        addTask(textArea) // Agrega la tarea
                        setTextArea("") // Limpia la el textArea del form
                    }
                    }>
                    Create task
                </button>
                :
                <button className="add-btn"
                onClick={() => {
                    editTask(id, textArea) // Agrega la tarea
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
