import { useState } from "react";
import axios from "axios";

const StudentInputNotice = ({Publish}) => {
  const [file, setFile] = useState(null);


  const HandaleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:7000/api/v1/studentnotice", formData)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
        .catch(err=>{
        console.log(err)
      });
    window.location.reload();
  };
  return (
    <div style={{display:Publish}}>
      <h1>Student Input Notice</h1>
      <form onSubmit={HandaleSubmit}>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default StudentInputNotice;
