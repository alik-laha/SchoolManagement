const Database = require('../Config/Dbconnection')


//create student admission table




//get all students
exports.GetAllStudent=(req,res)=>{
    const {Class,regNo,entryDate}=req.body
    let query
    try{
        if(!Class && !regNo){
            query=`SELECT * FROM Student_Admission`
        }
        else if(Class && !regNo ){
            query=`SELECT * FROM Student_Admission WHERE Class regexp '${Class}'`
        }
        else if(!Class && regNo ){
            query=`SELECT * FROM Student_Admission WHERE registration_no regexp '${regNo}'`
        }
        else if(Class && regNo ){
            query=`SELECT * FROM Student_Admission WHERE Class regexp '${Class}' AND Reg_No regexp '${regNo}'`
        }
        else{
            query=`SELECT * FROM Student_Admission WHERE Class regexp '${Class}' AND Reg_No regexp '${regNo}' `
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