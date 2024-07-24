import React from 'react'
import redes from '../imagenes/redes.jpg'

const CompFooter = () => {
    return (
        <div>

            <div className='card-body' >
                <h5 className='card-title'>Direccion calle 93 #62-12 - Bogota</h5>
                <p className='card-text'> correo industrialsas@gmail.com - telefonos (601) 3839267 -  3177778877</p>
                <img src={redes} className='App-logo1' alt='logo' />
            </div>

            <div className="card-footer text-muted">
              lunes  - viernes horario 8am - 6pm
            </div>

        </div>
    )
}

export default CompFooter;