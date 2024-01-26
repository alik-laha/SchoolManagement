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
    const {id,name,qualification,joinDate,email,specialized,contactNo}=req.body
    try{
        if(id && name && qualification && joinDate && email && specialized && contactNo){
            let query = `UPDATE faculty_admin SET name='${name}',heighst_qualification='${qualification}',join_date='${joinDate}',email='${email}',specialized_field='${specialized}',contact_no='${contactNo}' WHERE id=${id}`
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
    try{
        let query = `SELECT * FROM faculty_admin WHERE active=1`
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