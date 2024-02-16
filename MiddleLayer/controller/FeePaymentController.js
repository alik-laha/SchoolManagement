const Database = require('../Config/Dbconnection')

//Create a new Fee Structure
exports.CreateFeeStructure = (req, res) => {
    try{
        const {Class,year,FeeType,AdmissonFee,HostelCharge,TutionFee,CautionMoney,ExaminationFee,GamesSportsExicursion,ElectricCharge,LibraryFees,ComputerFees,DevelopmentFees,Miscellaneous,LaundryCharge,MedicalCharge,Uniform,SessionCharge,BedFee,Total} = req.body
        if(!Class || !year || !FeeType || !AdmissonFee || !HostelCharge || !TutionFee || !CautionMoney || !ExaminationFee || !GamesSportsExicursion || !ElectricCharge || !LibraryFees || !ComputerFees || !DevelopmentFees || !Miscellaneous || !LaundryCharge || !MedicalCharge || !Uniform || !SessionCharge || !BedFee || !Total){
            return res.status(400).json({msg:"Please Enter All Fields"})
        }else{
            let query= `INSERT INTO fee_structure (Class,year,FeeType,AdmissonFee,HostelCharge,TutionFee,CautionMoney,ExaminationFee,GamesSportsExicursion,ElectricCharge,LibraryFees,ComputerFees,DevelopmentFees,Miscellaneous,LaundryCharge,MedicalCharge,Uniform,SessionCharge,BedFee,Total) VALUES ('${Class}','${year}','${FeeType}','${AdmissonFee}','${HostelCharge}','${TutionFee}','${CautionMoney}','${ExaminationFee}','${GamesSportsExicursion}','${ElectricCharge}','${LibraryFees}','${ComputerFees}','${DevelopmentFees}','${Miscellaneous}','${LaundryCharge}','${MedicalCharge}','${Uniform}','${SessionCharge}','${BedFee}','${Total}')`
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
