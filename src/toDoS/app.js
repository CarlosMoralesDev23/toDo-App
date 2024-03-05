import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderToDos } from "./use-cases";

const ElementHTMLIDs = {
    TodoList: ".todo-list",
    NewToDoInput: "#new-todo-input",
};

/**
 *
 * @param {String} elementId
 */
export const App = (elementIdRenderizaFuncionApp) => {
    const displayTodo = () => {
        const toDos = todoStore.getToDos(todoStore.getCurrentFilter());
        console.log(toDos)

        
        renderToDos( ElementHTMLIDs.TodoList, toDos );
    };

    (() => {
        const divApp = document.createElement("div");
        divApp.innerHTML = html;
        document.querySelector(elementIdRenderizaFuncionApp).append(divApp);
        displayTodo();
    })();


    // Referencias HTML
    const newDescriptionInput = document.querySelector( ElementHTMLIDs.NewToDoInput )

    // Listeners
    newDescriptionInput.addEventListener('keyup', ( event ) => {
        console.log(event)
        console.log(event.target.value)

        if ( event.keyCode !== 13 ) return;
        if ( event.target.value.trim().length === 0 ) return; 

        todoStore.addTodo( event.target.value ); 
        displayTodo();
        event.target.value = ' '
    })




    
};

//TODO revisar que pasa si coloco ese html directamente a #app
