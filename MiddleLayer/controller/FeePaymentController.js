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


//Get Fee Structure
exports.GetFeeStructure = (req, res) => {
    try{
        const {Class,year} = req.body
        let query
        if(Class && year) {
            query = `SELECT *
                     FROM fee_structure
                     WHERE Class = '${Class}' AND year = '${year}'`
        }
        else if(Class){
            query = `SELECT *
                     FROM fee_structure
                     WHERE Class = '${Class}'`
        }
        else if(year){
            query = `SELECT *
                     FROM fee_structure
                     WHERE year = '${year}'`
        }
        else{
            query = `SELECT *
                     FROM fee_structure`
        }
        Database.query(query,(err,result)=>{
            if(err){
                return res.status(400).json({msg:err})
            }else{
                return res.status(200).json({result})
            }
        })
    }catch (error) {
        console.log(error)
    }
}

//Edit Fee Structure
exports.EditFeeStructure = (req, res) => {
    try {
        const {
            id,
            AdmissonFee,
            hostelCharge,
            TutionFee,
            CautionMoney,
            ExaminationFee,
            GamesSportsExicursion,
            ElectricCharge,
            LibraryFees,
            ComputerFees,
            DevelopmentFees,
            Miscellaneous,
            LaundryCharge,
            MedicalCharge,
            Uniform,
            SessionCharge,
            BedFee,
            Total
        } = req.body
        let query = `UPDATE fee_structure
                     SET
                        admission_fee='${AdmissonFee}',
                         hostel_fee='${hostelCharge}',
                         tution_fee='${TutionFee}',
                         caution_fee='${CautionMoney}',
                         examination_fee='${ExaminationFee}',
                         sports_fee='${GamesSportsExicursion}',
                         electric_fee='${ElectricCharge}',
                         library_fee='${LibraryFees}',
                         computer_fee='${ComputerFees}',
                         development_fee='${DevelopmentFees}',
                         miscellaneous_fee='${Miscellaneous}',
                         laundry_fee='${LaundryCharge}',
                         madical_fee='${MedicalCharge}',
                         uniform_fee='${Uniform}',
                         session_fee='${SessionCharge}',
                         bed_fee='${BedFee}',
                         total_fee='${Total}'
                     WHERE id = '${id}'`
        Database.query(query, (err, result) => {
            if (err) {
                return res.status(400).json({msg: err})
            } else {
                return res.status(200).json({msg: "Fee Structure Updated Successfully"})
            }
        })
    }
    catch (error) {
        console.log(error)
    }
}