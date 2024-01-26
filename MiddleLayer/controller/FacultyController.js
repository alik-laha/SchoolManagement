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