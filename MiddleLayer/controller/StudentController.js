const Database = require('../Config/Dbconnection')


//create student admission table




//get all students byclass and registration
exports.GetAllStudent=(req,res)=>{
    const {Class,regNo,year}=req.body
    let query
    try{
        if(!Class && !regNo && !year){
            query=`SELECT * FROM Student_Admission`
        }
        else if(Class && !regNo && !year){
            query=`SELECT * FROM Student_Admission WHERE Class regexp '${Class}'`
        }

        else if(!Class && regNo && !year){
            query=`SELECT * FROM Student_Admission WHERE registration_no regexp '${regNo}'`
        }
        else if(!Class && !regNo && year){
            query=`SELECT * FROM Student_Admission WHERE admission_year regexp '${year}'`
        }

        else if(Class && regNo && !year){
            query=`SELECT * FROM Student_Admission WHERE Class regexp '${Class}' and registration_no regexp '${regNo}'`
        }
        else if(!Class && regNo && year){
            query=`SELECT * FROM Student_Admission WHERE registration_no regexp '${regNo}' and admission_year regexp '${year}'`
        }
        else if(Class && !regNo && year){
            query=`SELECT * FROM Student_Admission WHERE Class regexp '${Class}' and admission_year regexp '${year}'`
        }

        else{
            query=`SELECT * FROM Student_Admission WHERE registration_no regexp '${regNo}' and admission_year regexp '${year}' and Class regexp '${Class}'`
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