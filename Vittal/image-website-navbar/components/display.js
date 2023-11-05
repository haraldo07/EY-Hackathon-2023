function Display(props){
    return(
        <h1 style={{ color: props.color , background: props.bg, fontSize:props.size}}>{props.content}</h1>
    )
}

export default Display;