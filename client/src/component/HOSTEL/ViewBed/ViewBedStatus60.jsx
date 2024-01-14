import {useEffect, useState} from "react";
import axios from "axios";

const ViewBedStatus60 = (props) => {
    const [view, setView] = useState("none");


    useEffect(() => {
       if(props.viewbed==="block" && props.BedData.length>0){
              setView("block")
       }
       else{
           setView("none")
       }

    }, [props.viewbed,props.BedData]);
    return(
        <>
            <div style={{display:view}}>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Bulding</th>
                            <th>Floor</th>
                            <th>Room Number</th>
                            <th>Total Bed</th>
                            <th>Available Bed</th>
                            <th>Occupied Bed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.BedData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.building}</td>
                                <td>{item.floor}</td>
                                <td>{item.room_no}</td>
                                <td>{item.total_bed}</td>
                                <td>{item.available_bed}</td>
                                <td>{item.occupied_bed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ViewBedStatus60