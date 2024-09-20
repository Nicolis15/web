import CardBlog from "./BlogCard"

export default function(){
    const styleTitulo = {
        display : 'flex',
        justifyContent: 'center',
        background : 'white',
        textAlign: 'center',
        padding : '5px'
    }   

    const contenedor = {
        display : 'flex',
        flexDirection: 'column',
        justifyContent : 'center',
        alignItems: 'center',
        minWidth : '100%',
    }
    const subContenedor = {
        display : 'flex',
        flexDirection: 'column',
        justifyContent : 'center',
        alignItems: 'center',
        maxWidth : '70%',
    }

    return(
        <div>
            <div style={styleTitulo}>
                <h1>Blog Nicolas Lis Cruz</h1>
            </div>

            <div style={contenedor}>
                <div style={subContenedor}>
                    <CardBlog titulo='Primer componente' fecha='9/19/2024' contenido='Este es el primer comentario de mi blog, hago este blog con el fin de escribir ocacionalmente cosas sobre mi, mi personalidad, eseñanzas y demas cosas que coincidere interesantes o de mi interes, este es el primer comentario que realizo.'/>
                    
                </div>
            </div>
            
        </div>
    )
}