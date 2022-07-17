import React from 'react';
import '../style/NavBar.css';

function NavBar() {
    return (

    <div className='contenedor-navbar'>
            <p className='descuento-nav'>DESCUENTO DEL %10 ABONANDO EFECTIVO/TRANSFERENCIA. ENVÍO GRATIS A SUCURSAL DE CORREO ARGENTINO EN
                COMPRAS
                SUPERIORES A $6000</p>
                <ul className='contenedor-palabras'>
                <li>INICIO</li>
                <li>PRODUCTOS</li>
                <li>CONTACTO</li>
                </ul>
            <div className='container card'>
                <img src='https://http2.mlstatic.com/D_NQ_NP_783184-MLA47545708641_092021-O.webp' className='imagen-logo' alt=''></img>
                <div className='card-body'>
                    <h5>AURICULARES GAMER</h5>
                <a href='#' className='btn btn-success'>COMPRAR</a>
                </div>
            </div>
    </div>
    );
}












export default NavBar;
