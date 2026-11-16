import Square from './Square';
export default function Board(props){
    return
    <div>
        {
          props.values.map((rowValues, rowIndex)=>{
            let row = rowValues.map((value, columnIndex)=>{
              return <Square rowIndex={index} columnIndex={columnIndex} boardClick={props.appClick} key={index + "-"+ columnIndex} value={value}/>
            });
            return <div key={"row" + rowIndex}>{row}</div>
          })
        }
    </div>
}