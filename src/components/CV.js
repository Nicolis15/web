
import htmlLogo from '../resourse/htmlLogo.png'
import kotlinLogo from '../resourse/kotlinLogo.png'
import jetpackLogo from '../resourse/jetpackLogo.png'
import cssLogo from '../resourse/cssLogo.png'
import javascriptLogo from '../resourse/javascriptLogo.png'
import reactLogo from '../resourse/reactLogo.png'
import sqlLogo from '../resourse/sqlLogo.png'
import javaLogo from '../resourse/javaLogo.png'


export default function CV(){
    const stylePrincipal = {
        background : '#282c34',
        display : 'flex',
        height: '100vh',
        alignItems: 'center',
        flexDirection: 'column'
    }

    const styleTitulo = {
        width: '100%',
        display : 'flex',
        justifyContent: 'center',
        background : 'white',
        textAlign: 'center',
        padding : '5px'
    }   

    const contenedor = {
        display : 'flex',
        width : '100%',
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

    const contenedorIdioma = {
        background : 'white',
        width : '20%',
        display : 'flex',
        padding : '20px',
        margin : '20px',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '20px'
    }

    const contenedorTec = {
        width : '80%',
        background : 'white',
        display : 'flex',
        padding : '20px',
        margin : '20px',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '20px'
    }

    const styleImg = {
        width : '100px',
        maxWidth : '100px',
        padding : '10px'
    }
    return(
        <div style={stylePrincipal}>

            <div style={styleTitulo}>
                <h1>Nicolas Lis Cruz</h1>
            </div>

            <div style={contenedor}>
                <div style={objContenedor}> 
                    <h2>Perfil</h2>
                    <p>Soy un estudiante de ingeniería de sistemas en octavo semestre con una sólida base en desarrollo de software y un enfoque particular en el desarrollo móvil en el entorno Android. Poseo habilidades destacadas en Java y Kotlin, así como experiencia práctica en el uso de Android Studio para la creación de aplicaciones móviles con jetPack Compose. Mi conocimiento abarca desde la conceptualización de ideas hasta la implementación y prueba de soluciones robustas.</p>
                </div>
                <div style={objContenedor}> 
                    <h2>Objetivo profesional</h2>
                    <p>Busco oportunidades para aplicar y ampliar mis habilidades en el desarrollo móvil en un entorno dinámico. Estoy entusiasmado por contribuir a proyectos innovadores, aprender de profesionales experimentados y aportar al crecimiento de equipos de desarrollo.</p>
                </div>
            </div>

            <div style={contenedor}>

                <div style={contenedorIdioma}>
                    <h2>Idiomas</h2>
                    <ul>
                        <li>Español nativo</li>
                        <li>Ingles intermedio</li>
                        <li>Portugues basico</li>
                    </ul>
                </div>

                <div style={contenedorTec}>
                    <h2>Lenguajes y tecnologias</h2>

                    <div>
                        <img src={kotlinLogo} style={styleImg}/>
                        <img src={jetpackLogo} style={styleImg}/>
                        <img src={htmlLogo} style={styleImg}/>
                        <img src={cssLogo} style={styleImg}/>
                        <img src={javascriptLogo} style={styleImg}/>
                        <img src={reactLogo} style={styleImg}/>
                        <img src={sqlLogo} style={styleImg}/>
                        <img src={javaLogo} style={styleImg}/>
                    </div>

                </div>

            </div>

        </div>
    )
}