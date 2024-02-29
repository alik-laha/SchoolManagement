import {useState} from "react";
import axios from "axios";

const ViewAndUpdateFacultySearch = (props) => {
    const [search, setSearch] = useState("");
    const [Type,setType]=useState("")

    const handleSearch = (e) => {
        e.preventDefault();
        axios.post("/api/v1/faculty/getallfaculty", {search,Type},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                props.facultyData(res.data.data);
            })

    }

    return (
        <div style={{display: props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleSearch}>
                <div>
                    <label>Search By Employee Name</label>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Employee Name"
                    />
                </div>
                <div><label>Search By Employee Type</label>

                    <select onChange={(e) => setType(e.target.value)} value={Type}>
                        <option value="">All</option>
                        <option value="Faculty">Faculty</option>
                        <option value="Staff">Staff</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>
            </form>
        </div>
    )
}
export default ViewAndUpdateFacultySearch;