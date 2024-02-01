const Database = require('../Config/Dbconnection')

//Create Faculty

exports.createFaculty = (req, res) => {
    const {name,qualification,joinDate,email,specialized,contactNo}=req.body
    try{
        if(name && qualification && joinDate && email && specialized && contactNo){
            let query = `INSERT INTO faculty_admin (name,heighst_qualification,join_date,email,specialized_field,contact_no,active) VALUES ('${name}','${qualification}','${joinDate}','${email}','${specialized}','${contactNo}',1)`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(400).json({message:"Error Occured"})
                }
                else{
                    res.status(200).json({message:"Faculty Created"})
                }
            })
        }
        else {
            res.status(400).json({message:"All Fields are required"})
        }
    }catch (err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}

//delete faculty
exports.DeleteFaculty = (req, res) => {
    const {id}=req.body
    try{
        if(id){
            let query = `DELETE FROM faculty_admin WHERE id=${id}`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(400).json({message:"Error Occured"})
                }
                else{
                    res.status(200).json({message:"Faculty Deleted"})
                }
            })
        }
        else {
            res.status(400).json({message:"All Fields are required"})
        }
    }catch (err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}

//update faculty
exports.UpdateFaculty = (req, res) => {
    const {id,name,qualification,joinDate,email,specialized,contactNo,releseDate}=req.body
    try{
        if(id && name && qualification && joinDate && email && specialized && contactNo){
            let query = `UPDATE faculty_admin SET name='${name}',heighst_qualification='${qualification}',join_date='${joinDate}',email='${email}',specialized_field='${specialized}',contact_no='${contactNo}' WHERE id=${id}`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(400).json({message:"Error Occured"})
                }
                else{
                    if(releseDate){
                        let query=`UPDATE faculty_admin SET relese_date='${releseDate}',active='0' WHERE id=${id}`
                        Database.query(query,(err,result)=>{
                            if(err){
                                console.log(err)
                                res.status(400).json({message:"Error Occured"})
                            }
                            else{
                                res.status(200).json({message:"Faculty Updated"})
                            }

                        })
                    }
                    else{
                        res.status(200).json({message:"Faculty Updated"})
                    }

                }
            })
        }
        else {
            res.status(400).json({message:"All Fields are required"})
        }
    }catch (err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}

//get all faculty
exports.GetAllFaculty = (req, res) => {
    const {search}=req.body
    try{
        let query
        if(search){
         query=`SELECT * FROM faculty_admin WHERE name LIKE '%${search}%'`
        }
        else{
             query = `SELECT * FROM faculty_admin`
        }
        Database.query(query,(err,result)=>{
            if(err){
                console.log(err)
                res.status(400).json({message:"Error Occured"})
            }
            else{
                res.status(200).json({message:"Faculty Fetched",data:result})
            }
        })
    }catch (err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}

//Create SUBJECT
exports.createSubject = (req, res) => {
    const{name}=req.body
    try{
        if(name){
            let query = `INSERT INTO Subject (subject) VALUES ('${name}')`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(400).json({message:"Error Occured",err:err})
                }
                else{
                    res.status(200).json({message:"Subject Created"})
                }
            })
        }
        else{
            res.status(400).json({message:"All Fields are required",Body:req.body})
        }
    }catch (err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}

//get all subject
exports.GetAllSubject = (req, res) => {
    try {
        let query = `SELECT *
                     FROM Subject`
        Database.query(query, (err, result) => {
            if (err) {
                console.log(err)
                res.status(400).json({message: "Error Occured"})
            } else {
                res.status(200).json({message: "Subject Fetched", data: result})
            }
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({message: "Error Occured", err: err})
    }
}

//delete subject
exports.DeleteSubject = (req, res) => {
    const {id}=req.body
    try{
        if(id){
            let query = `DELETE FROM Subject WHERE id=${id}`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(400).json({message:"Error Occured"})
                }
                else{
                    res.status(200).json({message:"Subject Deleted"})
                }
            })
        }
        else {
            res.status(400).json({message:"All Fields are required"})
        }
    }catch (err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}

//get all internal exam
exports.GetAllInternalExam = (req, res) => {
    try {
        let query = `SELECT *
                     FROM internal_exam`
        Database.query(query, (err, result) => {
            if (err) {
                console.log(err)
                res.status(400).json({message: "Error Occured"})
            } else {
                res.status(200).json({message: "Subject Fetched", data: result})
            }
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({message: "Error Occured", err: err})
    }
}

//delete internal exam
exports.DeleteInternalExam = (req, res) => {
    const {id}=req.body
    try{
        if(id){
            let query = `DELETE FROM internal_exam WHERE id=${id}`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(400).json({message:"Error Occured"})
                }
                else{
                    res.status(200).json({message:"Subject Deleted"})
                }
            })
        }
        else {
            res.status(400).json({message:"All Fields are required"})
        }
    }catch (err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}


