import { useState, useEffect } from "react";
import axios from "axios";
const UserSearch = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [allRoles, setAllRoles] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7000/api/v1/search", { id, name, role })
      .then((res) => {
        props.result(res.data.data);
      });
  };
  let dataFetch = () => {
    fetch("http://localhost:7000/api/v1/getallrole", {
      headers: {
        Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllRoles(data.data);
      })
      .catch((error) => {
        console.log("check the backend", error);
      });
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div className="search" style={{display:props.Search}}>
      <input
        type="text"
        placeholder="Search by id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search by name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">Role</option>
        {allRoles.map((data) => (
          <option value={data.roletype_name} key={data.roletype_name}>
            {data.roletype_name}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
export default UserSearch;
