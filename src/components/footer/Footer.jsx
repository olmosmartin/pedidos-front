import React from 'react'

export const Footer = () => {
    return (
        <footer className="text-center text-white" style={{backgroundColor: '#dc4935'}}>
        {/* Grid container */}
        <div className="container p-4">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                <a style={{ color: '#000' }} href='https://www.freepik.es/fotos/comida'>Foto de Comida creado por timolina - www.freepik.es</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 4</a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-dark">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 4</a>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-dark">Link 1</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 2</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 3</a>
                </li>
                <li>
                  <a href="#!" className="text-dark">Link 4</a>
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
          © 2020 Copyright:
          <p>algo</p>
        </div>
        {/* Copyright */}
      </footer>
    )
}