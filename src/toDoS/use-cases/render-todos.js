import { createToDoHTML } from "./create-todo-html";
import { Todo } from "../models/todo.model"

let element; 

/**
 * 
 * @param {String} elementId etiqueta donde renderizar los todos 
 * @param {Todo} toDos  
 */
export const renderToDos = ( ElementHTMLIDs, toDos = [] ) => {

    

    if (!element)
        element = document.querySelector(ElementHTMLIDs);

    if (!element) throw new Error(`Element ${ element } not found`);

    element.innerHTML = ''; 

    toDos.forEach( toDo => {
        element.append(createToDoHTML(toDo));
    });
};