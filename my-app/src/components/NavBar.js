import React from 'react';
import '../style/NavBar.css';

function NavBar() {
    return (

    <div className='contenedor-header'>
      <img className='imagen-header' src={require('../Imagenes/AURICULAR WARZONE2.jpeg')} alt='imagen' />
      <div className='contenedor-texto-header'>
        <p className='producto-header'>Auricular gamer</p>
        <p className='descripcion-header'>Auricular para pc y ps4</p>
        <button className='boton-comprar'>COMPRAR</button>
      </div>
    </div>
    );
}




export default NavBar;