//get all external exam
exports.GetAllExternalExam = (req, res) => {
    try {
        let query = `SELECT *
                     FROM external_exam`
        Database.query(query, (err, result) => {
            if (err) {
                console.log(err)
                res.status(400).json({message: "Error Occured"})
            } else {
                res.status(200).json({message: "Subject Fetched", data: result})
            }
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({message: "Error Occured", err: err})
    }
}

//delete external exam
exports.DeleteExternalExam = (req, res) => {
    const {id}=req.body
    try{
        if(id){
            let query = `DELETE FROM external_exam WHERE id=${id}`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(400).json({message:"Error Occured"})
                }
                else{
                    res.status(200).json({message:"Subject Deleted"})
                }
            })
        }
        else {
            res.status(400).json({message:"All Fields are required"})
        }
    }catch (err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}

//create Exam
exports.CreateExam = (req, res) => {

    const{name,totalMarks,examType}=req.body
    try{
        if(name && totalMarks && examType){
            if(examType==="Internal"){
                let query = `INSERT INTO internal_exam (internal_exam_name,int_exam_marks) VALUES ('${name}','${totalMarks}')`
                Database.query(query,(err,result)=>{
                    if(err){
                        console.log(err)
                        res.status(400).json({message:"Error Occured",err:err})
                    }
                    else{
                        res.status(200).json({message:"Examination Created"})
                    }
                })
            }
            else{
                let query = `INSERT INTO external_exam (external_exam_name,ext_exam_marks) VALUES ('${name}','${totalMarks}')`
                Database.query(query,(err,result)=>{
                    if(err){
                        console.log(err)
                        res.status(400).json({message:"Error Occured",err:err})
                    }
                    else{
                        res.status(200).json({message:"Examination Created"})
                    }
                })
            }
        }
        else {
            return res.status(400).json({message:"All Fields are required"})
        }
    }catch (err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}

//create Marks

exports.CreateMarks = (req, res) => {
    const {examName,subject,regNo,marks,Class}=req.body
    try{
        if(examName!=="Exam Name") {
            if (!examName || !subject || !regNo || !marks) {
                return res.status(400).json({message: "All Fields are required"})
            } else {
                let query = `INSERT INTO Marks (regNo, subject, exam_name, marks,class)
                             VALUES ('${regNo}', '${subject}', '${examName}', '${marks}','${Class}')`
                Database.query(query, (err, result) => {
                    if (err) {
                        console.log(err)
                        res.status(400).json({message: "Error Occured", err: err})
                    } else {
                        res.status(200).json({message: "Marks Created"})
                    }
                })
            }
        }
    }catch (err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}

//search marks for Update
exports.MarksSearch = (req, res) => {
    try{
        const {regNo,examName,Class}=req.body
        if(regNo && examName && Class){
            let query = `SELECT * FROM Marks WHERE regNo='${regNo}' AND exam_name='${examName}' AND class='${Class}'`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(400).json({message:"Error Occured",err:err})
                }
                else{
                    res.status(200).json({message:"Marks Fetched",data:result})
                }
            })
        }
        else{
            res.status(400).json({message:"All Fields are required"})
        }
    }catch(err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}

//update marks
exports.UpdateMarks=(req,res)=>{
    try{
        const {subject,marks,examName,id}=req.body
        if(!subject || !marks || !examName || !id){
            return res.status(400).json({message:"All Fields are required"})
        }
        else {
            let query= `UPDATE Marks SET subject='${subject}',marks='${marks}',exam_name='${examName}' WHERE id=${id}`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(400).json({message:"Error Occured",err:err})
                }
                else{
                    res.status(200).json({message:"Marks Updated"})
                }
            })
        }

    }catch(err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}
//get all faculty middlelayer
exports.GetAllFacultyMiddleLayer = (req, res) => {
    const {search}=req.body
    try{
        let query
        if(search){
         query=`SELECT * FROM faculty_admin WHERE active=1 AND name LIKE '%${search}%'`
        }
        else{
             query = `SELECT * FROM faculty_admin WHERE active=1`
        }
        Database.query(query,(err,result)=>{
            if(err){
                console.log(err)
                res.status(400).json({message:"Error Occured"})
            }
            else{
                res.status(200).json({message:"Faculty Fetched",data:result})
            }
        })
    }catch (err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}