
import { Todo } from "../toDoS/models/todo.model"

const Filters = {

    All : 'all',
    Completed : 'Completed',
    Pending : 'Pending'
}


const state = {
    todos: [ 
        new Todo ( 'Piedra del alma' ),
        new Todo ( 'Piedra del infinito' ),
        new Todo ( 'Piedra del tiempo' ),
        new Todo ( 'Piedra del espacio' ),
    ],
    filter: Filters.All,
}


const initStore = ()=> {
    console.log( state )

    console.log( 'InitStore 🍉' )

}


export default {
    initStore,
}