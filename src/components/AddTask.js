import React, { useContext, useState } from 'react'
// Componentes
import FormTask from './FormTask'
// Modal
import Modal from "react-modal"
// Context
import TaskContext from '../context/Task/TaskContext'
// Swal
import Swal from 'sweetalert2'

export default function AddTask() {
    const { getFactCat, filterTaskByDesc } = useContext(TaskContext)

    // Variable de apertura del modal de cración de tareas
    const [openModal, setOpenModal] = useState(false)

    // Cierra el modal de creación de tareas
    const closeCreateModal = () => {
        setOpenModal(false)
    }

    // Número de Fact Cat
    const [number, setNumber] = useState("1")

    // Variable de apertura del modal de número de FactCats
    const [factCat, setFatCat] = useState(false)

    // Cierra el modal de número de FactCats
    const closeFactCat = () => {
        setFatCat(false)
    }

    // Validar número
    const validateNum = (num) => {
        if (num.length <= 3 && num !== "0") {
            setNumber(num.match(/[0-9]*/)[0])
        }
    }

    // Verifica si la opciín de filtrado es valida
    const validateFilter = (e) => {
        const { value } = e.target // Se extrae el valor seleccionado en el filtro
        if (value !== "0") {
            filterTaskByDesc(value)
            if (value === "reset") e.target.value = "0" // Reinicia el filtro
        }
    }

    // Mensaje de validación
    const msnEdit = {
        title: 'Added successfully ',
        text: `They were added: ${number} Facts Cats.`,
        icon: 'success',
        confirmButtonText: 'Ok!'      
    }

    const msnEmpty = {
        title: 'Empty input ',
        text: 'Please enter a number.',
        icon: 'error',
        confirmButtonText: 'Ok!'      
    }


    return (
        <div>

            <div className="options">
                <div className="add-options">
                    <h4>Add options</h4>
                    <button
                        className="add-btn"
                        onClick={() => setOpenModal(!openModal)}>
                        <h3>Add task</h3>
                    </button>

                    <button className="add-btn fact-cat"
                        onClick={() => setFatCat(!factCat)}>
                        <h3>Add fact cat</h3>
                    </button>
                </div>

                {/* Filtrado*/}
                <div className="add-options">
                    <h4>Filter Description: </h4>
                    <select name="filter" id="filter"
                        onChange={(e) => validateFilter(e)}>
                        <option value="0">--Select--</option>
                        <option value="[A-Z]">A to Z</option>
                        <option value="[Z-A]">Z to A</option>
                        <option value="reset">Reset</option>
                    </select>
                </div>
            </div>

            {/* Add modal*/}
            <FormTask
                openModal={openModal}
                closeModal={closeCreateModal}
                title={"Add Task"}
            />

            {/* Number Fact Cat */}
            <Modal
                className="modal sm-modal"
                isOpen={factCat}
                onRequestClose={closeFactCat}
            >
                <div className="head-card">
                    <header>Fact of the Cats</header>
                    <label
                        onClick={() => closeFactCat()}>
                        X
                    </label>
                </div>
                <div className="body-card">
                    <label htmlFor="number">
                        <h4>Number of fact cats:</h4>
                    </label>
                    <input
                        className="number"
                        type="text"
                        value={number}
                        onChange={(e) => validateNum(e.target.value)}>
                    </input>

                </div>
                <div className="footer-card">
                    <button className="add-btn fact-cat"
                        onClick={() => {
                            if (number !== "") {
                                getFactCat(number) // Envía el número de FactsCats ingresados
                                Swal.fire(msnEdit) // Alerta de confirmación
                            }else{
                                Swal.fire(msnEmpty) // Alerta numero vacio
                            }
                        }
                        }>
                        Add Facts Cat
                    </button>

                </div>


            </Modal>


        </div>
    )
}
