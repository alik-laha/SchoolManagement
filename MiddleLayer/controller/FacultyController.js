const Database = require('../Config/Dbconnection')

//Create Faculty

exports.createFaculty = (req, res) => {
    const {name,qualification,joinDate,email,specialized,contactNo,aadharno,pan,address,dob,Type}=req.body
    try{
        if(1){
            let query = `INSERT INTO faculty_admin (name,heighst_qualification,join_date,email,specialized_field,contact_no,active,aadhar,address,dob,pan,type) VALUES ('${name}','${qualification}','${joinDate}','${email}','${specialized}','${contactNo}',1,'${aadharno}','${address}','${dob}','${pan}','${Type}')`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    res.status(400).json({message:"Error Occured",err:err})
                }
                else{
                    res.status(200).json({message:"Faculty has been Created"})
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
    const {id,name,qualification,joinDate,email,specialized,contactNo,releseDate,aadharno,pan,address,dob,Type}=req.body
    try{
        let query
        if(id && name && qualification && joinDate && email && specialized && contactNo && !releseDate) {
            query = `UPDATE faculty_admin
                         SET name='${name}',
                             heighst_qualification='${qualification}',
                             join_date='${joinDate}',
                             email='${email}',
                             specialized_field='${specialized}',
                             contact_no='${contactNo}',
                             aadhar='${aadharno}',
                                address='${address}',
                                dob='${dob}',
                                pan='${pan}',
                                type='${Type}'
                         WHERE id = ${id}`

        }
        else{
            query = `UPDATE faculty_admin
                         SET name='${name}',
                             heighst_qualification='${qualification}',
                             join_date='${joinDate}',
                             email='${email}',
                             specialized_field='${specialized}',
                             contact_no='${contactNo}',
                             relese_Date='${releseDate}',
                             active='0',
                                aadhar='${aadharno}',
                                address='${address}',
                                dob='${dob}',
                                pan='${pan}'
                         WHERE id = ${id}`
        }
        Database.query(query,(err,result)=>{
            if(err){
                return res.status(400).json({message:"Error Occured",err:err})
            }else{
                return res.status(200).json({message:"Faculty Updated"})
            }
        })

    }catch (err){
        console.log(err)
        res.status(400).json({message:"Error Occured",err:err})
    }
}

//get all faculty
exports.GetAllFaculty = (req, res) => {
    const {search,Type}=req.body
    try{
        let query
        if(search && !Type){
         query=`SELECT * FROM faculty_admin WHERE name REGEXP '${search}' order by type ASC,join_date DESC`
        }
        else if(Type && ! search){
            query=`SELECT * FROM faculty_admin WHERE type= '${Type}' order by type ASC,join_date DESC`
        }
        else if(Type && search){
            query=`SELECT * FROM faculty_admin WHERE name REGEXP '${search}' AND type='${Type}' order by type ASC,join_date DESC`
        }
        else{
             query = `SELECT * FROM faculty_admin order by type ASC,join_date DESC`
        }
        Database.query(query,(err,result)=>{
            if(err){
                console.log(err)
               return res.status(400).json({message:"Error Occured"})
            }
            else{
               return res.status(200).json({message:"Faculty Fetched",data:result})
            }
        })
    }catch (err){
        console.log(err)
       return res.status(400).json({message:"Error Occured",err:err})
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
                    return res.status(400).json({message:"Error Occured",err:err})
                }
                else{
                    return res.status(200).json({message:"Subject Created"})
                }
            })
        }
        else{
           return res.status(400).json({message:"All Fields are required",Body:req.body})
        }
    }catch (err){
        console.log(err)
       return res.status(400).json({message:"Error Occured",err:err})
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
              return  res.status(400).json({message: "Error Occured"})
            } else {
               return res.status(200).json({message: "Subject Fetched", data: result})
            }
        })
    }
    catch (err) {
        console.log(err)
      return  res.status(400).json({message: "Error Occured", err: err})
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
                   return res.status(400).json({message:"Error Occured"})
                }
                else{
                  return  res.status(200).json({message:"Subject Deleted"})
                }
            })
        }
        else {
          return  res.status(400).json({message:"All Fields are required"})
        }
    }catch (err){
        console.log(err)
       return res.status(400).json({message:"Error Occured",err:err})
    }
}

