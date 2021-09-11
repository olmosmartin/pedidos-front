import React from 'react'

export const IniciarSesionCard = () => {
    return (
        <div className="card">
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h5 class="card-title">Iniciar sesion</h5>

                <div className="form-floating w-100">
                    <input className="form-control"
                        type="email"
                        name="email"
                        id="InputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ingrese la dirección de email de su local"
                        //onChange={handleChangeEmail}
                        required
                    />
                    <label htmlFor="InputEmail1">Correo electrónico</label>
                </div>

                <div className="form-floating w-100 mt-3">
                    <input
                        type="password"
                        name="nombre"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="Ingrese contraseña"
                        //onChange={}
                        minLength="8"
                        required
                    />
                    <label htmlFor="floatingInput1">Ingrese contraseña</label>
                </div>

                <button type="submit" className="btn btn-danger mt-2">Comenzar</button>
            </div>
        </div>
    )
}
