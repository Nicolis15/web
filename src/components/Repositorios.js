import React from 'react';
import RepositoryCard from './RepositoryCard';

const styleTitulo = {
    display : 'flex',
    justifyContent: 'center',
    background : 'white',
    textAlign: 'center',
    padding : '5px'
}   

const styleGrid = {
    display : 'flex',
    width : '100%',

}

const columna = {
    maxWidth : '50%'
}




export default function Repositorio(){
    return(
        <div className = 'contenedor-principal'>
            <div style={styleTitulo}>
                <h1>Repositorios</h1>
            </div>
            <div style={styleGrid}>

                <div style={columna}>
                <RepositoryCard 
                    titulo = 'Parchelo' 
                    contenido='Parchelo es una aplicación móvil desarrollada en Kotlin utilizando Jetpack Compose. Se implementó un sistema de verificación con Firebase para garantizar la autenticidad de los usuarios. Trabajo periódicamente en la app, agregando nuevas funcionalidades y mejorando mis habilidades de desarrollo.'
                    referencia= 'https://github.com/Nicolis15/Parchelo2'/>
                <RepositoryCard 
                    titulo = 'Pagina web' 
                    contenido='En este repositorio, encontrarás el código fuente del sitio web actual, desarrollado en JavaScript con React. Puedes explorar los diferentes componentes y secciones implementadas, así como las diversas funcionalidades del sitio.'
                    referencia= 'https://github.com/Nicolis15/web'/>
                <RepositoryCard
                    titulo='Apuntes React'
                    contenido= 'Este repositorio contiene mis apuntes sobre el aprendizaje de React. A lo largo de cada clase, podrás explorar lo que he implementado y las lecciones que he aprendido de uno de los cursos que realicé. He organizado los apuntes de manera que reflejan tanto los conceptos fundamentales como las prácticas que he llevado a cabo.'
                    referencia= 'https://github.com/Nicolis15/Apuntes-React'/>
                </div>

                <div style={columna}>
                    <RepositoryCard 
                        titulo = 'Little Lemon' 
                        contenido='Little Lemon es una aplicación móvil utilizando Kotlin y Jetpack Compose, integrando APIs con la biblioteca Ktor. Este proyecto me permitió implementar una interfaz de usuario moderna y receptiva, optimizando la experiencia del usuario. Trabajé en la gestión de datos desde el servidor a través de llamadas a la API, asegurando una interacción fluida y eficiente.'
                        referencia= 'https://github.com/Nicolis15/Little-Lemon'/>
                    <RepositoryCard
                        titulo = 'Apuntes React Native'
                        contenido= 'Este repositorio contiene mis apuntes sobre el aprendizaje de React Native. A lo largo de cada clase, podrás explorar lo que he implementado y las lecciones aprendidas de los cursos que he realizado. He organizado los apuntes para reflejar tanto los conceptos fundamentales como las prácticas que he llevado a cabo en el desarrollo de aplicaciones móviles.'
                        referencia= 'https://github.com/Nicolis15/Apuntes-React-Native'
                    />
                    <RepositoryCard
                        titulo = 'Apuntes JavaScript'
                        contenido = 'Este repositorio contiene mis apuntes sobre JavaScript, que he recopilado mientras aprendía como estudiante. En cada sección, puedes ver lo que he implementado y las lecciones que he aprendido de los cursos que realicé. Espero que estos apuntes sean útiles para otros estudiantes interesados en aprender JavaScript.'
                        referencia = 'https://github.com/Nicolis15/JavaScript-Apuntes-y-codigo'
                    />
                </div>
            </div>
        </div>

    )
}