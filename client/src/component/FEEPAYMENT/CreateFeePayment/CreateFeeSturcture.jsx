import {useEffect, useState} from "react";
import axios from "axios";
const CreateFeeSturcture = (props) => {
    const [Class,setClass]=useState("")
    const [FeeType,setFeeType]=useState("")
    const [AdmissonFee,setAdmissonFee]=useState(0)
    const [Year,setYear]=useState(0)
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
    const [dialogclass,setDialogCLass]=useState(0)
    const [dialogYear,setDialogYear]=useState(0)


    const calculateTotal = () => {
        setTotal(
                Number(AdmissonFee) +
                Number(hostelCharge) +
                Number(TutionFee) +
                Number(CautionMoney) +
                Number(ExaminationFee) +
                Number(GamesSportsExicursion) +
                Number(ElectricCharge) +
                Number(LibraryFees) +
                Number(ComputerFees) +
                Number(DevelopmentFees) +
                Number(Miscellaneous) +
                Number(LaundryCharge) +
                Number(MedicalCharge) +
                Number(Uniform) +
                Number(SessionCharge) +
                Number(BedFee)
        )
    };
    const dialog = document.getElementById('myDialogfee');
    const closeDialogButton = document.getElementById('closeDialogfee');
    if(closeDialogButton){
        closeDialogButton.addEventListener('click', () => {
            dialog.close();
          });
    }
    function convertToRoman(num) {
        const lookup = ['','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII']
        let roman = ''
        let i
        
        for ( i in lookup ) {
         if(num==i){
            roman=lookup[i]
            break
         }
           
        }
        return roman;
      }

    useEffect(() => {
        calculateTotal()
    }, [AdmissonFee,hostelCharge,TutionFee,CautionMoney,ExaminationFee,GamesSportsExicursion,ElectricCharge,LibraryFees,ComputerFees,DevelopmentFees,Miscellaneous,LaundryCharge,MedicalCharge,Uniform,SessionCharge,BedFee]);
    const HandleSubmit=(e)=>{
        e.preventDefault()
        const data={
            Class:Class,
            year:Year,
            FeeType:FeeType,
            AdmissonFee:AdmissonFee,
            hostelCharge:hostelCharge,
            TutionFee:TutionFee,
            CautionMoney:CautionMoney,
            ExaminationFee:ExaminationFee,
            GamesSportsExicursion:GamesSportsExicursion,
            ElectricCharge:ElectricCharge,
            LibraryFees:LibraryFees,
            ComputerFees:ComputerFees,
            DevelopmentFees:DevelopmentFees,
            Miscellaneous:Miscellaneous,
            LaundryCharge:LaundryCharge,
            MedicalCharge:MedicalCharge,
            Uniform:Uniform,
            SessionCharge:SessionCharge,
            BedFee:BedFee,
            Total:Total
        }
        axios.post("/api/v1/fee/createfeestructure",data,{headers:{"Authorization":localStorage.getItem("token")}})
            .then((res)=>{
                console.log(res)
                setDialogCLass(Class)
                setDialogYear(Year)
                dialog.showModal();
                //alert("Fee Structure Created Successfully")
                setClass("")
                setYear(0)
                setFeeType("")
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
                // setTotal(0)
            }).catch((error)=>{
                if(error.response.data.msg.errno===1062){
                    alert(`Fee Structure Already Created for Class ${convertToRoman(Class)} in the Academic Year ${Year}`)
                  }
            console.log(error)
        })
    }
    return(
        <div style={{display:props.view}} className="dashbrd-40-colm special-25-div">
            <form onSubmit={HandleSubmit} style={{display:'grid',color:'#3c8dbc',backgroundColor:'whitesmoke',boxShadow:'0 0 5px grey'}}>
            <p style={{fontSize:'17px'}}>New Academic Year Fee Structures </p>
                <dl className="dl-horizontal">

                    <dt><label>Class</label></dt>
                    <dd><select onChange={(e) => setClass(parseInt(e.target.value))} required value={Class}>
                        <option value="">Class</option>
                        <option value="1">
                            I
                        </option>
                        <option value="2">
                            II
                        </option>
                        <option value="3">
                            III
                        </option>
                        <option value="4">
                            IV
                        </option>
                        <option value="5">
                            V
                        </option>
                        <option value="6">
                            VI
                        </option>
                        <option value="7">
                            VII
                        </option>

                        <option value="8">
                            VIII
                        </option>
                        <option value="9">
                            IX
                        </option>
                        <option value="10">
                            X
                        </option>
                        <option value="11">
                            XI
                        </option>
                        <option value="12">
                            XII
                        </option>

                    </select>
                    </dd>

                    <dt><label>Academic Year</label></dt>
                    <dd><input type="number" value={Year} onChange={(e) => setYear(e.target.value)} required/>
                    </dd>

                    <dt><label>Fee Type</label></dt>
                    <dd><select value={FeeType} onChange={(e) => setFeeType(e.target.value)}>
                        <option value="">Select</option>
                        <option value="NewAdmission">New-Admisson</option>
                        <option value="ReAdmisson">Re-Admisson</option>
                    </select>
                    </dd>

                    <dt><label>Admission Fee</label></dt>
                    <dd><input type="number" value={AdmissonFee} onChange={(e) => setAdmissonFee(e.target.value)}/>
                    </dd>

                    <dt><label>Hostel Charge</label></dt>
                    <dd><input type="number" value={hostelCharge} onChange={(e) => setHostelCharge(e.target.value)}/>
                    </dd>

                    <dt><label>Tution Fee</label></dt>
                    <dd><input type="number" value={TutionFee} onChange={(e) => setTutionFee(e.target.value)}/>
                    </dd>

                    <dt><label>Caution Money</label></dt>
                    <dd><input type="number" value={CautionMoney} onChange={(e) => setCautionMoney(e.target.value)}/>
                    </dd>

                    <dt><label>Examination Fee</label></dt>
                    <dd><input type="number" value={ExaminationFee}
                               onChange={(e) => setExaminationFee(e.target.value)}/>
                    </dd>

                    <dt><label>Games & Sports</label></dt>
                    <dd><input type="number" value={GamesSportsExicursion}
                               onChange={(e) => setGamesSportsExicursion(e.target.value)}/>
                    </dd>

                    <dt><label>Electric Charge</label></dt>
                    <dd><input type="number" value={ElectricCharge}
                               onChange={(e) => setElectricCharge(e.target.value)}/>
                    </dd>

                    <dt><label>Library Fees</label></dt>
                    <dd><input type="number" value={LibraryFees} onChange={(e) => setLibraryFees(e.target.value)}/>
                    </dd>

                    <dt><label>Computer Fees</label></dt>
                    <dd><input type="number" value={ComputerFees} onChange={(e) => setComputerFees(e.target.value)}/>
                    </dd>

                    <dt><label>Development Fees</label></dt>
                    <dd><input type="number" value={DevelopmentFees}
                               onChange={(e) => setDevelopmentFees(e.target.value)}/>
                    </dd>

                    <dt><label>Miscellaneous</label></dt>
                    <dd><input type="number" value={Miscellaneous} onChange={(e) => setMiscellaneous(e.target.value)}/>
                    </dd>

                    <dt><label>Laundry Charge</label></dt>
                    <dd><input type="number" value={LaundryCharge} onChange={(e) => setLaundryCharge(e.target.value)}/>
                    </dd>

                    <dt><label>Medical Charge</label></dt>
                    <dd><input type="number" value={MedicalCharge} onChange={(e) => setMedicalCharge(e.target.value)}/>
                    </dd>

                    <dt><label>Uniform</label></dt>
                    <dd><input type="number" value={Uniform} onChange={(e) => setUniform(e.target.value)}/>
                    </dd>

                    <dt><label>Session Charge</label></dt>
                    <dd><input type="number" value={SessionCharge} onChange={(e) => setSessionCharge(e.target.value)}/>
                    </dd>

                    <dt><label>Bed Fee</label></dt>
                    <dd><input type="number" value={BedFee} onChange={(e) => setBedFee(e.target.value)}/>
                    </dd>

                    <dt><label>Total</label></dt>
                    <dd><input type="number" value={Total} readOnly={true}/>
                    </dd>
                </dl>
                <span><button className="dashboard-btn dashboard-btn-scss">Submit</button></span>
            </form>
            <dialog id="myDialogfee" class="dashboard-modal">
                <button id="closeDialogfee" class="dashboard-modal-close-btn ">X </button>
                <p id="modal-text" style={{color:'black'}}> Fee Structures for Class {convertToRoman(dialogclass)} in  Session {dialogYear} has been Created Successfully</p>
                {/* <!-- Add more elements as needed --> */}
            </dialog>
        </div>
    )
}
export default CreateFeeSturcture;