//get all internal exam
exports.GetAllInternalExam = (req, res) => {
    try {
        let query = `SELECT *
                     FROM internal_exam order by internal_exam_name`
        Database.query(query, (err, result) => {
            if (err) {
                console.log(err)
               return res.status(400).json({message: "Error Occured"})
            } else {
              return  res.status(200).json({message: "Subject Fetched", data: result})
            }
        })
    }
    catch (err) {
        console.log(err)
       return res.status(400).json({message: "Error Occured", err: err})
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
                  return  res.status(400).json({message:"Error Occured"})
                }
                else{
                  return  res.status(200).json({message:"Subject Deleted"})
                }
            })
        }
        else {
            return res.status(400).json({message:"All Fields are required"})
        }
    }catch (err){
        console.log(err)
        return res.status(400).json({message:"Error Occured",err:err})
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
                return  res.status(400).json({message: "Error Occured"})
            } else {
                return  res.status(200).json({message: "Subject Fetched", data: result})
            }
        })
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({message: "Error Occured", err: err})
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
                    return  res.status(400).json({message:"Error Occured"})
                }
                else{
                    return  res.status(200).json({message:"Subject Deleted"})
                }
            })
        }
        else {
            return  res.status(400).json({message:"All Fields are required"})
        }
    }catch (err){
        console.log(err)
        return res.status(400).json({message:"Error Occured",err:err})
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
                        return res.status(400).json({message:"Error Occured",err:err})
                    }
                    else{
                        return res.status(200).json({message:"Examination Created"})
                    }
                })
            }
            else{
                let query = `INSERT INTO external_exam (external_exam_name,ext_exam_marks) VALUES ('${name}','${totalMarks}')`
                Database.query(query,(err,result)=>{
                    if(err){
                        console.log(err)
                        return  res.status(400).json({message:"Error Occured",err:err})
                    }
                    else{
                        return  res.status(200).json({message:"Examination Created"})
                    }
                })
            }
        }
        else {
            return res.status(400).json({message:"All Fields are required"})
        }
    }catch (err){
        console.log(err)
        return  res.status(400).json({message:"Error Occured",err:err})
    }
}

//create Marks
exports.CreateMarks = (req, res) => {
    const {examName,subject,regNo,marks,Class}=req.body
    try{
        if(examName!=="Exam Name") {
            if (!examName || !subject || !regNo ) {
                
                return res.status(400).json({message: "All Fields are required"})
            } else {
                let query = `INSERT INTO Marks (regNo, subject, exam_name, marks,class)
                             VALUES ('${regNo}', '${subject}', '${examName}', '${marks}','${Class}')`
                Database.query(query, (err, result) => {
                    if (err) {
                        console.log(err)
                        return res.status(400).json({message: "Error Occured", err: err})
                    } else {
                        return res.status(200).json({message: "Marks Created"})
                    }
                })
            }
        }
    }catch (err){
        console.log(err)
        return  res.status(400).json({message:"Error Occured",err:err})
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
                    return  res.status(400).json({message:"Error Occured",err:err})
                }
                else{
                    return  res.status(200).json({message:"Marks Fetched",data:result})
                }
            })
        }
        else{
            return  res.status(400).json({message:"All Fields are required"})
        }
    }catch(err){
        console.log(err)
        return  res.status(400).json({message:"Error Occured",err:err})
    }
}

//update marks
exports.UpdateMarks=(req,res)=>{
    try{
        const {subject,marks,examName,reg,Class,year}=req.body
        if(!subject || !marks || !examName || !reg || !Class || !year){
            return res.status(400).json({message:"All Fields are required"})
        }
        else {
            let query= `UPDATE Marks SET marks='${marks}' WHERE regNo='${reg}' AND exam_name='${examName}' AND subject='${subject}' AND class='${Class}' AND Year='${year}'`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    return res.status(400).json({message:"Error Occured",err:err})
                }
                else{
                    return  res.status(200).json({message:"Marks Updated"})
                }
            })
        }

    }catch(err){
        console.log(err)
        return  res.status(400).json({message:"Error Occured",err:err})
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
                return res.status(400).json({message:"Error Occured"})
            }
            else{
                return res.status(200).json({message:"Faculty Fetched",data:result})
            }
        })
    }catch (err){
        console.log(err)
        return res.status(400).json({message:"Error Occured",err:err})
    }
}

