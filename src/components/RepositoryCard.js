

const objContenedor = {
    background : 'white',
    display : 'flex',
    padding : '20px',
    margin : '20px',

    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '20px'    
}

export default function RepositoryCard(props){
    return(
        <div style={objContenedor}> 
            <h2>{props.titulo}</h2>
            <p>{props.contenido}</p>
            <a href={props.referencia}>Click para ir al repositorio</a>
        </div>
    )
}