import {useEffect, useState} from "react";
import axios from "axios";

const StudentFeePaymentEntry = (props) => {
    const [view,setView]=useState("none")
    const [data,setData]=useState([])
    const [FeeType,setFeeType]=useState("")
    const [tableView,setTableView]=useState("block")
    const [monthlyView,setMonthlyView]=useState("none")
    const [NewadmissionView,setNewadmissionView]=useState("none")
    const [readmissionView,setReadmissionView]=useState("none")
    const [regNo,setRegNo]=useState("")
    const [Class,setClass]=useState(0)
    const [year,setYear]=useState(0)

    const [AdmissonFee,setAdmissonFee]=useState(0)
    const [hostelCharge,setHostelCharge]=useState(0)
    const [TutionFee,setTutionFee]=useState(0)
    const [CautionMoney,setCautionMoney]=useState(0)
    const [ExaminationFee,setExaminationFee]=useState(0)
    const [GamesSportsExicursion,setGamesSportsExicursion]=useState(0)
    const [ElectricCharge,setElectricCharge]=useState(0)
    const [LibraryFees,setLibraryFees]=useState(0)
    const [ComputerFees,setComputerFees]=useState(0)
    const [DevelopmentFees,setDevelopmentFees]=useState(0)
    const [Miscellaneous,setMiscellaneous]=useState(0)
    const [LaundryCharge,setLaundryCharge]=useState(0)
    const [MedicalCharge,setMedicalCharge]=useState(0)
    const [Uniform,setUniform]=useState(0)
    const [SessionCharge,setSessionCharge]=useState(0)
    const [BedFee,setBedFee]=useState(0)
    const [Total,setTotal]=useState(0)

    const [EditAdmissonFee,setEditAdmissonFee]=useState(0)
    const [EdithostelCharge,setEditHostelCharge]=useState(0)
    const [EditTutionFee,setEditTutionFee]=useState(0)
    const [EditCautionMoney,setEditCautionMoney]=useState(0)
    const [EditExaminationFee,setEditExaminationFee]=useState(0)
    const [EditGamesSportsExicursion,setEditGamesSportsExicursion]=useState(0)
    const [EditElectricCharge,setEditElectricCharge]=useState(0)
    const [EditLibraryFees,setEditLibraryFees]=useState(0)
    const [EditComputerFees,setEditComputerFees]=useState(0)
    const [EditDevelopmentFees,setEditDevelopmentFees]=useState(0)
    const [EditMiscellaneous,setEditMiscellaneous]=useState(0)
    const [EditLaundryCharge,setEditLaundryCharge]=useState(0)
    const [EditMedicalCharge,setEditMedicalCharge]=useState(0)
    const [EditUniform,setEditUniform]=useState(0)
    const [EditSessionCharge,setEditSessionCharge]=useState(0)
    const [EditBedFee,setEditBedFee]=useState(0)
    const [EditTotal,setEditTotal]=useState(0)
    const [EditDate,setEditDate]=useState(new Date().toISOString().slice(0, 10))

    const [disableedit,setdisabledit]=useState(true)
    const [month,setMonth]=useState("")
    const [status,setStatus]=useState(0)
    useEffect(() => {
        if(props.view==="block" && props.data.length>0){
            setView("block")
        }
        else{
         setView("none")
        }
    }, [props.view,props.data]);

    useEffect(() => {
        if(props.data.length>0){
            setFeeType(props.data[0].fee_type)
            setData(props.data)
        }
    },[props.data])


    const handleClick=async(data)=>{
        if(FeeType==="Monthly"){
            setMonthlyView("block")
        }
        else if(FeeType==="NewAdmission"){
            setNewadmissionView("block")

        }
        else if(FeeType==="ReAdmisson"){
            setReadmissionView("block")
        }
        setTableView("none")

        setRegNo(data.registration_no)
        setClass(data.class)
        setYear(data.year)


        setAdmissonFee(data.admission_fee)
        setHostelCharge(data.hostel_fee)
        setTutionFee(data.tution_fee)
        setCautionMoney(data.caution_fee)
        setExaminationFee(data.examination_fee)
        setGamesSportsExicursion(data.sports_fee)
        setElectricCharge(data.electric_fee)
        setLibraryFees(data.library_fee)
        setComputerFees(data.computer_fee)
        setDevelopmentFees(data.development_fee)
        setMiscellaneous(data.miscellaneous_fee)
        setLaundryCharge(data.laundry_fee)
        setMedicalCharge(data.madical_fee)
        setUniform(data.uniform_fee)
        setSessionCharge(data.session_fee)
        setBedFee(data.bed_fee)
        setTotal(data.total_fee)

        const Data={
            regNo:data.registration_no,
            Class:data.class,
            year:data.year
        }
        let cData
        let DATA
        if(FeeType==="NewAdmission") {
            await axios.post("/api/v1/fee/getnewadmissionfeeentryforupdate", Data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
                DATA = res.data.result[0]
                console.log(DATA)
            }).catch((err) => {
                console.log(err)
            })
        }

        setEditAdmissonFee(DATA.admission_fee)
        setEditBedFee(DATA.bed_fee)
        setEditTutionFee(DATA.tution_fee)
        setCautionMoney(DATA.caution_fee)
        setEditComputerFees(DATA.computer_fee)
        setEditDevelopmentFees(DATA.development_fee)
        setEditElectricCharge(DATA.electric_fee)
        setEditExaminationFee(DATA.examination_fee)
        setEditHostelCharge(DATA.hostel_fee)
        setEditLaundryCharge(DATA.laundry_fee)
        setEditLibraryFees(DATA.library_fee)
        setEditMedicalCharge(DATA.madical_fee)
        setEditMiscellaneous(DATA.miscellaneous_fee)
        setEditSessionCharge(DATA.session_fee)
        setEditGamesSportsExicursion(DATA.sports_fee)
        setUniform(DATA.uniform_fee)
        setStatus(DATA.status)
        cData = DATA.entry_date.toString()

        let currentDate = new Date().toISOString();
        let currentYear = currentDate.slice(0, 4);
        let currentMonth = currentDate.slice(5, 7);
        let currentDay = currentDate.slice(8, 10);
        let dbYear = cData.slice(0, 4);
        let dbMonth = cData.slice(5, 7);
        let dbDay = cData.slice(8, 10);
        console.log(dbDay, dbMonth, dbYear)
        console.log(currentYear,currentMonth,currentDay)

        if (dbYear < currentYear) {
            // The database date is in a previous year, so it is older
            setdisabledit(true);
            console.log(1)
        } else if (dbYear === currentYear) {
            // The database date is in the same year, so compare the months
            if (dbMonth < currentMonth) {
                // The database date is in a previous month, so it is older
                setdisabledit(true)
                console.log(2)
            } else if (dbMonth === currentMonth) {
                // The database date is in the same month, so compare the days
                if (dbDay < currentDay) {
                    // The database date is more than one day before the current date, so it is older
                    setdisabledit(true)
                    console.log(3)
                } else {
                    // The database date is not older than one day
                    setdisabledit(false);
                    console.log(4)

                }
            } else {
                // The database date is in a future month, so it is not older
                setdisabledit(false);
                console.log(5)
            }
        } else {
            // The database date is in a future year, so it is not older
            setdisabledit(false);
            console.log(6)
        }
        console.log(disableedit)

    }

    const handleCancel=()=>{
        setMonthlyView("none")
        setNewadmissionView("none")
        setReadmissionView("none")
        setTableView("block")

        setAdmissonFee(0)
        setHostelCharge(0)
        setTutionFee(0)
        setCautionMoney(0)
        setExaminationFee(0)
        setGamesSportsExicursion(0)
        setElectricCharge(0)
        setLibraryFees(0)
        setComputerFees(0)
        setDevelopmentFees(0)
        setMiscellaneous(0)
        setLaundryCharge(0)
        setMedicalCharge(0)
        setUniform(0)
        setSessionCharge(0)
        setBedFee(0)
        setTotal(0)
        setRegNo("")
        setClass(0)
        setYear(0)

        setEditAdmissonFee(0)
        setEditHostelCharge(0)
        setEditTutionFee(0)
        setEditCautionMoney(0)
        setEditExaminationFee(0)
        setEditGamesSportsExicursion(0)
        setEditElectricCharge(0)
        setEditLibraryFees(0)
        setEditComputerFees(0)
        setEditDevelopmentFees(0)
        setEditMiscellaneous(0)
        setEditLaundryCharge(0)
        setEditMedicalCharge(0)
        setEditUniform(0)
        setEditSessionCharge(0)
        setEditBedFee(0)
        setEditTotal(0)
        setEditDate(new Date().toISOString().slice(0, 10))
        setdisabledit(true)
        setStatus(0)
    }

    useEffect(() => {
        calculateTotal()
    },[EditAdmissonFee,EdithostelCharge,EditTutionFee,EditCautionMoney,EditExaminationFee,EditGamesSportsExicursion,EditElectricCharge,EditLibraryFees,EditComputerFees,EditDevelopmentFees,EditMiscellaneous,EditLaundryCharge,EditMedicalCharge,EditUniform,EditSessionCharge,EditBedFee])

    const calculateTotal = () => {
        setEditTotal(
        Number(EditAdmissonFee) +
        Number(EdithostelCharge) +
        Number(EditTutionFee) +
        Number(EditCautionMoney) +
        Number(EditExaminationFee) +
        Number(EditGamesSportsExicursion) +
        Number(EditElectricCharge) +
        Number(EditLibraryFees) +
        Number(EditComputerFees) +
        Number(EditDevelopmentFees) +
        Number(EditMiscellaneous) +
        Number(EditLaundryCharge) +
        Number(EditMedicalCharge) +
        Number(EditUniform) +
        Number(EditSessionCharge) +
        Number(EditBedFee)
        )
    }

    const HandleMonthlyPaymentSubmit=(e)=>{
        e.preventDefault()
        console.log(EditTotal,EdithostelCharge,EditTutionFee,month)
    }

    const HandleNewAdmissionFee=(e)=>{
        e.preventDefault()
        if(!status) {
            console.log(EditTotal, EdithostelCharge, EditTutionFee, EditAdmissonFee, EditCautionMoney, EditExaminationFee, EditGamesSportsExicursion, EditElectricCharge, EditLibraryFees, EditComputerFees, EditDevelopmentFees, EditMiscellaneous, EditLaundryCharge, EditMedicalCharge, EditUniform, EditSessionCharge, EditBedFee)

            const data = {
                regNo: regNo,
                Class: Class,
                year: year,
                AdmissionFee: EditAdmissonFee,
                hostelCharge: EdithostelCharge,
                TutionFee: EditTutionFee,
                CautionMoney: EditCautionMoney,
                ExaminationFee: EditExaminationFee,
                GamesSportsExicursion: EditGamesSportsExicursion,
                ElectricCharge: EditElectricCharge,
                LibraryFees: EditLibraryFees,
                ComputerFees: EditComputerFees,
                DevelopmentFees: EditDevelopmentFees,
                Miscellaneous: EditMiscellaneous,
                LaundryCharge: EditLaundryCharge,
                MedicalCharge: EditMedicalCharge,
                Uniform: EditUniform,
                SessionCharge: EditSessionCharge,
                BedFee: EditBedFee,
                Total: EditTotal,
                PaymentDate: EditDate
            }
            axios.post("/api/v1/fee/newadmissionfeeentry", data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }else{
            console.log("update")
        }
    }

    const HandleReAdmissionFee=(e)=>{
        e.preventDefault()
        if(!status) {
            console.log(EditTotal, EdithostelCharge, EditTutionFee, EditAdmissonFee, EditCautionMoney, EditExaminationFee, EditGamesSportsExicursion, EditElectricCharge, EditLibraryFees, EditComputerFees, EditDevelopmentFees, EditMiscellaneous, EditLaundryCharge, EditMedicalCharge, EditUniform, EditSessionCharge, EditBedFee)
            const data = {
                regNo: regNo,
                Class: Class,
                year: year,
                AdmissionFee: EditAdmissonFee,
                hostelCharge: EdithostelCharge,
                TutionFee: EditTutionFee,
                CautionMoney: EditCautionMoney,
                ExaminationFee: EditExaminationFee,
                GamesSportsExicursion: EditGamesSportsExicursion,
                ElectricCharge: EditElectricCharge,
                LibraryFees: EditLibraryFees,
                ComputerFees: EditComputerFees,
                DevelopmentFees: EditDevelopmentFees,
                Miscellaneous: EditMiscellaneous,
                LaundryCharge: EditLaundryCharge,
                MedicalCharge: EditMedicalCharge,
                Uniform: EditUniform,
                SessionCharge: EditSessionCharge,
                BedFee: EditBedFee,
                Total: EditTotal,
                PaymentDate: EditDate
            }
            axios.post("/api/v1/fee/readmissionfeeentry", data, {headers: {"Authorization": localStorage.getItem("token")}}).then((res) => {
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
        else {
            console.log("update")
        }
    }

    return(
        <div style={{display:view}}>
            <div style={{display:tableView}}>
            <table className="table-60" >
                <thead>
                <tr>
                    <th>index</th>
                    <th>Name</th>
                    <th>Reg No</th>
                    <th>Class</th>
                    <th>Roll No</th>
                    <th>Section</th>
                    <th>Year</th>
                    <th>Total</th>
                    <th>Entry Status</th>
                   <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.student_Name}</td>
                                <td>{item.registration_no}</td>
                                <td>{item.class}</td>
                                <td>{item.roll_no}</td>
                                <td>{item.section}</td>
                                <td>{item.year}</td>
                                <td>{item.total_fee}</td>
                                <td>{ <input type='checkbox'
                                    checked={item.status  === 1 ? true : false}></input>}</td>
                                <td><button onClick={()=>handleClick(item)} className="dashboard-btn dashboard-btn-scss" >Entry</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>

            {/* Monthly Fee Payment*/}
            <div style={{display: monthlyView}} className="dashbrd-40-colm special-25-div">
                <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">cancel
                </button>
                <form onSubmit={HandleMonthlyPaymentSubmit}>
                    <div>
                        <label>Hostel Charge: </label>
                        <label>{hostelCharge}: </label>
                        <input type="number" value={EdithostelCharge}
                               onChange={(e) => e.target.value <= hostelCharge ? setEditHostelCharge(e.target.value) : alert(`It should be lower then ${hostelCharge}`)}/>
                    </div>

                    <div>
                        <label>Tution Charge: </label>
                        <label>{TutionFee}: </label>
                        <input type="number" value={EditTutionFee}
                               onChange={(e) => e.target.value <= TutionFee ? setEditTutionFee(e.target.value) : alert(`It should be lower then ${TutionFee}`)}/>
                    </div>

                    <div>
                        <label>Month</label>
                        <select value={month} onChange={(e) => setMonth(e.target.value)}>
                            <option value="">Select</option>
                            <option value="Jan">January</option>
                            <option value="Feb">February</option>
                            <option value="Mar">March</option>
                            <option value="Apr">April</option>
                            <option value="May">May</option>
                            <option value="Jun">June</option>
                            <option value="Jul">July</option>
                            <option value="Aug">August</option>
                            <option value="Sept">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                        </select>
                    </div>

                    <div>
                        <label>Total Fee: </label>
                        <label>{Total}: </label>
                        <input type="number" value={EditTotal}
                               readOnly={true}/>
                    </div>
                    <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>

                </form>
            </div>

            {/* New Admission Fee Payment*/}
            <div style={{display: NewadmissionView}} className="dashbrd-40-colm special-25-div">
            <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">cancel
                </button>
                <form onSubmit={HandleNewAdmissionFee}>
                    <div>
                        <label>Admission Fee: </label>
                        <label>{AdmissonFee}: </label>
                        <input type="number" value={EditAdmissonFee}
                               onChange={(e) => e.target.value <= AdmissonFee ? setEditAdmissonFee(e.target.value) : alert(`It should be lower then ${AdmissonFee}`)}/>
                    </div>

                    <div>
                        <label>Hostel Charge: </label>
                        <label>{hostelCharge}: </label>
                        <input type="number" value={EdithostelCharge}
                               onChange={(e) => e.target.value <= hostelCharge ? setEditHostelCharge(e.target.value) : alert(`It should be lower then ${hostelCharge}`)}/>
                    </div>

                    <div>
                        <label>Tution Charge: </label>
                        <label>{TutionFee}: </label>
                        <input type="number" value={EditTutionFee}
                               onChange={(e) => e.target.value <= TutionFee ? setEditTutionFee(e.target.value) : alert(`It should be lower then ${TutionFee}`)}/>
                    </div>

                    <div>
                        <label>Caution Money: </label>
                        <label>{CautionMoney}: </label>
                        <input type="number" value={EditCautionMoney}
                               onChange={(e) => e.target.value <= CautionMoney ? setEditCautionMoney(e.target.value) : alert(`It should be lower then ${CautionMoney}`)}/>
                    </div>

                    <div>
                        <label>Examination Fee: </label>
                        <label>{ExaminationFee}: </label>
                        <input type="number" value={EditExaminationFee}
                               onChange={(e) => e.target.value <= ExaminationFee ? setEditExaminationFee(e.target.value) : alert(`It should be lower then ${ExaminationFee}`)}/>
                    </div>

                    <div>
                        <label>Games Sports Exicursion: </label>
                        <label>{GamesSportsExicursion}: </label>
                        <input type="number" value={EditGamesSportsExicursion}
                               onChange={(e) => e.target.value <= GamesSportsExicursion ? setEditGamesSportsExicursion(e.target.value) : alert(`It should be lower then ${GamesSportsExicursion}`)}/>
                    </div>

                    <div>
                        <label>Electric Charge: </label>
                        <label>{ElectricCharge}: </label>
                        <input type="number" value={EditElectricCharge}
                               onChange={(e) => e.target.value <= ElectricCharge ? setEditElectricCharge(e.target.value) : alert(`It should be lower then ${ElectricCharge}`)}/>
                    </div>

                    <div>
                        <label>Library Fees: </label>
                        <label>{LibraryFees}: </label>
                        <input type="number" value={EditLibraryFees}
                               onChange={(e) => e.target.value <= LibraryFees ? setEditLibraryFees(e.target.value) : alert(`It should be lower then ${LibraryFees}`)}/>
                    </div>

                    <div>
                        <label>Computer Fees: </label>
                        <label>{ComputerFees}: </label>
                        <input type="number" value={EditComputerFees}
                               onChange={(e) => e.target.value <= ComputerFees ? setEditComputerFees(e.target.value) : alert(`It should be lower then ${ComputerFees}`)}/>

                    </div>
                    <div>
                        <label>Development Fees: </label>
                        <label>{DevelopmentFees}: </label>
                        <input type="number" value={EditDevelopmentFees}
                               onChange={(e) => e.target.value <= DevelopmentFees ? setEditDevelopmentFees(e.target.value) : alert(`It should be lower then ${DevelopmentFees}`)}/>
                    </div>

                    <div>
                        <label>Miscellaneous: </label>
                        <label>{Miscellaneous}: </label>
                        <input type="number" value={EditMiscellaneous}
                               onChange={(e) => e.target.value <= Miscellaneous ? setEditMiscellaneous(e.target.value) : alert(`It should be lower then ${Miscellaneous}`)}/>
                    </div>

                    <div>
                        <label>Laundry Charge: </label>
                        <label>{LaundryCharge}: </label>
                        <input type="number" value={EditLaundryCharge}
                               onChange={(e) => e.target.value <= LaundryCharge ? setEditLaundryCharge(e.target.value) : alert(`It should be lower then ${LaundryCharge}`)}/>
                    </div>

                    <div>
                        <label>Medical Charge: </label>
                        <label>{MedicalCharge}: </label>
                        <input type="number" value={EditMedicalCharge}
                               onChange={(e) => e.target.value <= MedicalCharge ? setEditMedicalCharge(e.target.value) : alert(`It should be lower then ${MedicalCharge}`)}/>
                    </div>

                    <div>
                        <label>Uniform: </label>
                        <label>{Uniform}: </label>
                        <input type="number" value={EditUniform}
                               onChange={(e) => e.target.value <= Uniform ? setEditUniform(e.target.value) : alert(`It should be lower then ${Uniform}`)}/>
                    </div>

                    <div>
                        <label>Session Charge: </label>
                        <label>{SessionCharge}: </label>
                        <input type="number" value={EditSessionCharge}
                               onChange={(e) => e.target.value <= SessionCharge ? setEditSessionCharge(e.target.value) : alert(`It should be lower then ${SessionCharge}`)}/>
                    </div>

                    <div>
                        <label>Bed Fee: </label>
                        <label>{BedFee}: </label>
                        <input type="number" value={EditBedFee}
                               onChange={(e) => e.target.value <= BedFee ? setEditBedFee(e.target.value) : alert(`It should be lower then ${BedFee}`)}/>
                    </div>

                    <div>
                        <label>Total Fee: </label>
                        <label>{Total}: </label>
                        <input type="number" value={EditTotal}
                               readOnly={true}/>
                    </div>
                    <div>
                        <label>Payment Date</label>
                        <input type="date" value={EditDate} onChange={(e) => setEditDate(e.target.value)}/>
                    </div>
                    <span><button className="dashboard-btn dashboard-btn-scss"  disabled={disableedit}>Submit</button></span>
                </form>
            </div>

            {/* Readmission Fee Payment*/}
            <div style={{display: readmissionView}} className="dashbrd-40-colm special-25-div">
                <button onClick={handleCancel} className="dashboard-btn dashboard-btn-scss">cancel
                </button>
                <form onSubmit={HandleReAdmissionFee}>
                    <div>
                        <label>Admission Fee: </label>
                        <label>{AdmissonFee}: </label>
                        <input type="number" value={EditAdmissonFee}
                               onChange={(e) => e.target.value <= AdmissonFee ? setEditAdmissonFee(e.target.value) : alert(`It should be lower then ${AdmissonFee}`)}/>
                    </div>

                    <div>
                        <label>Hostel Charge: </label>
                        <label>{hostelCharge}: </label>
                        <input type="number" value={EdithostelCharge}
                               onChange={(e) => e.target.value <= hostelCharge ? setEditHostelCharge(e.target.value) : alert(`It should be lower then ${hostelCharge}`)}/>
                    </div>

                    <div>
                        <label>Tution Charge: </label>
                        <label>{TutionFee}: </label>
                        <input type="number" value={EditTutionFee}
                               onChange={(e) => e.target.value <= TutionFee ? setEditTutionFee(e.target.value) : alert(`It should be lower then ${TutionFee}`)}/>
                    </div>

                    <div>
                        <label>Caution Money: </label>
                        <label>{CautionMoney}: </label>
                        <input type="number" value={EditCautionMoney}
                               onChange={(e) => e.target.value <= CautionMoney ? setEditCautionMoney(e.target.value) : alert(`It should be lower then ${CautionMoney}`)}/>
                    </div>

                    <div>
                        <label>Examination Fee: </label>
                        <label>{ExaminationFee}: </label>
                        <input type="number" value={EditExaminationFee}
                               onChange={(e) => e.target.value <= ExaminationFee ? setEditExaminationFee(e.target.value) : alert(`It should be lower then ${ExaminationFee}`)}/>
                    </div>

                    <div>
                        <label>Games Sports Exicursion: </label>
                        <label>{GamesSportsExicursion}: </label>
                        <input type="number" value={EditGamesSportsExicursion}
                               onChange={(e) => e.target.value <= GamesSportsExicursion ? setEditGamesSportsExicursion(e.target.value) : alert(`It should be lower then ${GamesSportsExicursion}`)}/>
                    </div>

                    <div>
                        <label>Electric Charge: </label>
                        <label>{ElectricCharge}: </label>
                        <input type="number" value={EditElectricCharge}
                               onChange={(e) => e.target.value <= ElectricCharge ? setEditElectricCharge(e.target.value) : alert(`It should be lower then ${ElectricCharge}`)}/>
                    </div>

                    <div>
                        <label>Library Fees: </label>
                        <label>{LibraryFees}: </label>
                        <input type="number" value={EditLibraryFees}
                               onChange={(e) => e.target.value <= LibraryFees ? setEditLibraryFees(e.target.value) : alert(`It should be lower then ${LibraryFees}`)}/>
                    </div>

                    <div>
                        <label>Computer Fees: </label>
                        <label>{ComputerFees}: </label>
                        <input type="number" value={EditComputerFees}
                               onChange={(e) => e.target.value <= ComputerFees ? setEditComputerFees(e.target.value) : alert(`It should be lower then ${ComputerFees}`)}/>

                    </div>
                    <div>
                        <label>Development Fees: </label>
                        <label>{DevelopmentFees}: </label>
                        <input type="number" value={EditDevelopmentFees}
                               onChange={(e) => e.target.value <= DevelopmentFees ? setEditDevelopmentFees(e.target.value) : alert(`It should be lower then ${DevelopmentFees}`)}/>
                    </div>

                    <div>
                        <label>Miscellaneous: </label>
                        <label>{Miscellaneous}: </label>
                        <input type="number" value={EditMiscellaneous}
                               onChange={(e) => e.target.value <= Miscellaneous ? setEditMiscellaneous(e.target.value) : alert(`It should be lower then ${Miscellaneous}`)}/>
                    </div>

                    <div>
                        <label>Laundry Charge: </label>
                        <label>{LaundryCharge}: </label>
                        <input type="number" value={EditLaundryCharge}
                               onChange={(e) => e.target.value <= LaundryCharge ? setEditLaundryCharge(e.target.value) : alert(`It should be lower then ${LaundryCharge}`)}/>
                    </div>

                    <div>
                        <label>Medical Charge: </label>
                        <label>{MedicalCharge}: </label>
                        <input type="number" value={EditMedicalCharge}
                               onChange={(e) => e.target.value <= MedicalCharge ? setEditMedicalCharge(e.target.value) : alert(`It should be lower then ${MedicalCharge}`)}/>
                    </div>

                    <div>
                        <label>Uniform: </label>
                        <label>{Uniform}: </label>
                        <input type="number" value={EditUniform}
                               onChange={(e) => e.target.value <= Uniform ? setEditUniform(e.target.value) : alert(`It should be lower then ${Uniform}`)}/>
                    </div>

                    <div>
                        <label>Session Charge: </label>
                        <label>{SessionCharge}: </label>
                        <input type="number" value={EditSessionCharge}
                               onChange={(e) => e.target.value <= SessionCharge ? setEditSessionCharge(e.target.value) : alert(`It should be lower then ${SessionCharge}`)}/>
                    </div>

                    <div>
                        <label>Bed Fee: </label>
                        <label>{BedFee}: </label>
                        <input type="number" value={EditBedFee}
                               onChange={(e) => e.target.value <= BedFee ? setEditBedFee(e.target.value) : alert(`It should be lower then ${BedFee}`)}/>
                    </div>

                    <div>
                        <label>Total Fee: </label>
                        <label>{Total}: </label>
                        <input type="number" value={EditTotal}
                               readOnly={true}/>
                    </div>
                    <div>
                        <label>Payment Date</label>
                        <input type="date" value={EditDate} onChange={(e) => setEditDate(e.target.value)}/>
                    </div>
                    <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>
                </form>
            </div>
        </div>
    )
}
export default StudentFeePaymentEntry;