import {useState} from "react";

const BedSearch= (props) => {
    const [search, setSearch] = useState("");

    const handaleSubmit = (e) => {
        e.preventDefault();
        props.setSearch(search)
    }

    return(
        <>
            <div className="dashbrd-40-colm" style={{display:props.viewBed}}>
                <form onSubmit={handaleSubmit}>

                   <div>
                    <label>
                    Search By Room No.
                    </label>
                    <input type="text" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)} value={search} />
                    </div> 
                    <span><button className="dashboard-btn dashboard-btn-scss">Search</button></span>
                    {/* <input type="submit" value="Search" /> */}
                </form>
            </div>
        </>
    )
}
export default BedSearch;