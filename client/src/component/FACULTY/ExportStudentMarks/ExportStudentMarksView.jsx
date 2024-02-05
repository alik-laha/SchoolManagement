import {useEffect, useState} from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';



const ExportStudentMarksView= (props) => {

    const [view,setView]=useState("none")
    const [data,setData]=useState([])

    const [Class,setClass]=useState('none')
    const [ClassRegExam,setClassRegExam]=useState('none')
    const [ClassExam,setClassExam]=useState('none')
    const [ClassReg,setClassReg]=useState('none')
    


    useEffect(()=>{
        setData(props.data)
        console.log(data)

    },[props.data])

    useEffect(()=>{
      if(props.type==='cl_reg_ex')
      {
        setClass('none')
        setClassExam('none')
        setClassReg('none')
        setClassRegExam('block')
      }
      else if(props.type==='cl_reg')
      {
        setClass('none')
        setClassExam('none')
        setClassReg('block')
        setClassRegExam('none')
      }
      else if(props.type==='cl_ex'){
        setClass('none')
        setClassExam('block')
        setClassReg('none')
        setClassRegExam('none')
      }
      else if(props.type==='cl')
      {
        setClass('block')
        setClassExam('none')
        setClassReg('none')
        setClassRegExam('none')
      }


    },[props.type])


    // props.data.length>0
    useEffect(() => {
        if( props.view==="block" && props.view40==="block"){
            setView("block")
        }
        else {
            setView("none")
        }
    }, [props.data,props.view,props.view40]);

    // const clearTable = () => {
    //     if(hideView==='none')
    //     setData([]);
    //   };



      return(
        <div style={{display: view}}>
            ASS
            <table className="table-60" style={{display:ClassRegExam}}></table>
            <table className="table-60" style={{display:ClassReg}}></table>
            <table className="table-60" style={{display:ClassExam}}></table>
            <table className="table-60" style={{display:Class}}></table>

        
        
        </div>



      )
    
}
export default ExportStudentMarksView;