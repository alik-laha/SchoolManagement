import {useState} from "react";
import axios from "axios";

const CreateBed40 = ({showCreate}) => {

    return (
        <>
            <div>
                <form>
                    <div>
                        <label>Bulding</label>
                        <input type="text" placeholder="Bulding" required/>
                    </div>
                    <div>
                        <label>Room Number</label>
                        <input type="text" placeholder="Room Number" required/>
                    </div>
                    <div>
                        <label>Total Bed</label>
                        <input type="text" placeholder="Total Bed" required/>
                    </div>
                    <input type="submit" value="Submit"/>

                </form>
            </div>
        </>
    )
}