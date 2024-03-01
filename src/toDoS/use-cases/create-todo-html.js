import { Todo } from "../models/todo.model";



export const createToDoHTML = ( toDo )=> {

    if ( !Todo ) throw new Error(' A TODO object is required')

    const html = `<h2> ${Todo.description} </h2>} `

    const  liElement = document.createElement('li');

    liElement.innerHTML = html

    return liElement

}