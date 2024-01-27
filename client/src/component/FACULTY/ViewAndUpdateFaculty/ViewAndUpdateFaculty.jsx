import {useEffect, useState} from "react";

const ViewAndUpdateFaculty = (props) => {
const [data, setData] = useState([]);
const [View, setView] = useState("none");

    useEffect(() => {
        if(props.view === "block" && props.data.length > 0) {
            setView("block");
            setData(props.data);
            console.log(props.data)
        }
    },[props.view, props.data])

    return(
        <div style={{display:View}}>
            <h1>View and Update Faculty</h1>
        </div>
    )
}
export default ViewAndUpdateFaculty;