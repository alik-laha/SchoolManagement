const Database = require('../Config/Dbconnection')

//Create a new Fee Structure
exports.CreateFeeStructure = (req, res) => {
    try{
        const {Class,year,FeeType,AdmissonFee,hostelCharge,TutionFee,CautionMoney,ExaminationFee,GamesSportsExicursion,ElectricCharge,LibraryFees,ComputerFees,DevelopmentFees,Miscellaneous,LaundryCharge,MedicalCharge,Uniform,SessionCharge,BedFee,Total} = req.body
        if(!Class || !year || !FeeType){
            return res.status(400).json({msg:"Please Enter All Fields"})
        }else{
            let query= `INSERT INTO fee_structure (Class,year,fee_type,admission_fee,hostel_fee,tution_fee,caution_fee,examination_fee,sports_fee,electric_fee,library_fee,computer_fee,development_fee,miscellaneous_fee,laundry_fee,madical_fee,uniform_fee,session_fee,bed_fee,total_fee) VALUES ('${Class}','${year}','${FeeType}','${AdmissonFee}','${hostelCharge}','${TutionFee}','${CautionMoney}','${ExaminationFee}','${GamesSportsExicursion}','${ElectricCharge}','${LibraryFees}','${ComputerFees}','${DevelopmentFees}','${Miscellaneous}','${LaundryCharge}','${MedicalCharge}','${Uniform}','${SessionCharge}','${BedFee}','${Total}')`
            Database.query(query,(err,result)=>{
                if(err){
                    return res.status(400).json({msg:err})
                }else{
                    return res.status(200).json({msg:"Fee Structure Created Successfully"})
                }
            })
        }
    }catch (error) {
        console.log(error)
    }
}
