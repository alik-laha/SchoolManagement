const Database = require('../Config/Dbconnection')

//Create a new Fee Structure
exports.CreateFeeStructure = (req, res) => {
    try{
        let {Class,year,FeeType,AdmissonFee,hostelCharge,TutionFee,CautionMoney,ExaminationFee,GamesSportsExicursion,ElectricCharge,LibraryFees,ComputerFees,DevelopmentFees,Miscellaneous,LaundryCharge,MedicalCharge,Uniform,SessionCharge,BedFee,Total} = req.body
        if(!Class || !year || !FeeType){
            return res.status(400).json({msg:"Please Enter All Fields"})
        }else{
            if(AdmissonFee===""){
                AdmissonFee=0
            }
            if(hostelCharge===""){
                hostelCharge=0
            }
            if(TutionFee===""){
                TutionFee=0
            }
            if(CautionMoney===""){
                CautionMoney=0
            }
            if(ExaminationFee===""){
                ExaminationFee=0
            }
            if(GamesSportsExicursion===""){
                GamesSportsExicursion=0
            }
            if(ElectricCharge===""){
                ElectricCharge=0
            }
            if(LibraryFees===""){
                LibraryFees=0
            }
            if(ComputerFees===""){
                ComputerFees=0
            }
            if(DevelopmentFees===""){
                DevelopmentFees=0
            }
            if(Miscellaneous===""){
                Miscellaneous=0
            }
            if(LaundryCharge===""){
                LaundryCharge=0
            }
            if(MedicalCharge===""){
                MedicalCharge=0
            }
            if(Uniform===""){
                Uniform=0
            }
            if(SessionCharge===""){
                SessionCharge=0
            }
            if(BedFee===""){
                BedFee=0
            }
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
        let {
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
        if(AdmissonFee===""){
            AdmissonFee=0
        }
        if(hostelCharge===""){
            hostelCharge=0
        }
        if(TutionFee===""){
            TutionFee=0
        }
        if(CautionMoney===""){
            CautionMoney=0
        }
        if(ExaminationFee===""){
            ExaminationFee=0
        }
        if(GamesSportsExicursion===""){
            GamesSportsExicursion=0
        }
        if(ElectricCharge===""){
            ElectricCharge=0
        }
        if(LibraryFees===""){
            LibraryFees=0
        }
        if(ComputerFees===""){
            ComputerFees=0
        }
        if(DevelopmentFees===""){
            DevelopmentFees=0
        }
        if(Miscellaneous===""){
            Miscellaneous=0
        }
        if(LaundryCharge===""){
            LaundryCharge=0
        }
        if(MedicalCharge===""){
            MedicalCharge=0
        }
        if(Uniform===""){
            Uniform=0
        }
        if(SessionCharge===""){
            SessionCharge=0
        }
        if(BedFee===""){
            BedFee=0
        }
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


//get student for fee entry
exports.GetStudentForFeeEntry = (req, res) => {
    try{
        const{Class,year,feeType,regNo} = req.body
        let tableName
        if(feeType==="Monthly"){
           tableName = "monthly_fee"
        }
        else if(feeType==="NewAdmission"){
            tableName = "new_admission_fee"
        }
        else {
            tableName = "re_admission_fee"
        }
        let query
        if(Class && year && feeType && regNo) {
            query = `SELECT 
    a.student_Name, 
    a.roll_no, 
    a.section, 
    a.registration_no, 
    a.class,
    (SELECT b.total_fee FROM fee_structure b WHERE b.year = ${year} AND b.class = ${Class} AND b.fee_type='${feeType}') AS total_fee
FROM 
    Student_Admission a 
WHERE 
    a.class = ${Class} AND 
    a.current_academic_year = ${year}
    AND a.registration_no = ${regNo};`
        }else{
            query = `SELECT 
    a.student_Name, 
    a.roll_no, 
    a.section, 
    a.registration_no, 
    a.class,
    a.current_academic_year AS year,
    (SELECT b.total_fee FROM fee_structure b WHERE b.year = ${year} AND b.class = ${Class} AND b.fee_type='${feeType}') AS total_fee,
    (SELECT c.status  FROM ${tableName} c WHERE c.regNo=a.registration_no) AS status
FROM 
    Student_Admission a 
WHERE 
    a.class = ${Class} AND 
    a.current_academic_year = ${year};`
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