import './style.css'
import { App } from './src/toDoS/app';
import todoStore from './src/store/todo.store'; 

// todoStore.initStore() //  esto imprime los estados

App('#app')


/*
En el main importo 
el css,    
la aplicacion  que estaen el archivo App, 
todoStore que tiene a todas las funciones de manejo del los todo. 

initStore() imprime todo el state y la sandia. 


y finalmente trae la funcion App del archivo app,
y le pasa el elemento '#app' para renderizar 
*/