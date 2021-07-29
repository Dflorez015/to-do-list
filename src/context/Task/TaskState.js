import React, { useReducer } from 'react'
// Reducer
import TaskReducer from "./TaskReducer"
// Context
import TaskContext from './TaskContext'
// Axios, ayuda en las peticiones con la API
import axios from 'axios'

const TaskState = (props) => {
    // Estado inicial de la lista de tareas
    const initialState = {
        tasks: []
    }

    // Reducer que ayuda con la manipulación del estado
    const [state, dispatch] = useReducer(TaskReducer, initialState)

    // Agrega una tarea nueva a la lista
    const addTask = (description) => {
        // Transforma la primera letra en mayúscula 
        let payload = description[0].toUpperCase()
        for (let i = 1; i < description.length; i++) {
            payload += description[i];
        }

        dispatch({
            type: "ADD_TASK",
            payload: payload
        })
    }

    // Agrega un número n de hechos aleatorios de los gatos por medio de una API REST
    const getFactCat = async (num) => {

        let res_api = await axios.get(`https://catfact.ninja/facts?limit=${num}&max_length=300`)
            .then(res => res)

        let payload = res_api.data.data

        /*
        Envía la función que se ejecutará con su respectivo dato (payload)
        y actualiza la lista (state)
        */
        dispatch({
            type: "GET_FACT_CAT",
            payload: payload
        })
    }

    // Edita una tarea de la lista
    const editTask = (id, desc) => {
        let indexEdit = state.tasks.map(
            (task) => { return task.id })
            .indexOf(id) // Devuelve el indice de elemento cuyo id sea equivalente al ingresado
        let payload = state.tasks
        payload[indexEdit].desc = desc
        dispatch({
            type: "EDIT_TASK",
            payload: payload
        })

    }

    // Remueve una tarea de la lista
    const removeTask = (id) => {
        let removeList = state.tasks.filter(
            (task) => task.id !== id) // Quita la tarea si el id es iquivalente al ingresado

        dispatch({
            type: "REMOVE_TASK",
            payload: removeList
        })

    }

    // Filtra la lista por su descripción desde la A hasta la Z o viceversa
    const filterTaskByDesc = (type) => {
        let payload
        switch (type) {
            case "[A-Z]":
                // Se ordena de menor a mayor
                payload = state.tasks.sort((a, b) => {
                    return a.desc > b.desc // Compara descripciones y ordena de la A hasta la Z
                })
                dispatch({
                    type: "FILTER_DESC",
                    payload: payload
                })

                break

            case "[Z-A]":
                // Se ordena de mayor a menor
                payload = state.tasks.sort((a, b) => {
                    return a.desc < b.desc // Compara descripciones y ordena de la Z hasta la A
                })
                dispatch({
                    type: "FILTER_DESC",
                    payload: payload
                })

                break

            case "reset":
                // Se ordena del más antigüo al más nuevo
                payload = state.tasks.sort((a, b) => {
                    return a.id > b.id // Compara id y ordena de menor a mayor
                })
                dispatch({
                    type: "FILTER_DESC",
                    payload: payload
                })

                break

            default:
                break
        }

    }

    return (
        <TaskContext.Provider value={{
            tasks: state.tasks,
            addTask,
            removeTask,
            getFactCat,
            editTask,
            filterTaskByDesc
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskState