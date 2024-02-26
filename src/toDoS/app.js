import html from "./app.html?raw";


/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId )=>{

    ( ()=>{
        const divApp = document.createElement( 'div' );
        divApp.innerHTML = html;
        document.querySelector( elementId ).append( divApp )
    })();

}