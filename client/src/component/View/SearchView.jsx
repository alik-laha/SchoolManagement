const SearchView = ({ data }) => {
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
          {data.map((item) => (
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
export default SearchView;
