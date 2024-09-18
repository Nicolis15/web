import React from 'react';
import perfil from '../resourse/Perfil.jpg'
import Github from '../resourse/github.png'
import linkedin from '../resourse/linkedin.png'
import cvlogo from '../resourse/cvlogo.png'
import Hoby from '../resourse/hobys.png'
import Blog from '../resourse/blog.png'
import { useNavigate } from 'react-router-dom';

const redirigirLink = () =>{
    window.location.href = 'https://www.linkedin.com/in/nicolasliscruz/';
}

const redirigirgit = () =>{
    window.location.href = 'https://github.com/Nicolis15';
}

export default function Principal(){
    const navegar = useNavigate();

    const navCv = () => {
      navegar('/cv');
    };
    return(
        <div className = 'contenedor-principal'>
            <div className = 'contenedor-superior'>
                <h1>Nicolas Lis Cruz</h1>
                <img src = {perfil} alt='Foto de perfil'/>
            </div>

            <div className='contenedor-inferior'>
                <div className='contenedor-cartas'>
                    <div className='carta1' onClick={navCv}>
                        <h3>Hoja de vida CV</h3>
                        <img src={cvlogo}/>
                    </div>
                    <div className='carta2'>
                        <h3>Repositorios de github</h3>
                        <img src={Github}/>
                    </div>
                    <div className='carta3'>
                        <h3>Mis hobbys</h3>
                        <img src={Hoby}/>
                    </div>
                    <div className='carta4'>
                        <h3>Blog personal</h3>
                        <img src={Blog}/>
                    </div>
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

