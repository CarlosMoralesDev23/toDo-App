import { Todo } from "../models/todo.model";



export const createToDoHTML = ( toDo )=> {

    if ( !Todo ) throw new Error(' A TODO object is required')

    const html = `<h3> ${toDo.description} </h3> `

    const  liElement = document.createElement('li');

    liElement.innerHTML = html

    return liElement

}