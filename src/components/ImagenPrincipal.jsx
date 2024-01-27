import React from "react";
import LogoRockasus from '../img/logo-rockasus-5.png'
import '../css/ImagenPrincipal.css'


function ImagenPrincipal() {
  return <div className="logo-contenedor">
    <img 
    className="logo"
    src={LogoRockasus} alt="Logo de Rockasus" />
  </div>;
}

export default ImagenPrincipal;
