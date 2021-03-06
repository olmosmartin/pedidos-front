import React from 'react'


export const Footer = () => {
    return (
        <footer className="text-center text-white mt-5" style={{backgroundColor: 'rgb(196,21,8)'}}>
        {/* Grid container */}
        <div className="container p-4">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
              <h5 className="text-uppercase mb-0">Nosotros</h5>
                <li>
                <a style={{ color: '#000' }} href='/about'>Acerca de...</a>
                </li>
                <li>
                <a style={{ color: '#000' }} href='/legales'>Terminos y condiciones</a>
                </li>
                <li>
                  {//<a href="#!" className="text-dark">Link 1</a>
                  }
                </li>
                <li>
                  {//<a href="#!" className="text-dark">Link 3</a>
                  }
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Repartidores</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/repartidorRegistro" className="text-dark">Registrarse como repartidor</a>
                </li>
                <li>
                  {//<a href="#!" className="text-dark">Link 2</a>
                  }
                </li>
                <li>
                  {//<a href="#!" className="text-dark">Link 3</a>
                  }
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Negocios</h5>
              <ul className="list-unstyled">
                <li>
                <a href="/negocioRegistro" className="text-dark">Registrarse como negocio</a>
                </li>
            
              </ul>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          ?? 2021 Copyright:
          <p>Grupo C</p>
        </div>
        {/* Copyright */}
      </footer>
    )
}
