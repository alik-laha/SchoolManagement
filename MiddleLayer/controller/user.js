const Database=require('../Config/Dbconnection')

exports.Login=(req,res)=>{
    const {name,password}=req.body
    try{
        if(!{name,password}){
            return res.message("all data needed")
        }
        query = `
        SELECT * FROM users 
        WHERE Name = "${name}"
        `;
        Database.query(query, function(error, data){
            if(error) throw error;
            if(data){
                
            }
        })
    }catch{

    }
}