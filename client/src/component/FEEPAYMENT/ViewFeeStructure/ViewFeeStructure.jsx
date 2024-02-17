import {useEffect, useState} from "react";


const ViewFeeStructure = (props) => {
   const[view,setView]=useState("none")
   const [feeStructure,setFeeStructure]=useState([])
console.log(props.view40)
    useEffect(() => {
        if (props.view === "block"&& props.view40==="block") {
            setView("block")
        }
        else {
            setView("none")
        }
    }, [props.view,props.data,props.view40]);
    return(
        <div style={{display:view}}>
            <h1>View Fee Structure</h1>
        </div>
    )
}
export default ViewFeeStructure;