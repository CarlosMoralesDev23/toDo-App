import { createToDoHTML } from "./create-todo-html";
import { Todo } from "../models/todo.model"


/**
 * 
 * @param {String} elementId etiqueta donde renderizar los todos 
 * @param {Todo} toDos  
 */
export const renderToDos  = ( elementId, toDos = [ ] )=> {

    //TODO referencia
    const element = document.querySelector( elementId )


    toDos.forEach( toDo => {

        element.append( createToDoHTML(toDo))
        
    });
}