import React from "react";

const style = {
    background : 'white',
    display : 'flex',
    minWidth : '60%',
    padding : '30px',
    flexDirection : 'column',
    alignItems: 'center',
    justifyContent : 'center',
    borderRadius : '20px',
    margin : '40px'
}

export default function CardBlog(props){
    return(
        <div style={style}>
            <h1>{props.titulo}</h1>
            <h3>{props.fecha}</h3>
            <p>{props.contenido}</p>
        </div>
    )
}