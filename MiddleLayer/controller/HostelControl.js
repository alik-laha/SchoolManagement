const Database = require('../Config/Dbconnection')


//create bed
exports.CreateBed= (req, res) => {
    try{
        let{floor,room,totalbed,bulding}=req.body
        if(!floor || !room || !totalbed || !bulding){
            return res.status(400).json({msg:"Please fill all fields"})
        }
        else{
            let query = `INSERT INTO bed_availability (floor,room_no,total_bed,available_bed,building) VALUES ('${floor}','${room}','${totalbed}','${totalbed}','${bulding}')`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                }
                else{
                    return res.status(200).json({msg:"Bed Created Successfully"})
                }
            })
        }
    }
    catch(err){
        console.log(err)
    }

}

//get bed
exports.GetBed= (req, res) => {
    const {room}=req.body
    let query
    try{
        if(!room) {
            query = `SELECT *
                         FROM bed_availability`
        }
        else{
            query = `SELECT *
                         FROM bed_availability
                         WHERE room_no='${room}'`
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
