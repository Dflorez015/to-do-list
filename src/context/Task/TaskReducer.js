// Funciones de la clase TaskState
import { ADD_TASK, GET_FACT_CAT, REMOVE_TASK, EDIT_TASK, FILTER_DESC } from '../types'

// eslint-disable-next-line
export default (state, action) => {
    // payload: datos que están pasando, type: función que se desa realizar
    const { payload, type } = action

    // Retorna el tamaño de la lista de tareas (se usa para darle un id)
    const getLenght = () => {
        return state.tasks.length
    }

    // Adapta el array de la API al del proyecto
    const addFactsCat = (facts) => {
        let id = getLenght()
        let arrayPayload = []
        for (let i = 0; i < facts.length; i++) {
            arrayPayload.push({
                id: id + i,  // El tamaño se usa como id
                desc: facts[i].fact // Descripción
            })
        }
        return arrayPayload
    }

    switch (type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks,
                {
                    id: getLenght(), // El tamaño se usa como id
                    desc: payload // Descripción
                }
                ]
            }
        case GET_FACT_CAT:
            return {
                ...state,
                tasks: state.tasks.concat( // Se adiere el payload a la lista de tareas
                    addFactsCat(payload)
                )
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
        
            case FILTER_DESC:
                return {
                    tasks: payload
                }

        default: return state
    }
}