//get all marks for regNo Class and examName
exports.GetAllMarks = (req, res) => {
    const {regNo,Class,examName,year}=req.body
    try{
        let query
        if(!Class){
            return res.status(400).json({
                msg:"Please Provide the Class"
            })
        }
        else {
            if (!regNo && Class && !examName && !year) {
                query =`SELECT Student_Admission.student_Name,Student_Admission.registration_no,Student_Admission.class,Student_Admission.section,
                Student_Admission.roll_no,newcombine.exam_name,obtained_mark,newcombine.total_marks FROM Student_Admission
                LEFT JOIN (SELECT SUM(Marks.marks) as obtained_mark,Marks.regNo from Marks where Marks.class="${Class}" group by Marks.regNo,Marks.exam_name) AS combine
                ON Student_Admission.registration_no=combine.regNo 
                LEFT JOIN 
                
                (SELECT Marks.regNo,Marks.exam_name,sum(combine.int_exam_marks) as total_marks FROM Marks 
                LEFT JOIN (
                SELECT internal_exam_name,int_exam_marks FROM internal_exam
                UNION ALL
                SELECT external_exam_name,ext_exam_marks FROM external_exam) AS combine ON Marks.exam_name=combine.internal_exam_name 
                where Marks.class="${Class}" group by Marks.regNo,Marks.exam_name) AS newcombine
                ON Student_Admission.registration_no=newcombine.regNo
                
                where Student_Admission.class="${Class}"`
            }
            
          
            else if(!regNo && examName && Class && !year){
                query =`SELECT Student_Admission.student_Name,Student_Admission.registration_no,Student_Admission.class,Student_Admission.section,
                Student_Admission.roll_no,newcombine.exam_name,obtained_mark,newcombine.total_marks FROM Student_Admission
                LEFT JOIN (SELECT SUM(Marks.marks) as obtained_mark,Marks.regNo from Marks where Marks.exam_name="${examName}"  and Marks.class="${Class}" group by Marks.regNo) AS combine
                ON Student_Admission.registration_no=combine.regNo 
                LEFT JOIN 
                
                (SELECT Marks.regNo,Marks.exam_name,sum(combine.int_exam_marks) as total_marks FROM Marks 
                LEFT JOIN (
                SELECT internal_exam_name,int_exam_marks FROM internal_exam
                UNION ALL
                SELECT external_exam_name,ext_exam_marks FROM external_exam) AS combine ON Marks.exam_name=combine.internal_exam_name 
                where Marks.exam_name="${examName}"  and Marks.class="${Class}" group by Marks.regNo) AS newcombine
                ON Student_Admission.registration_no=newcombine.regNo
                
                where Student_Admission.class="${Class}"`
            }
            else if(!examName && regNo && Class && year){
                query=`SELECT Marks.class,Marks.regNo,Marks.exam_name,SUM(Marks.marks) AS obtained_marks,sum(combine.int_exam_marks) as total_marks,Student_Admission.section,Student_Admission.roll_no,Student_Admission.student_Name
                FROM Marks
                         LEFT JOIN Student_Admission
                                   ON Student_Admission.registration_no = Marks.regNo  
                         LEFT JOIN (SELECT internal_exam_name,int_exam_marks FROM internal_exam
                         UNION ALL
                         SELECT external_exam_name,ext_exam_marks FROM external_exam) as combine
                                   ON Marks.exam_name = combine.internal_exam_name 
			
			
                         WHERE  Marks.regNo="${regNo}" AND Marks.class="${Class}" AND Marks.Year="${year}"
                                   group by Marks.exam_name order by Marks.exam_name`
            }
            
            else{
                query = `SELECT Marks.*,Student_Admission.section,Student_Admission.roll_no,Student_Admission.student_Name,combine.int_exam_marks
                FROM Marks
                         LEFT JOIN Student_Admission
                                   ON Student_Admission.registration_no = Marks.regNo  
                         LEFT JOIN (SELECT internal_exam_name,int_exam_marks FROM internal_exam
                         UNION ALL
                         SELECT external_exam_name,ext_exam_marks FROM external_exam) as combine
                                   ON Marks.exam_name = combine.internal_exam_name 
                         WHERE Marks.exam_name="${examName}" AND Marks.regNo="${regNo}" AND Marks.class="${Class}" AND Marks.Year="${year}"
                                   order by Marks.subject`

        
            }
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    return res.status(400).json({message:"Error Occured",err:err})
                }
                else{
                    
                    if(examName){
                        let query=`SELECT MAX(Marks) AS max_mark,subject FROM Marks 
                        WHERE Marks.class="${Class}" AND Marks.Year="${year}" AND Marks.exam_name="${examName}"  GROUP BY Marks.subject`
                        Database.query(query,(err,result1)=>{
                            if(err){
                                console.log(err)
                                return res.status(400).json({message:"Error Occured",err:err})
                            }
                            else{
                                return res.status(200).json({message:"Marks Fetched",data:result,result1})
                            }
                        })
                    }
                    else{
                        return res.status(200).json({message:"Marks Fetched",data:result})
                    }
                    
                    }
                   
            })
        }
    }catch (err){
        console.log(err)
    }
}

