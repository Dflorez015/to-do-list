// Funciones de la clase TaskState
import { ADD_TASK, GET_FACT_CAT, REMOVE_TASK } from '../types'

export default function (state, action) {
    // payload: datos que están pasando, type: función que se desa realizar
    const { payload, type } = action

    // Retorna el tamaño de la lista de tareas
    const getLenght = () => {
        return `${state.tasks.length}`
    }

    switch (type) {
        case GET_FACT_CAT:
            return {
                ...state,
                tasks: state.tasks.concat([ // El valor entrante se agrega a la lista
                    [
                        getLenght(), // El tamaño se usa como id, se llama de la forma task[0] 
                        payload // Descripción, se llama de la forma task[1]
                    ]
                ]
                )
            }
    }

}