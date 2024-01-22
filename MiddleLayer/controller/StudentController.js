const Database = require('../Config/Dbconnection')


//create student admission table




//get all students byclass and registration
exports.GetAllStudent=(req,res)=>{
    const {Class,regNo,year}=req.body
    let query
    try{
        if(!Class && !regNo && !year){
            query=`SELECT * FROM Student_Admission where active=1`
        }
        else if(Class && !regNo && !year){
            query=`SELECT * FROM Student_Admission WHERE Class='${Class}' and active=1`
        }

        else if(!Class && regNo && !year){
            query=`SELECT * FROM Student_Admission WHERE registration_no regexp '${regNo}' and active=1`
        }
        else if(!Class && !regNo && year){
            query=`SELECT * FROM Student_Admission WHERE admission_year regexp '${year}' and active=1`
        }

        else if(Class && regNo && !year){
            query=`SELECT * FROM Student_Admission WHERE Class regexp '${Class}' and registration_no regexp '${regNo}' and active=1`
        }
        else if(!Class && regNo && year){
            query=`SELECT * FROM Student_Admission WHERE registration_no regexp '${regNo}' and admission_year regexp '${year}' and active=1`
        }
        else if(Class && !regNo && year){
            query=`SELECT * FROM Student_Admission WHERE Class regexp '${Class}' and admission_year regexp '${year}' and active=1`
        }

        else{
            query=`SELECT * FROM Student_Admission WHERE registration_no regexp '${regNo}' and admission_year regexp '${year}' and Class regexp '${Class}' and active=1`
        }
       
        Database.query(query,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                return res.status(200).json({result})
            }
        })
    }
    catch(err){
        console.log(err)
    }
}


//Master student admission

exports.MasterStudentAdmission=(req,res)=> {
    const {
        name,
        regNo,
        adharNo,
        sex,
        religion,
        dob,
        cast,
        physicallyChallenged,
        orphanage,
        fatherName,
        fatherQualification,
        fatherOcupation,
        fatherMonthlyIncomefatherContactNo,
        motherName,
        motherQualification,
        motherOcupation,
        motherMonthlyIncome,
        motherContactNo,
        guardianName,
        relationship,
        guardianContactNoaddress,
        address,
        pinNo,
        bspId,
        applyClass,
        admissionYear,
        admissionDate,
        age,
        bloodGroup,
        bankAcountNo,
        brunch,
        ifscCode
    } = req.body
    try {
        if (!name || !regNo || !adharNo || !sex || !religion || !dob || !cast || !guardianName || !relationship || !guardianContactNoaddress || !address || !pinNo || !applyClass || !admissionYear || !admissionDate || !age) {
            return res.status(400).json({
                msg: "please fill all the importent field"
            })
        } else {

        }
    }
    catch(err){
        return res.status(500).json({
            err:err
        })
    }
}