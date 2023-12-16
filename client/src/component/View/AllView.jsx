import { useEffect, useState } from "react";
import axios from "axios";
const Getall = () => {
  const [all, setAll] = useState([]);
  let dataFetch = () => {
    fetch("http://localhost:7000/api/v1/getall", {
      headers: {
        Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAll(data.data);
      })
      .catch((error) => {
        setAll("check the backend", error);
      });
  };
  useEffect(() => {
    dataFetch();
  }, []);
  const handaleDelete = (user_id) => {
    axios
      .post("http://localhost:7000/api/v1/delete", { user_id })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {all.map((item) => (
            <tr key={item.user_id}>
              <td>{item.user_id}</td>
              <td>{item.user_name}</td>
              <td>{item.roletype_name}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handaleDelete(item.user_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Getall;
