import {useState} from "react";
import axios from "axios";

const CreateSubject = (props) => {
    const [name,setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:7000/api/v1/faculty/createsubject",{name}).then(() => {
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
        axios.post("http://localhost:7000/api/v1/faculty/getallsubject").then((res) => {
            props.setSubject(res.data.data)
            props.setSubjectView("block")
        }).catch((err) => {
            console.log(err)
        })

    }
    return(
        <div style={{display:props.view}} className="dashbrd-40-colm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Subject Name</label>
                    <input type="text" placeholder="Enter Subject Name" value={name}
                           onChange={(e) => setName(e.target.value)} required/>
                </div>
                <span><button className="dashboard-btn dashboard-btn-scss"
                              type="submit">Submit</button></span>
            </form>
            <div>
                <button style={{backgroundColor: 'lightseagreen'}} className="dashboard-btn dashboard-btn-scss" onClick={handleView}>
                    View / Delete Subject
                </button>
            </div>
        </div>
    )
}
export default CreateSubject;