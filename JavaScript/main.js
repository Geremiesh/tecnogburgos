// let productos = [
//     ["Auriculares", 25, 1990],
//     ["Cargadores", 12, 3250],
//     ["Cables", 42, 1290],
// ];

// function proximoFila(array, elemento) {
//     array.push(elemento);
//     return array.shift();
// }

// let miArray = [1, 2, 3, 4, 5];

// console.log("Antes: " + JSON.stringify(miArray));

// console.log(proximoFila(miArray,7));

// console.log("despues: " + JSON.stringify(miArray));

function Saludo (props) {
    return <h1>Hola, {props.nombre}</h1>
}