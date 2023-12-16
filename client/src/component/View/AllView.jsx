import { useEffect, useState } from "react";
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
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User Role</th>
          </tr>
        </thead>

        <tbody>
          {all.map((item) => (
            <tr key={item.user_id}>
              <td>{item.user_id}</td>
              <td>{item.user_name}</td>
              <td>{item.roletype_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Getall;
