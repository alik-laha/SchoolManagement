import {useEffect, useState} from "react";

const ViewFeePayment =(props)=>{
    const [view,setView]=useState("none")
    useEffect(() => {
        if(props.view==="block" && props.data.length>0){
            setView("block")
        }
        else{
            setView("none")
        }
    }, [props.view,props.data]);

    return(
        <div style={{display:view}}>
            <h1>NoNe</h1>
        </div>
    )
}
export default ViewFeePayment