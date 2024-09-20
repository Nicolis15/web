import React from 'react';

const styleTitulo = {
    display : 'flex',
    justifyContent: 'center',
    background : 'white',
    textAlign: 'center',
    padding : '5px'
}   

const objContenedor = {
    background : 'white',
    display : 'flex',
    padding : '20px',
    margin : '20px',
    maxWidth : '50%',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '20px'    
}

const styleGrid = {
    display : 'flex',
    width : '100%',

}




export default function Repositorio(){
    return(
        <div className = 'contenedor-principal'>
            <div style={styleTitulo}>
                <h1>Repositorios</h1>
            </div>
            <div style={styleGrid}>
                <div style={objContenedor}> 
                    <h2>Parchelo</h2>
                    <p>Parchelo es una aplicación móvil desarrollada en Kotlin utilizando Jetpack Compose. Se implementó un sistema de verificación con Firebase para garantizar la autenticidad de los usuarios. Trabajo periódicamente en la app, agregando nuevas funcionalidades y mejorando mis habilidades de desarrollo.</p>
                    <a href="https://github.com/Nicolis15/Parchelo2">Click para ir al repositorio</a>
                </div>

                <div style={objContenedor}> 
                    <h2>Pagina web</h2>
                    <p>En este repositorio, encontrarás el código fuente del sitio web actual, desarrollado en JavaScript con React. Puedes explorar los diferentes componentes y secciones implementadas, así como las diversas funcionalidades del sitio.</p>
                    <a href="https://github.com/Nicolis15/web">Click para ir al repositorio</a>
                </div>
            </div>

            <div style={styleGrid}>
                <div style={objContenedor}> 
                    <h2>Apuntes React</h2>
                    <p>Este repositorio contiene mis apuntes sobre el aprendizaje de React. A lo largo de cada clase, podrás explorar lo que he implementado y las lecciones que he aprendido de uno de los cursos que realicé. He organizado los apuntes de manera que reflejan tanto los conceptos fundamentales como las prácticas que he llevado a cabo.</p>
                    <a href="https://github.com/Nicolis15/Apuntes-React-Native">Click para ir al repositorio</a>
                </div>
                <div style={objContenedor}> 
                    <h2>Apuntes JavaScript</h2>
                    <p>Este repositorio contiene mis apuntes sobre JavaScript, que he recopilado mientras aprendía como estudiante. En cada sección, puedes ver lo que he implementado y las lecciones que he aprendido de los cursos que realicé. Espero que estos apuntes sean útiles para otros estudiantes interesados en aprender JavaScript.</p>
                    <a href="https://github.com/Nicolis15/JavaScript-Apuntes-y-codigo">Click para ir al repositorio</a>
                </div>
            </div>

        </div>

    )
}