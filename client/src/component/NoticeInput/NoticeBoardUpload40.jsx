import { useState,useRef } from "react";
import axios from "axios";

const StudentInputNotice = ({Publish}) => {
  const [file, setFile] = useState(null);
  const fileRef=useRef();



  const handleReset = () => {
    fileRef.current.value = null;
};

  const HandaleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("file", file);


      axios
      .post("/api/v1/studentnotice", formData).then((res) => {
          console.log("file send")
        
    })
        .catch(err=>{
        console.log(err)
      });

      alert("Notice has been Uploaded Successfully")
      //setFile(null)
      handleReset();

  };
  return (
    <div className="dashbrd-40-colm" style={{display:Publish}}>
      
      
      {/* <label>Institute Notice Upload </label> */}
      
      <form onSubmit={HandaleSubmit} style={{display:'grid',color:'#3c8dbc',backgroundColor:'azure',boxShadow:'0 0 5px grey'}}>
      <p style={{fontSize:'17px'}}>Institute Notice Upload </p>
      <dl class="dl-horizontal">

      <dt><label>Notice Upload</label></dt>
                    <dd> <input ref={fileRef} accept="application/pdf" style={{border:'none'}}
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          
        /> </dd>
       <span style={{ fontSize:'15px',color:'red'}}>(Only PDF Files are Allowed)</span> 
        </dl>

         
        <span><button className="dashboard-btn dashboard-btn-scss" type="submit" >Submit</button>
        </span>
        
       
      </form>
      
      
      
     
    </div>
  );
};
export default StudentInputNotice;
