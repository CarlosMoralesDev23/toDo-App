import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderToDos } from "./use-cases";

const ElementIDs = {
    TodoList : '.todo-list',
}

/**
 *
 * @param {String} elementId
 */
export const App = (elementId) => {
    const displayTodo = () => {
        const toDos = todoStore.getToDos(todoStore.getCurrentFilter());
        renderToDos( ElementIDs.TodoList, toDos );
    };

    (() => {
        const divApp = document.createElement("div");
        divApp.innerHTML = html;
        document.querySelector(elementId).append(divApp);
        displayTodo();
    })();
};

//TODO revisar que pasa si coloco ese html directamente a #app
