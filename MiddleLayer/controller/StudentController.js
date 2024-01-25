const Database = require('../Config/Dbconnection')


//create student admission table




//last id of student admission
exports.LastId = (req, res) => {
    try {
        let query = `SELECT serial_no from master_student ORDER BY serial_no DESC LIMIT 1`
        Database.query(query, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                return res.status(200).json({result})
            }
        })
    }catch(err){
            console.log(err)

        }
}


//get all students byclass and registration
exports.GetAllStudent = (req, res) => {
    const { Class, regNo, year } = req.body
    let query
    try {
        if (!Class && !regNo && !year) {
            query = `SELECT * FROM Student_Admission WHERE active=1`
        }
        else if (Class && !regNo && !year) {
            query = `SELECT * FROM Student_Admission WHERE Class='${Class}' and active=1`
        }

        else if (!Class && regNo && !year) {
            query = `SELECT * FROM Student_Admission WHERE registration_no regexp '${regNo}' and active=1`
        }
        else if (!Class && !regNo && year) {
            query = `SELECT * FROM Student_Admission WHERE admission_year regexp '${year}' and active=1`
        }

        else if (Class && regNo && !year) {
            query = `SELECT * FROM Student_Admission WHERE Class regexp '${Class}' and registration_no regexp '${regNo}' and active=1`
        }
        else if (!Class && regNo && year) {
            query = `SELECT * FROM Student_Admission WHERE registration_no regexp '${regNo}' and admission_year regexp '${year}' and active=1`
        }
        else if (Class && !regNo && year) {
            query = `SELECT * FROM Student_Admission WHERE Class regexp '${Class}' and admission_year regexp '${year}' and active=1`
        }

        else {
            query = `SELECT * FROM Student_Admission WHERE registration_no regexp '${regNo}' and admission_year regexp '${year}' and Class regexp '${Class}' and active=1`
        }

        Database.query(query, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                return res.status(200).json({ result })
            }
        })
    }
    catch (err) {
        console.log(err)
    }
}


//Master student admission

exports.MasterStudentAdmission = (req, res) => {
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
        fatherMonthlyIncome,
        fatherContactNo,
        motherName,
        motherQualification,
        motherOcupation,
        motherMonthlyIncome,
        motherContactNo,
        guardianName,
        relationship,
        guardianContactNo,
        address,
        pinNo,
        bspId,
        applyClass,
        admissionYear,
        admissonDate,
        age,
        bloodGroup,
        bankAcountNo,
        brunch,
        ifscCode
    } = req.body
    try {
        if (!name || !regNo || !adharNo || !sex || !religion || !dob || !cast || !guardianName || !relationship || !guardianContactNo || !address || !pinNo || !applyClass || !admissionYear || !admissonDate || !age) {
            return res.status(400).json({
                msg: "please fill all the importent field",
                data: name, regNo, adharNo, sex, religion, dob, cast, guardianName, relationship, guardianContactNo, address, pinNo, applyClass, admissionYear, admissonDate, age
            })
        } else {
            let query = `
                INSERT INTO master_student (
                    student_Name, adhar_no, registration_no, sex, religion, dob, cast, physically_challenged, orphanage,
                    father_name, father_qualification, father_ocupation, father_monthlyIncome, father_contact,
                    mother_name, mother_qualification, mother_ocupation, mother_monthlyIncome, mother_contact,
                    guardian_name, relationship, guardian_contact, address, pin_no, bsp_id, applied_class, admisson_year,
                     age,admisson_date, blood_group, acount_no, branch, ifsc
                ) VALUES (
                             "${name}", "${adharNo}", "${regNo}", "${sex}", "${religion}", "${dob}", "${cast}", "${physicallyChallenged}",
                             "${orphanage}", "${fatherName}", "${fatherQualification}", "${fatherOcupation}", "${fatherMonthlyIncome}",
                             "${fatherContactNo}", "${motherName}", "${motherQualification}", "${motherOcupation}", "${motherMonthlyIncome}",
                             "${motherContactNo}", "${guardianName}", "${relationship}", "${guardianContactNo}", "${address}", "${pinNo}",
                             "${bspId}", "${applyClass}", "${admissionYear}", "${age}", "${admissonDate}", "${bloodGroup}",
                             "${bankAcountNo}", "${brunch}", "${ifscCode}"
                         )`;
            Database.query(query, (err, result) => {
                if (err) {
                    return res.status(500).json({
                        err: err
                    })
                }
                else {
                    return res.status(200).json({
                        msg: "student admission successfully Done"
                    })
                }
            })

        }
    }
    catch (err) {
        return res.status(500).json({
            err: err
        })
    }
}

