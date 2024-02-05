import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



const ExportStudentMarksView= (props) => {

    const [view,setView]=useState("none")
    const [data,setData]=useState([])

    useEffect(()=>{
        setData(props.data)
        console.log(data)

    },[props.data])

    // props.data.length>0
    useEffect(() => {
        if( props.view==="block" && props.view40==="block"){
            setView("block")
        }
        else {
            setView("none")
        }
    }, [props.data,props.view,props.view40]);

    const clearTable = () => {
        if(hideView==='none')
        setData([]);
      };



      return(
        <div style={{display: view}}>
            ASS
            <table className="table-60"></table>
        
        
        </div>



      )
    
}
export default ExportStudentMarksView;