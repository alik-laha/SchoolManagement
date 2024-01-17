import {useState} from "react";

const SearchHostelView= (props) => {
    const [Class,setClass]=useState("")
    const [regNo,setRegNo]=useState("")
    const [entryDate,setEntryDate]=useState("")
const HandaleSubmit=(e)=>{
    e.preventDefault();

}

    return(
        <>
            <div>
                <form onSubmit={HandaleSubmit}>
                <input type="text" value={Class} onChange={(e)=>setClass(e.target.value)} />
                <input type="text" value={regNo} onChange={(e)=>setRegNo(e.target.value)} />
                <input type="date" value={entryDate} onChange={(e)=>setEntryDate(e.target.value)} />
                <input type="submit" value="Search" />
                </form>
            </div>
        </>
    )
}
export default SearchHostelView;