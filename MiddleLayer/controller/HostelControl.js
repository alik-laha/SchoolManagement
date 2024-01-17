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
                         WHERE room_no regexp '${room}'`
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

//get room no
exports.GetRoomNo= (req, res) => {
    let query
    try{
        query = `SELECT room_no
                 FROM bed_availability`
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



//update bed
exports.UpdateBed= (req, res) => {
    let query
    let available_bed
    try {
        const {id, room, floor, totalbed, bulding} = req.body
        if (!id || !room || !floor || !totalbed || !bulding) {
            return res.status(400).json({msg: "Please fill all fields"})
        } else {
            query = `SELECT occupied_bed
                     FROM bed_availability
                     WHERE id = '${id}'`

            Database.query(query, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    let occupied_bed = result[0].occupied_bed
                    if (occupied_bed > totalbed) {
                        return res.status(400).json({msg: "Total Bed must be greater than occupied bed"})
                    } else {
                        available_bed = totalbed - occupied_bed
                        query = `UPDATE bed_availability
                                 SET floor='${floor}',
                                     room_no='${room}',
                                     total_bed='${totalbed}',
                                     available_bed='${available_bed}',
                                     building='${bulding}'
                                 WHERE id = '${id}'`
                        Database.query(query, (err, result) => {
                            if (err) {
                                console.log(err)
                            } else {
                                return res.status(200).json({msg: "Bed Updated Successfully"})
                            }
                        })
                    }
                }
            })

        }
    }catch (err) {
        console.log(err)
    }
}



//delete bed
exports.DeleteBed= (req, res) => {
    try {
        const {id} = req.body
        if (!id) {
            return res.status(400).json({msg: "Please fill all fields"})
        } else {
            let query = `DELETE
                         FROM bed_availability
                         WHERE id = '${id}'`
            Database.query(query, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    return res.status(200).json({msg: "Bed Deleted Successfully"})
                }
            })
        }
    } catch (err) {
        console.log(err)
    }
}