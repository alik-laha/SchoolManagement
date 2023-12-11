import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="side">
      {/* user */}
      <select className="user">
        <option>Dashboard users</option>
        <option>Create users</option>
        <option>View users</option>
      </select>
      {/* employ */}
      <select className="user">
        <option>Employ(Staff)</option>
        <option>Create Employ</option>
        <option>View Employ</option>
      </select>

      {/* student */}
      <select className="user">
        <option>Student details</option>
      </select>

      {/* stock */}
      <select className="user">
        <option>Stock</option>
        <option>Vendor</option>
        <option>Item type</option>
        <option>Stock Entry</option>
        <option>Pending Amount</option>
      </select>
    </div>
  );
};

export default SideBar;
