
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
        padding : '5px'
    }   

    const contenedor = {
        display : 'flex',
        with : '100%',
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
                    <h2>Objetivo profecional</h2>
                    <p>Busco oportunidades para aplicar y ampliar mis habilidades en el desarrollo móvil en un entorno dinámico. Estoy entusiasmado por contribuir a proyectos innovadores, aprender de profesionales experimentados y aportar al crecimiento de equipos de desarrollo.</p>
                </div>
            </div>


        </div>
    )
}