import {useEffect, useState} from "react";
import axios from "axios";

const ViewBedStatus60 = (props) => {
    const [bedData, setBedData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:7000/api/v1/hostel/viewbed").then((res) => {
            setBedData(res.data.result)
        }).catch((err) => {
            console.log(err);
        });
    },[])
    return(
        <>
            <div style={{display:props.viewbed}}>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Bulding</th>
                            <th>Floor</th>
                            <th>Room Number</th>
                            <th>Total Bed</th>
                            <th>Available Bed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bedData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.building}</td>
                                <td>{item.floor}</td>
                                <td>{item.room_no}</td>
                                <td>{item.total_bed}</td>
                                <td>{item.available_bed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ViewBedStatus60