import {useState} from "react";

const CreateFeeSturcture = (props) => {
    const [Class,setClass]=useState("")

    return(
        <div style={{display:props.view}}>
           <form className="dashbrd-40-colm">
               <div>
                     <label>Class</label>
                     <input type="text" value={Class} onChange={(e)=>setClass(e.target.value)} />
               </div>
               <div>
                   <label>Payment Type</label>
                     <select>
                         <option value="">Select</option>
                          <option value="Monthly">Monthly</option>
                          <option value="Yearly">Yearly</option>
                            <option value="ReAdmisson">Re-Admisson</option>
                     </select>
               </div>

           </form>
        </div>
    )
}
export default CreateFeeSturcture;