import { Todo } from "../models/todo.model";


/**
 * 
 * @param {Todo} toDo 
 * @returns 
 */
export const createToDoHTML = ( toDo )=> {

    if ( !toDo ) throw new Error(' A TODO object is required')

    const html = `
        <li class="completed" data-id="abc">
            <div class="view">
                <input class="toggle" type="checkbox" ${ toDo.done ? 'checked': ''} >
                <label> ${ toDo.description } </label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>`;

    const  liElement = document.createElement('li');
    liElement.innerHTML = html
    liElement.setAttribute('data-id', toDo.id)
    if( Todo.done )
    liElement.classList( 'completed ')

    return liElement

}