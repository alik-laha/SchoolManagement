import {useEffect, useState} from "react";

const StudentFeePaymentEntry = (props) => {
    const [view,setView]=useState("none")
    const [data,setData]=useState([])

    useEffect(() => {
        if(props.view==="block" && props.data.length>0){
            setView("block")
        }
        else{
         setView("none")
        }
    }, [props.view,props.data]);

    useEffect(() => {
        setData(props.data)
    },[props.data])


    return(
        <div style={{display:view}}>
            <h1>Alik laha</h1>
        </div>
    )
}
export default StudentFeePaymentEntry;