import {useState} from "react";

const BedSearch= (props) => {
    const [search, setSearch] = useState("");

    const handaleSubmit = (e) => {
        e.preventDefault();
        props.setSearch(search)
    }

    return(
        <>
            <div style={{display:props.viewBed}}>
                <form onSubmit={handaleSubmit}>
                <input type="text" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)} value={search} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        </>
    )
}
export default BedSearch;