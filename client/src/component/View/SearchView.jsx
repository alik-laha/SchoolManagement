import axios from "axios";

const SearchView = ({ data }) => {
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
          {data.map((item) => (
            <tr key={item.user_id}>
              <td>{item.user_id}</td>
              <td>{item.user_name}</td>
              <td>{item.roletype_name} </td>
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
export default SearchView;
