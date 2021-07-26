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

    }

    // Remueve una tarea de la lista
    const removeTask = () => {

    }

    // Agrega un hecho aleatorio de los gatos por medio de una API REST
    const getFactCat = async () => {

        let res_api = await axios.get("https://catfact.ninja/fact")
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

    return (
        <TaskContext.Provider value={{
            tasks: state.tasks,
            selectedTask: state.selectedTask,
            addTask,
            removeTask,
            getFactCat
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskState