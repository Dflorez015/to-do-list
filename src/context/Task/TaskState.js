import React, { useReducer } from 'react'
import TaskReducer from "./TaskReducer"
import TaskContext from './TaskContext'
import axios from 'axios'

const TaskState = (props) => {
    // Estado inicial de la lista de tareas
    const initialState = {
        tasks: [],
        selectedTask: null
    }

    // Reducer que ayuda con la manipulación del estado
    const [state, dispatch] = useReducer(TaskReducer, initialState)

    // Agrega una tarea nueva a la lista
    const addTask = (description) => {
        dispatch({
            type: "ADD_TASK",
            payload: description
        })
    }

    // Agrega un hecho aleatorio de los gatos por medio de una API REST
    const getFactCat = async () => {

        let res_api = await axios.get("https://catfact.ninja/fact?max_length=300")
            .then(res => res)

        let payload = [res_api.data.fact]
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

            console.log(state, removeList);

        dispatch({
            type: "REMOVE_TASK",
            payload: removeList
        })

    }

    return (
        <TaskContext.Provider value={{
            tasks: state.tasks,
            selectedTask: state.selectedTask,
            addTask,
            removeTask,
            getFactCat,
            editTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskState