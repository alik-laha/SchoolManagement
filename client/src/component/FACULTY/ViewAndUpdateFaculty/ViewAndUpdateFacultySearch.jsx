import {useState} from "react";
import axios from "axios";

const ViewAndUpdateFacultySearch = (props) => {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        axios.post("/api/v1/faculty/getallfaculty", {search},{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res) => {
                props.facultyData(res.data.data);
            })

    }

    return (
        <div style={{display: props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleSearch}>
                <div>
                    <label>Faculty Name</label>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by Faculty Name"
                    />
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>
            </form>
        </div>
    )
}
export default ViewAndUpdateFacultySearch;