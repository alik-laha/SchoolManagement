import { useState } from "react";
import axios from "axios";

const StudentInputNotice = ({Publish}) => {
  const [file, setFile] = useState(null);
  const [activestatus,setactivestatus]= useState(true)


  const handleactive = () => {
    setactivestatus(!activestatus);
  };


  const HandaleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
        file.status = activestatus.toString();
      formData.append("file", file);
    console.log(file);

      axios
      .post("http://localhost:7000/api/v1/studentnotice", formData)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

      })
        .catch(err=>{
            window.location.reload();
        console.log(err)
      });
    


  };
  return (
    <div className="dashbrd-40-colm" style={{display:Publish}}>
      
      <div>
      <label>Institute Notice Upload </label>
      <form onSubmit={HandaleSubmit} >
         <input style={{border:'none'}}
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <label>Active Status </label>
        <input style={{border:'none'}}
          type="checkbox"
          name="Active Notice"
          value="Active"
          checked={activestatus}
          onChange={handleactive}
        />

       <div><button className="dashboard-btn dashboard-btn-scss" type="submit" >Submit</button></div>
      </form>
      </div>
      
     
    </div>
  );
};
export default StudentInputNotice;
