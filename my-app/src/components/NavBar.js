import React from 'react';
import '../style/NavBar.css';

function NavBar(props) {
    return (
      <div className='contenedor-principal-header'>
        <div className='contenedor-header'>
          <img className='imagen-header' src={require(`../Imagenes/${props.imagen}.jpeg`)} alt='imagen' />
          <div className='contenedor-texto-header'>
          <p className='producto-header'>{props.producto}</p>
          <p className='descripcion-header'>{props.descripcion}</p>
          <button className='boton-comprar'>COMPRAR</button>
          </div>
        </div>
    </div>
    );
}




export default NavBar;
