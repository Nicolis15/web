import React from 'react';
import perfil from '../resourse/Perfil.jpg'
import Github from '../resourse/github.png'
import linkedin from '../resourse/linkedin.png'


const redirigirLink = () =>{
    window.location.href = 'https://www.linkedin.com/in/nicolasliscruz/';
}

const redirigirgit = () =>{
    window.location.href = 'https://github.com/Nicolis15';
}

export default function Principal(){
    return(
        <div className = 'contenedor-principal'>
            <div className = 'contenedor-superior'>
                <h1>Nicolas Lis Cruz</h1>
                <img src = {perfil} alt='Foto de perfil'/>
            </div>

            <div className='contenedor-inferior'>
                <div className='contenedor-cartas'>
                    <div className='carta1'></div>
                    <div className='carta2'></div>
                    <div className='carta3'></div>
                    <div className='carta4'></div>
                </div>
            </div>
            <footer className='footer-principal'>
                <div>
                    <img src={Github} onClick={redirigirgit}/>
                    <h3 onClick={redirigirgit}>Github</h3>
                </div>
                <div>
                    <img src={linkedin} onClick={redirigirLink}/>
                    <h3 onClick={redirigirLink}>Linkedin</h3>
                </div>
            </footer>

        </div>
    );
}

