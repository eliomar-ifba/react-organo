import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = ({label, placehold, isObrigatorio, texto, aoDigitar}) => {


    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={texto} 
                onChange={aoDigitar} 
                required={isObrigatorio} 
                type="text" placeholder={placehold}/>
        </div>
    )
}


 export default CampoTexto;