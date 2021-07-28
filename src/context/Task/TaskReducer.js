// Funciones de la clase TaskState
import { ADD_TASK, GET_FACT_CAT, REMOVE_TASK, EDIT_TASK } from '../types'

export default function (state, action) {
    // payload: datos que están pasando, type: función que se desa realizar
    const { payload, type } = action

    // Retorna el tamaño de la lista de tareas (se usa para darle un id)
    const getLenght = () => {
        return state.tasks.length
    }


    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, 
                {
                    id: getLenght(), // El tamaño se usa como id, se llama de la forma task[0] 
                    desc: payload // Descripción, se llama de la forma task[1]
                }
                ]
            }
        case GET_FACT_CAT:
            return {
                ...state,
                tasks: [...state.tasks, 
                {
                    id: getLenght(), // El tamaño se usa como id, se llama de la forma task[0] 
                    desc: payload // Descripción, se llama de la forma task[1]
                }
                ]

            }
        case EDIT_TASK:
            return {
                ...state,
                tasks: payload
            }

        case REMOVE_TASK:
            return {
                ...state,
                tasks: payload
            }

        default: return state
    }
}