//get all Exam for Marks
exports.GetAllExamForMarks = (req, res) => {
    try{
        
        let query = `SELECT * FROM internal_exam UNION SELECT * FROM external_exam order by internal_exam_name`
        Database.query(query,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(400).json({message:"Error Occured"})
            }
            else{
                return res.status(200).json({message:"Exam Fetched",data:result})
            }
        })
    }catch (err){
        console.log(err)
    }
}

//get Faculty

exports.GetFaculty = (req, res) => {
    try{
        let query = `SELECT name,heighst_qualification,specialized_field ,email FROM faculty_admin`

        Database.query(query,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(400).json({message:"Error Occured"})
            }
            else{
                return res.status(200).json({message:"Faculty Fetched",data:result})
            }
        })
    }catch (err){
        console.log(err)
    }
}


//get subject less export view

exports.GetMarksWithoutSubject= (req, res) => {
    try{
        const {regNo,examName,Class}=req.body
        if(regNo && examName && Class){
           
            let query=`SELECT Marks.class,Marks.regNo,Marks.exam_name,SUM(Marks.marks) AS obtained_marks,sum(combine.int_exam_marks) as total_marks,Student_Admission.section,Student_Admission.roll_no,Student_Admission.student_Name
                FROM Marks
                         LEFT JOIN Student_Admission
                                   ON Student_Admission.registration_no = Marks.regNo  
                         LEFT JOIN (SELECT internal_exam_name,int_exam_marks FROM internal_exam
                         UNION ALL
                         SELECT external_exam_name,ext_exam_marks FROM external_exam) as combine
                                   ON Marks.exam_name = combine.internal_exam_name 
			
			
                         WHERE Marks.regNo = '${regNo}' AND Marks.class='${Class}'AND exam_name='${examName}'
                                   group by Marks.exam_name order by Marks.exam_name`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    return  res.status(400).json({message:"Error Occured",err:err})
                }
                else{
                    return  res.status(200).json({message:"Marks Fetched",data:result})
                }
            })
        }
        else{
            return  res.status(400).json({message:"All Fields are required"})
        }
    }catch(err){
        console.log(err)
        return  res.status(400).json({message:"Error Occured",err:err})
    }
}


//get Marks for edit
exports.GetMarksForEdit= (req, res) => {
try{
    const {Class,examName,subject,academicYear,section}=req.body
    if(!Class || !examName  || !academicYear || !section){
        return res.status(400).json({message:"All Fields are required"})
    }
    else{
        let query
        if(!subject){
            query=`SELECT 
            Student_Admission.student_Name,
            Student_Admission.registration_no,
            Student_Admission.current_academic_year,
            Student_Admission.roll_no,
            Student_Admission.section,
            Student_Admission.class,
            Student_Admission.current_academic_year,
            Marks.subject,
            Marks.marks 
        FROM 
            Student_Admission 
        LEFT JOIN 
            Marks ON Marks.regNo = Student_Admission.registration_no 
           
        WHERE 
            Student_Admission.class = '${Class}' 
            AND Student_Admission.current_academic_year = '${academicYear}'
            
            AND Marks.exam_name = '${examName}' 
            AND Student_Admission.active = 1 
            AND Marks.class = '${Class}'
          AND Student_Admission.section = '${section}'
            AND Marks.regNo = Student_Admission.registration_no 
        ORDER BY 
        Marks.subject,Student_Admission.class,Student_Admission.section,Student_Admission.roll_no;`
        }
        else{
            query=`SELECT 
            Student_Admission.student_Name,
            Student_Admission.registration_no,
            Student_Admission.current_academic_year,
            Student_Admission.roll_no,
            Student_Admission.section,
            Student_Admission.class,
            Student_Admission.current_academic_year,
            Marks.subject,
            Marks.marks 
        FROM 
            Student_Admission 
        LEFT JOIN 
            Marks ON Marks.regNo = Student_Admission.registration_no 
           
        WHERE 
            Student_Admission.class = '${Class}' 
            AND Student_Admission.current_academic_year = '${academicYear}'
            AND Marks.subject = '${subject}' 
            AND Marks.exam_name = '${examName}' 
            AND Student_Admission.active = 1 
            AND Marks.class = '${Class}'
          AND Student_Admission.section = '${section}'
            AND Marks.regNo = Student_Admission.registration_no 
        ORDER BY 
           Marks.subject,Student_Admission.class,Student_Admission.section,Student_Admission.roll_no;`

        }
        
        Database.query(query,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(400).json({message:"Error Occured",err:err})
            }
            else{
                return res.status(200).json({message:"Marks Fetched",data:result})
            }
        })
    }

}catch (err) {
    console.log(err)
}
}



