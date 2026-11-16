const squareStyle ={
    height: "100px", 
    width: "100px"
}

export default function Square(props){
    return <button style={squareStyle} onClick={props.boardClixk()}>{props.value}</button>
}