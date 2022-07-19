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
      <NavBar
      imagen='256ecdb37473e2c19f1b6b65270f73af6e9d673abdecde0f293519283fe039ec516761-1fe1285bb26aaa586e16246304704393-640-0'
      producto='AURICULAR GAMER'
      descripcion='Auriculares Gamer Hyperx Cloud Stinger'/>
      <NavBar 
      imagen='AURICULAR WARZONE2'
      producto='AURICULAR PS4'
      descripcion='AURICULAR GAMER PARA PS4'
      />
    </div>
  );
}

export default App;