//get Master student admission by registration no and admission year and applied class
exports.GetMasterStudentAdmisson= (req, res) => {
    const{regNo,admissionYear,applyClass}=req.body
    try{
        let query
        if (!regNo && !admissionYear && !applyClass) {
            query = `SELECT * FROM master_student`
        }
        else if (regNo && !admissionYear && !applyClass) {
            query = `SELECT * FROM master_student WHERE registration_no regexp '${regNo}'`
        }

        else if (!regNo && admissionYear && !applyClass) {
            query = `SELECT * FROM master_student WHERE admisson_year = '${admissionYear}'`
        }
        else if (!regNo && !admissionYear && applyClass) {
            query = `SELECT * FROM master_student WHERE applied_class='${applyClass}' `
        }

        else if (regNo && admissionYear && !applyClass) {
            query = `SELECT * FROM master_student WHERE registration_no regexp'${regNo}' and admisson_year='${admissionYear}'`
        }
        else if (!regNo && admissionYear && applyClass) {
            query = `SELECT * FROM master_student WHERE admisson_year='${admissionYear}' and applied_class='${applyClass}'`
        }
        else if (regNo && !admissionYear && applyClass) {
            query = `SELECT * FROM master_student WHERE registration_no regexp'${regNo}' and applied_class='${applyClass}'`
        }

        else {
            query = `SELECT * FROM master_student WHERE registration_no regexp'${regNo}' and admisson_year='${admissionYear}' and applied_class='${applyClass}' `
        }
        Database.query(query, (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                return res.status(200).json({ result })
            }
        })

    }catch (err){
        console.log(err)
    }
}

//student admission
exports.StudentAdmission = (req, res) => {
    const {name, regNo, applyClass, admissionYear} = req.body
    try {
        if (!name || !regNo || !applyClass || !admissionYear) {
            return res.status(400).json({
                msg: "please fill all the importent field",
                data: name, regNo, applyClass, admissionYear
            })
        } else {
            let query = `INSERT INTO Student_Admission (student_Name, registration_no, class, admission_year,
                                                        current_academic_year, active)
                         VALUES ("${name}", "${regNo}", "${applyClass}", "${admissionYear}", "${admissionYear}","1")`
            Database.query(query, (err, result) => {
                if (err) {
                    return res.status(500).json({
                        err: err.sqlMessage
                    })
                } else {
                    return res.status(200).json({
                        msg: "student admission successfully Done"
                    })
                }
            })
        }
    } catch (err) {
        console.log(err)
    }
}

//update Roll No and section

exports.UpdateStudentAdmission = (req, res) => {
    const{rollNo,section,regNo}=req.body
    try{
        if(!{rollNo,section}||!regNo){
            return res.status(400).json({
                msg:"At least one Data needed"
            })
        }
        let query=`UPDATE Student_Admission SET section='${section}',roll_no='${rollNo}' WHERE registration_no='${regNo}'`
        Database.query(query,(err,result)=>{
            if(err){
                console.log(err)
            }else{
                return res.status(200).json({
                    msg:"student Roll and section updated successfully"
                })
            }
        })
    }
    catch (err){
        console.log(err)
    }
}