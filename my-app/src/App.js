import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <div>
            <p className='descuento-nav container'>DESCUENTO DEL %10 ABONANDO EFECTIVO/TRANSFERENCIA. ENVÍO GRATIS A SUCURSAL DE CORREO ARGENTINO EN
                COMPRAS
                SUPERIORES A $6000</p>
              <div>
                <ul className='contenedor-solapa'>
                <img className='imagen-navbar' src={require('./Imagenes/tecno.png')} alt='Tecnog-logo'/>
                  <li>INICIO</li>
                  <li>PRODUCTOS</li>
                  <li>CONTACTO</li>
                </ul>
              </div>
        </div>
      </div>
      <NavBar/>
    </div>
  );
}

export default App;
