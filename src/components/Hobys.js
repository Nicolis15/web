import gym from '../resourse/gym.mp4'
import viaje1 from '../resourse/viaje1.jpg'
import viaje2 from '../resourse/viaje2.jpg'
import viaje3 from '../resourse/viaje3.jpg'
import apex from '../resourse/apex.jpg'
import fornite from '../resourse/fornite.jpeg'
import minecraft from '../resourse/minecraft.jpg'
import ajedrez from '../resourse/ajedrez.jpg'

export default function Hobys(){
    const styleTitulo = {
        display : 'flex',
        justifyContent: 'center',
        background : 'white',
        textAlign: 'center',
        padding : '5px'
    }   

    const contenedorprincipal = {
        display : 'flex'
    }

    const contenedorSobre = {
        background : 'white',
        display : 'flex',
        padding : '20px',
        margin : '20px',
        maxWidth : '40%',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '20px'
    }
    const contenedorContenido = {
        display : 'flex',
        width : '50%'
    }

    const contenido = {
        background : 'white',
        display : 'flex',
        padding : '20px',
        margin : '20px',
        minWidth : '100%',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '20px'
    }

    const styleP ={
        fontSize : '18px',
    }

    const segundoContenedor = {
        display : 'flex',
        margin : '40px',
        gap : '10px',
        background : 'white',
        borderRadius: '20px',

    }

    const contenedorImagenes = {
        flex: '1',
        margin: '10px',
        justifyContent : 'center',
        alignItems: 'center'
    }

    const styleh1 = {
        textAlign: 'center'
    }

    const styleImg = {
        width: '60%',
        margin: '10px',
        objectFit: 'cover'
    }

    const divImagen = {
        display : 'flex',
        justifyContent : 'center',
        alignItems: 'center'
    }

    return(
        <div>
            <div style={styleTitulo}>
                <h1>Mis Hobbies</h1>
            </div>

            <div>
                <div style={contenedorprincipal}>
                    <div style={contenedorSobre}>
                        <h2>Sobre mi</h2>
                        <p style={styleP}>Soy una persona disciplinada que valora tanto la salud como el conocimiento. En mi tiempo libre, disfruto ir al gimnasio para mantenerme en forma y también me encanta viajar, explorando nuevos lugares y culturas. Aunque no soy de salir mucho, aprecio los momentos de relajación con mis amigos, donde compartimos risas y buenos momentos. También me gustan los videojuegos y jugar ajedrez, actividades que me permiten desconectar y mantener la mente activa. Siempre busco aprender cosas nuevas, por lo que dedicar tiempo a estudiar es una parte fundamental de mi vida. </p>
                    </div>

                    <div style ={contenedorContenido}>
                        <div style={contenido}>
                            <h2>Gimnasio</h2>
                            <video width="640" height="360" controls>
                                <source src={gym} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>

                <div style={segundoContenedor}>
                    <div style={contenedorImagenes}>
                        <h1 style={styleh1}>Viajes</h1>
                        <div style={divImagen}>
                            <img src={viaje1} style={styleImg}/>
                        </div>
                        <div style={divImagen}>
                            <img src={viaje2} style={styleImg}/>
                        </div>
                        <div style={divImagen}>
                            <img src={viaje3} style={styleImg}/>
                        </div>
                    </div>

                    <div style={contenedorImagenes}>
                        <h1 style={styleh1}>Videojuegos</h1>
                        <div style={divImagen}>
                            <img src={apex} style={styleImg}/>
                        </div>
                        <div style={divImagen}>
                            <img src={fornite} style={styleImg}/>
                        </div>
                        <div style={divImagen}>
                            <img src={minecraft} style={styleImg}/>
                        </div>
                    </div>

                    <div style={contenedorImagenes}>
                        <h1 style={styleh1}>Ajedrez</h1>
                        <div style={divImagen}>
                            <img src={ajedrez} style={styleImg}/>
                        </div>

                    </div>
                </div>

                

            </div>

        </div>
    )
}