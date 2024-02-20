import { useState, useEffect } from "react";
import "../Dashboard/Dashboard.css";
import axios from "axios";
const UserSearchquery40 = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [allRoles, setAllRoles] = useState([]);
  const [Search,setSearch]=useState("none")
  const [userSearchErorr,setuserSearchErorr]=useState("")
  const [errorMessage,setErrorMessage]=useState("none")
  

  const handleSearch =  (e) => {
    if(Search==="none"){
        props.setSearch("flex")
        setSearch("flex")
    }
    else {
        props.setSearch("none")
        setSearch("none")
    }
    e.preventDefault();
    axios
      .post("/api/v1/searchuser", { id, name, role },{headers:{"Authorization":localStorage.getItem("token")}})
      .then((res) => {
        
        window.addEventListener("unhandledrejection", function(promiseRejectionEvent) {
            setuserSearchErorr(promiseRejectionEvent.reason.response.data.data)
            if(promiseRejectionEvent.reason.response.data.data) {
                setErrorMessage("block")
            }

      });

          setErrorMessage("none")
         
        props.result(res.data.data);
        props.buttonClick("block");
      });

  };


  let dataFetch = () => {
    axios.get("/api/v1/getallrole",{headers:{"Authorization":localStorage.getItem("token")}})
      .then((res) => {
        setAllRoles(res.data.data);
          console.log(res.data.data)
        props.allRoles(res.data.data);
      })
      .catch((error) => {
        console.log("check the backend", error);
      });
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
      <div className="dashbrd-40-colm" style={{display: props.Search}}>


          <div>
              <label>Search By User Name</label>
              <input
                  type="text"
                  placeholder="User Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
              
          </div>

          <div>
              <label>Search by Role</label>
              <select onChange={(e) => setRole(e.target.value)}>
                  <option value="">All</option>
                  {allRoles.map((data) => (
                      <option value={data.roletype_name} key={data.roletype_name}>
                          {data.roletype_name}
                      </option>
                  ))}
              </select>
          </div>
          <span>
      <button className="dashboard-btn dashboard-btn-scss" onClick={handleSearch}>Search</button>
      </span>
      <span style={{fontSize: "16px", color: "red",display:errorMessage}}>{userSearchErorr}</span>
      </div>
  );
};
export default UserSearchquery40;
