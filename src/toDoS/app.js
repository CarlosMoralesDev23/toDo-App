import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderToDos } from "./use-cases";

const ElementHTMLIDs = {
    TodoList : '.todo-list',
}

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
};

//TODO revisar que pasa si coloco ese html directamente a #app
