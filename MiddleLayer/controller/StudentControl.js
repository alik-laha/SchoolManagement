const Database = require('../Config/Dbconnection')


//create student admission table




//get all students
exports.GetAllStudent=(req,res)=>{
    try{
        let query=`SELECT * FROM Student_Admission`
        Database.query(query,(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                return res.status(200).json({result})
            }
        })
    }
    catch (err){
        console.log(err)
    }
}