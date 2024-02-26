import {useState} from "react";
import axios from "axios";

const CreateSubject = (props) => {
    const [name,setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/v1/faculty/createsubject",{name},{headers:{"Authorization":localStorage.getItem("token")}}).then(() => {
            alert("Subject Name : "+ name + " has been Added Successfully")
            setName("")
            handleView()
        }).catch((err) => {
            console.log(err)
            if(err.response.data.err.errno===1062){
                alert("Subject Name "+ name+" Already Exists")
            }
        })
    }

    const handleView = () => {
        axios.get("/api/v1/faculty/getallsubject",{headers:{"Authorization":localStorage.getItem("token")}}).then((res) => {
            props.setSubject(res.data.data)
            props.setSubjectView("block")
        }).catch((err) => {
            console.log(err)
        })

    }
    return(
        <div style={{display:props.view}} className="dashbrd-40-colm">
            
            <form onSubmit={handleSubmit} style={{display:'grid',color:'#3c8dbc',backgroundColor:'whitesmoke',boxShadow:'0 0 5px grey'}}>
            <p style={{fontSize:'17px'}}>Create New Subject </p>
            <dl class="dl-horizontal">
                    <dt><label>Subject Name</label></dt>
                    <dd> <input type="text" placeholder="Enter Subject Name" value={name}
                           onChange={(e) => setName(e.target.value)} required/> </dd>
                
             </dl>   
                
                
                <span><button className="dashboard-btn dashboard-btn-scss"
                              type="submit">Submit</button></span>
            </form>
            <div>
                <button style={{backgroundColor: 'lightseagreen',marginTop:'20px'}} className="dashboard-btn dashboard-btn-scss" onClick={handleView}>
                    View / Delete Subject
                </button>
            </div>
        </div>
    )
}
export default CreateSubject;