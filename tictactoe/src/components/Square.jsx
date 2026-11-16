const squareStyle ={
    height: "100px", 
    width: "100px"
}

export default function Square(props){

    function squareClick(){
        if(props.value==="-"){
            props.boardClixk(props.rowIndex, props.columnIndex)
        }
    }

    return <button style={squareStyle} onClick={props.boardClixk(props.rowIndex, props.columnIndex)} className={props.value=== "-" ? "clickable":"no_clickable"}>{props.value}</button>
}
