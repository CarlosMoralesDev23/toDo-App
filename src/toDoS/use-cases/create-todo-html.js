import { Todo } from "../models/todo.model";


/**
 * 
 * @param {Todo} toDo 
 * @returns 
 */
export const createToDoHTML = ( toDo )=> {

    const { done, description, id } = toDo; 

    if ( !toDo ) throw new Error(' A TODO object is required')

    const html = `
            <div class="view">
                <input class="toggle" type="checkbox" ${ done ? 'checked': ''} >
                <label> ${ description } </label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">`;

    const  liElement = document.createElement('li');
    liElement.innerHTML = html
    liElement.setAttribute('data-id', id)
    if( done )
    liElement.classList.add('completed')

    return liElement

}