//Delete Marks
exports.DeleteMarks = (req, res) => {
    const {regNo, exam, subject, Class,year} = req.body
    try {
        if (regNo && exam && subject && Class && year) {
            let query = `DELETE
                         FROM Marks
                         WHERE regNo = '${regNo}' AND exam_name = '${exam}' AND subject = '${subject}' AND class = '${Class}' AND Year = '${year}'`
            Database.query(query, (err, result) => {
                if (err) {
                    console.log(err)
                    return res.status(400).json({message: "Error Occured"})
                } else {
                    return res.status(200).json({message: "Marks Deleted"})
                }
            })
        } else {
            return res.status(400).json({message: "All Fields are required"})
        }
    } catch (err) {
        console.log(err)
        return res.status(400).json({message: "Error Occured", err: err})

    }
}

//marks entry for student
exports.MarksEntry = (req, res) => {
    const {examName,subject,Class,year,section}=req.body
    try{
        if(!examName || !subject || !Class || !year || !section){
            return res.status(400).json({message:"All Fields are required"})
        }
        query=`SELECT a.student_Name, a.roll_no, a.section, a.registration_no ,a.class,a.current_academic_year
FROM Student_Admission a 
WHERE a.class='${Class}' and a.registration_no NOT IN 
    (SELECT b.regNo 
     FROM Marks b 
     WHERE b.subject = '${subject}'
     AND b.exam_name = '${examName}'
     AND b.Year = '${year}'
     AND b.class = '${Class}') and a.section = '${section}' and a.current_academic_year='${year}' order by a.roll_no`
    Database.query(query,(err,result)=>{
        if(err){
            console.log(err)
            return res.status(400).json({message:"Error Occured",err:err})
        }
        else{
            return res.status(200).json({message:"Marks Fetched",data:result})
        }
    })
    }catch (err){
        console.log(err)
    }
}


//Marks Entry For student
exports.MarksEntryForStudentS = (req, res) => {
    const {subject,examName,marks,Class,Year,regNo} = req.body
    try {
        if(!subject || !examName  || !Class || !Year || !regNo){
            return res.status(400).json({message:"All Fields are required"})
        }
        else{
                let query = `INSERT INTO Marks (regNo, subject, exam_name, marks,class,Year) VALUES ('${regNo}', '${subject}', '${examName}', '${marks}','${Class}','${Year}')`
                Database.query(query, (err, result) => {
                    if (err) {
                        console.log(err)
                        return res.status(400).json({message: "Error Occured", err: err})
                    }
                    else {
                        return res.status(200).json({message: "Marks Created"})
                    }
                })

        }

    } catch (err) {
        console.log(err)
    }
}

//get student by active status and class and academic year and section
exports.getStudentByClassYearAndSectio= (req, res) => {
    const {Class,year,section}=req.body
    try{
        if(!Class || !year || !section){
            return res.status(400).json({message:"All Fields are required"})
        }
        else{
            let query = `SELECT * FROM Student_Admission WHERE class='${Class}' AND current_academic_year='${year}' AND section='${section}'`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                    return res.status(400).json({message:"Error Occured",err:err})
                }
                else{
                    return res.status(200).json({message:"Student Fetched",data:result})
                }
            })
        }
    }catch (err){
        console.log(err)
    }
}