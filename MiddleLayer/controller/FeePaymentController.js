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
        const {Class,year,feeType} = req.body
        let query
        if(Class && year && !feeType) {
            query = `SELECT *
                     FROM fee_structure
                     WHERE Class = '${Class}' AND year = '${year}' order by year desc,Class,fee_type`
        }
        else if(Class && !feeType && !year){
            query = `SELECT *
                     FROM fee_structure
                     WHERE Class = '${Class}' order by year desc,Class,fee_type`
        }
        else if(year && !Class && !feeType){
            query = `SELECT *
                     FROM fee_structure
                     WHERE year = '${year}' order by year desc,Class,fee_type`
        }
        else if(Class && year && feeType){
            query = `SELECT *
                     FROM fee_structure
                     WHERE Class = '${Class}' AND year = '${year}' AND fee_type='${feeType}' order by year desc,Class,fee_type`
        }
        else{
            query = `SELECT *
                     FROM fee_structure order by year desc,Class,fee_type`
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
            Class,
            year,
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
        if(!Class || !year || !id){
            return res.status(400).json({msg:"all field needed"})
        }
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
                         class='${Class}',
                         year='${year}',
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

        // if(feeType==="Monthly"){
        //     tableName = "monthly_fee"
        // }

        if(feeType==="New-Admission"){
            tableName = "new_admission_fee"
        }

        else {
            tableName = "re_admission_fee"
        }

        let query
        if(Class && year && feeType && regNo){
            query = `SELECT 
    a.student_Name, 
    a.roll_no, 
    a.section, 
    a.registration_no, 
    a.class,
    b.*,
    (SELECT c.status FROM ${tableName} c WHERE c.regNo=a.registration_no) AS status,
    (SELECT c.total_fee FROM ${tableName} c WHERE c.regNo=a.registration_no) AS student_total_fee

FROM 
    Student_Admission a 
    JOIN fee_structure b ON a.class = b.class AND b.year = ${year} AND b.fee_type='${feeType}'
WHERE 
    a.class = ${Class} AND 
    a.current_academic_year = ${year} AND a.registration_no="${regNo}";`
        }else{
            query = `SELECT
                         a.student_Name,
                         a.roll_no,
                         a.section,
                         a.registration_no,
                         a.class,
                         b.*,
                         (SELECT c.status FROM ${tableName} c WHERE c.regNo=a.registration_no) AS status
                     FROM
                         Student_Admission a
                             JOIN fee_structure b ON a.class = b.class AND b.year = ${year} AND b.fee_type='${feeType}'
                     WHERE
                         a.class = ${Class} AND
                         a.current_academic_year = ${year} `
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


//New Admission Fee Entry
exports.NewAdmissionFeeEntry = (req, res) => {
    try{
        let {Class,year,regNo,AdmissionFee,hostelCharge,TutionFee,CautionMoney,ExaminationFee,GamesSportsExicursion,ElectricCharge,LibraryFees,ComputerFees,DevelopmentFees,Miscellaneous,LaundryCharge,MedicalCharge,Uniform,SessionCharge,BedFee,Total,PaymentDate,BillDate} = req.body
        if(AdmissionFee===""){
            AdmissionFee=0
        }
        if(hostelCharge==="" ){
            hostelCharge=0
        }
        if(TutionFee==="" ){
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
        let query = `INSERT INTO new_admission_fee (class,year,regNo,admission_fee,hostel_fee,tution_fee,caution_fee,examination_fee,sports_fee,electric_fee,library_fee,computer_fee,development_fee,miscellaneous_fee,laundry_fee,madical_fee,uniform_fee,session_fee,bed_fee,total_fee,entry_date,status,modify_date,bill_date) VALUES ('${Class}','${year}','${regNo}','${AdmissionFee}','${hostelCharge}','${TutionFee}','${CautionMoney}','${ExaminationFee}','${GamesSportsExicursion}','${ElectricCharge}','${LibraryFees}','${ComputerFees}','${DevelopmentFees}','${Miscellaneous}','${LaundryCharge}','${MedicalCharge}','${Uniform}','${SessionCharge}','${BedFee}','${Total}','${PaymentDate}',1,'${PaymentDate}','${BillDate}')`
        Database.query(query,(err,result)=>{
            if(err){
                return res.status(400).json({msg:err})
            }else{
                return res.status(200).json({msg:"New Admission Fee Entry Created Successfully",data:PaymentDate})
            }
        })
    }catch (error) {
        console.log(error)
    }
}


//Re Admission Fee Entry
exports.ReAdmissionFeeEntry = (req, res) => {
    try{
        let {Class,year,regNo,AdmissionFee,hostelCharge,TutionFee,CautionMoney,ExaminationFee,GamesSportsExicursion,ElectricCharge,LibraryFees,ComputerFees,DevelopmentFees,Miscellaneous,LaundryCharge,MedicalCharge,Uniform,SessionCharge,BedFee,Total,PaymentDate,BillDate} = req.body
        if(AdmissionFee===""){
            AdmissionFee=0
        }
        if(hostelCharge==="" ){
            hostelCharge=0
        }
        if(TutionFee==="" ){
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
        console.log(PaymentDate)
        let query = `INSERT INTO re_admission_fee (class,year,regNo,admission_fee,hostel_fee,tution_fee,caution_fee,examination_fee,sports_fee,electric_fee,library_fee,computer_fee,development_fee,miscellaneous_fee,laundry_fee,madical_fee,uniform_fee,session_fee,bed_fee,total_fee,entry_date,modify_date,status,bill_date) VALUES ('${Class}','${year}','${regNo}','${AdmissionFee}','${hostelCharge}','${TutionFee}','${CautionMoney}','${ExaminationFee}','${GamesSportsExicursion}','${ElectricCharge}','${LibraryFees}','${ComputerFees}','${DevelopmentFees}','${Miscellaneous}','${LaundryCharge}','${MedicalCharge}','${Uniform}','${SessionCharge}','${BedFee}','${Total}','${PaymentDate}','${PaymentDate}',1,'${BillDate}')`
        Database.query(query,(err,result)=>{
            if(err){
                return res.status(400).json({msg:err})
            }else{
                return res.status(200).json({msg:"Re Admission Fee Entry Created Successfully"})
            }
        })
    }catch (error) {
        console.log(error)
    }
}




//get New Admission Fee Entry For Update
exports.GetNewAdmissionFeeEntryForUpdate = (req, res) => {
    try{
        const{Class,year,regNo} = req.body
        if(regNo) {
            let query = `SELECT *
                         FROM new_admission_fee
                         WHERE class = '${Class}' AND year = '${year}'
                           AND regNo = '${regNo}'`
            Database.query(query, (err, result) => {
                if (err) {
                    return res.status(400).json({msg: err})
                } else {
                    return res.status(200).json({result})
                }
            })
        }
        else {
            let query = `SELECT *
                         FROM new_admission_fee
                         WHERE class = '${Class}' AND year = '${year}'`
            Database.query(query, (err, result) => {
                if (err) {
                    return res.status(400).json({msg: err})
                } else {
                    return res.status(200).json({result})
                }
            })
        }
    }catch (error) {
        console.log(error)
    }
}

exports.GetReAdmissionFeeEntryForUpdate = (req, res) => {
    try{
        const{Class,year,regNo} = req.body
        if(regNo) {
            let query = `SELECT *
                         FROM re_admission_fee
                         WHERE class = '${Class}' AND year = '${year}'
                           AND regNo = '${regNo}'`
            Database.query(query, (err, result) => {
                if (err) {
                    return res.status(400).json({msg: err})
                } else {
                    return res.status(200).json({result})
                }
            })
        }
        else {
            let query = `SELECT *
                         FROM re_admission_fee
                         WHERE class = '${Class}' AND year = '${year}'`
            Database.query(query, (err, result) => {
                if (err) {
                    return res.status(400).json({msg: err})
                } else {
                    return res.status(200).json({result})
                }
            })
        }
    }catch (error) {
        console.log(error)
    }
}

//Update New Admission Fee Entry
exports.UpdateNewAdmissionFeeEntry = (req, res) => {
    try{
        let {Class,year,regNo,AdmissionFee,hostelCharge,TutionFee,CautionMoney,ExaminationFee,GamesSportsExicursion,ElectricCharge,LibraryFees,ComputerFees,DevelopmentFees,Miscellaneous,LaundryCharge,MedicalCharge,Uniform,SessionCharge,BedFee,Total,BillDate} = req.body
        if(AdmissionFee===""){
            AdmissionFee=0
        }
        if(hostelCharge==="" ){
            hostelCharge=0
        }
        if(TutionFee==="" ){
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
        let query = `UPDATE re_admission_fee
                     SET
                         class='${Class}',
                         year='${year}',
                         regNo='${regNo}',
                         admission_fee='${AdmissionFee}',
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
                         total_fee='${Total}',
                            bill_date='${BillDate}'
                            Where class='${Class}' AND year='${year}' AND regNo='${regNo}'`
        Database.query(query,(err,result)=>{
            if(err){
                return res.status(400).json({msg:err})
            }else{
                return res.status(200).json({msg:"Re Admission Fee Entry Updated Successfully"})
            }
        })

    }catch (error) {
        console.log(error)
    }
}

//Update Re Admission Fee Entry
exports.UpdateReAdmissionFeeEntry = (req, res) => {
    try{
        let {Class,year,regNo,AdmissionFee,hostelCharge,TutionFee,CautionMoney,ExaminationFee,GamesSportsExicursion,ElectricCharge,LibraryFees,ComputerFees,DevelopmentFees,Miscellaneous,LaundryCharge,MedicalCharge,Uniform,SessionCharge,BedFee,Total,BillDate} = req.body
        if(AdmissionFee===""){
            AdmissionFee=0
        }
        if(hostelCharge==="" ){
            hostelCharge=0
        }
        if(TutionFee==="" ){
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
        let query = `UPDATE re_admission_fee
                     SET
                         class='${Class}',
                         year='${year}',
                         regNo='${regNo}',
                         admission_fee='${AdmissionFee}',
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
                         total_fee='${Total}',
                            bill_date='${BillDate}'
                            Where class='${Class}' AND year='${year}' AND regNo='${regNo}'`
        Database.query(query,(err,result)=>{
            if(err){
                return res.status(400).json({msg:err})
            }else{
                return res.status(200).json({msg:"New Admission Fee Entry Updated Successfully"})
            }
        })

    }catch (error) {
        console.log(error)
    }
}


//get student for new Admission fee entry

exports.GetStudentForNewAdmissionFeeEntry = (req, res) => {
    try {
        const {Class, year, regNo} = req.body
        let query
        if (Class && year) {
            query = `SELECT a.student_Name,
                            a.roll_no,
                            a.section,
                            a.registration_no,
                            a.class,
                            b.*,
                            c.total_fee AS status
                     FROM Student_Admission a
                              JOIN new_admission_fee b ON a.registration_no = b.regNo
                              LEFT JOIN fee_structure c ON a.class = c.class
                         AND c.year = "${year}"
                         AND c.fee_type = "NewAdmission"
                     WHERE a.class = "${Class}"
                       AND a.current_academic_year = "${year}";`
        } else {
            query = `SELECT a.student_Name,
                            a.roll_no,
                            a.section,
                            a.registration_no,
                            a.class,
                            b.*,
                            c.total_fee AS status
                     FROM Student_Admission a
                              JOIN new_admission_fee b ON a.registration_no = b.regNo
                              LEFT JOIN fee_structure c ON a.class = c.class
                         AND c.year = "${year}"
                         AND c.fee_type = "NewAdmission"
                     WHERE a.class = "${Class}"
                       AND a.current_academic_year = "${year}"
                       AND a.registration_no = "${regNo}";`
        }
        Database.query(query, (err, result) => {
            if (err) {
                return res.status(400).json({msg: err})
            } else {
                return res.status(200).json({result})
            }
        })
    } catch (error) {
        console.log(error)
    }
}


//get student for re Admission fee entry

exports.GetStudentForReAdmissionFeeEntry = (req, res) => {
    try {
     const{Class,year,regNo} = req.body
     let query
     if(Class && year) {
         query = `SELECT
                      a.student_Name,
                      a.roll_no,
                      a.section,
                      a.registration_no,
                      a.class,
                      b.*,
                      c.total_fee AS status
                  FROM
                      Student_Admission a
                          JOIN re_admission_fee b ON a.registration_no = b.regNo
                          LEFT JOIN fee_structure c ON a.class = c.class
                          AND c.year = "${year}"
                          AND c.fee_type = "ReAdmisson"
                  WHERE
                      a.class = "${Class}"
                    AND a.current_academic_year = "${year}" ;`
     }
        else {
            query = `SELECT
                         a.student_Name,
                         a.roll_no,
                         a.section,
                         a.registration_no,
                         a.class,
                         b.*,
                         c.total_fee AS status,
                     FROM
                         Student_Admission a
                             JOIN re_admission_fee b ON a.registration_no = b.regNo
                             LEFT JOIN fee_structure c ON a.class = c.class
                             AND c.year = "${year}"
                             AND c.fee_type = "ReAdmisson"
                     WHERE
                         a.class = "${Class}"
                       AND a.current_academic_year = "${year}"
                        AND a.registration_no = "${regNo}";`
        }
        Database.query(query, (err, result) => {
            if (err) {
                return res.status(400).json({msg: err})
            } else {
                return res.status(200).json({result})
            }
        })
    }catch (error) {
        console.log(error)
    }
}


//Update New Admission Fee Entry

exports.UpdateNewAdmissionFeeEntryForUpdate = (req, res) => {
    try {
     let {Class,year,regNo,AdmissionFee,hostelCharge,TutionFee,CautionMoney,ExaminationFee,GamesSportsExicursion,ElectricCharge,LibraryFees,ComputerFees,DevelopmentFees,Miscellaneous,LaundryCharge,MedicalCharge,Uniform,SessionCharge,BedFee,Total,Date} = req.body
        if(AdmissionFee===""){
            AdmissionFee=0
        }
        if(hostelCharge==="" ){
            hostelCharge=0
        }
        if(TutionFee==="" ){
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
        let query = `UPDATE new_admission_fee
                     SET
                         admission_fee='${AdmissionFee}',
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
                         total_fee='${Total}',
                            modify_date='${Date}'
                            Where class='${Class}' AND year='${year}' AND regNo='${regNo}'`
        Database.query(query, (err, result) => {
            if (err) {
                return res.status(400).json({msg: err})
            }
            else
            {
                return res.status(200).json({msg: "New Admission Fee Entry Updated Successfully"})
            }
        })
    }catch (error) {
        console.log(error)
    }
}

//Update Re Admission Fee Entry
exports.UpdateReAdmissionFeeEntryForUpdate = (req, res) => {
    try {
     let {Class,year,regNo,AdmissionFee,hostelCharge,TutionFee,CautionMoney,ExaminationFee,GamesSportsExicursion,ElectricCharge,LibraryFees,ComputerFees,DevelopmentFees,Miscellaneous,LaundryCharge,MedicalCharge,Uniform,SessionCharge,BedFee,Total,Date} = req.body
     if (AdmissionFee === "") {
         AdmissionFee = 0
     }
        if (hostelCharge === "") {
            hostelCharge = 0
        }
        if (TutionFee === "") {
            TutionFee = 0
        }
        if (CautionMoney === "") {
            CautionMoney = 0
        }
        if (ExaminationFee === "") {
            ExaminationFee = 0
        }
        if (GamesSportsExicursion === "") {
            GamesSportsExicursion = 0
        }
        if (ElectricCharge === "") {
            ElectricCharge = 0
        }
        if (LibraryFees === "") {
            LibraryFees = 0
        }
        if (ComputerFees === "") {
            ComputerFees = 0
        }
        if (DevelopmentFees === "") {
            DevelopmentFees = 0
        }
        if (Miscellaneous === "") {
            Miscellaneous = 0
        }
        if (LaundryCharge === "") {
            LaundryCharge = 0
        }
        if (MedicalCharge === "") {
            MedicalCharge = 0
        }
        if (Uniform === "") {
            Uniform = 0
        }
        if (SessionCharge === "") {
            SessionCharge = 0
        }
        if (BedFee === "") {
            BedFee = 0
        }
        let query = `UPDATE re_admission_fee
                     SET
                         admission_fee='${AdmissionFee}',
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
                         total_fee='${Total}',
                            modify_date='${Date}'
                            Where class='${Class}' AND year='${year}' AND regNo='${regNo}'`
        Database.query(query, (err, result) => {
            if (err) {
                return res.status(400).json({msg: err})
            } else {
                return res.status(200).json({msg: "Re Admission Fee Entry Updated Successfully"})
            }
        })


    }catch (error) {
        console.log(error)
    }
}