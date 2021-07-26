import React from 'react'
import Modal from "react-modal"

Modal.setAppElement('#root')

function FormTask({ title, openModal, closeModal }) {
    // Estilos de los modales
    const modalStyle = {
        content: {
            width: "50vw",
            minWidth: "250px",
            height: "25vh",
            margin: "20vh auto",
            padding: "0px",
            boxShadow: "1px 7px 14px rgba(0,0,0,0.3)"
        }
    }

    return (
        <Modal
            style={modalStyle}
            isOpen={openModal}
            onRequestClose={closeModal}>
            <div className="form-card" >
                <nav>
                    <ul>
                        {title}
                    </ul>
                    <ul id="x-modal">
                        X
                    </ul>
                </nav>



            </div>

            <form>

            </form>

        </Modal>
    )
}

export default FormTask
