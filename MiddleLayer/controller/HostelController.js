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
                    return res.status(400).json({msg:err})
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

//get hostel entry
exports.GetHostelEntry=(req,res)=>{
    const {Class,academicYear,regNo,roomNo}=req.body
    try {
        let query
        if(!Class && !academicYear && !regNo && !roomNo){
            query = `SELECT *
                     FROM master_hostel`
        }
        else if(!Class && !academicYear && regNo && !roomNo){
            query = `SELECT *
                     FROM master_hostel
                     WHERE registration_no regexp '${regNo}'`
        }
        else if(!Class && academicYear && !regNo && !roomNo){
            query = `SELECT * 
                        FROM master_hostel
                        WHERE academic_year regexp '${academicYear}'`
        }
        else if(Class && !academicYear && !regNo && !roomNo){
            query = `SELECT * 
                        FROM master_hostel
                        WHERE Class regexp '${Class}'`
        }
        else if(Class && academicYear && !regNo && !roomNo){
            query = `SELECT * 
                        FROM master_hostel
                        WHERE Class regexp '${Class}' and academic_year regexp '${academicYear}'`
        }
        else if(Class && !academicYear && !regNo && roomNo){
            query = `SELECT * 
                        FROM master_hostel
                        WHERE Class regexp '${Class}' and room_no regexp '${roomNo}'`
        }
        else if(!Class && academicYear && !regNo && roomNo){
            query = `SELECT * 
                        FROM master_hostel
                        WHERE academic_year regexp '${academicYear}' and room_no regexp '${roomNo}'`
        }
        else if(!Class && !academicYear && !regNo && roomNo){
            query = `SELECT * 
                        FROM master_hostel
                        WHERE room_no regexp '${roomNo}'`
        }
        else if(Class && academicYear && !regNo && roomNo){
            query = `SELECT * 
                        FROM master_hostel
                        WHERE Class regexp '${Class}' and academic_year regexp '${academicYear}' and room_no regexp '${roomNo}'`
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
    catch (err) {
        console.log(err)
    }
}


//create hostel entry
exports.CreateHostelEntry=(req,res)=>{
    try{
        const{Class,academicYear,roomNo,bedNo,studentName,regNo,entrydate}=req.body

        if(!Class || !academicYear || !roomNo || !bedNo || !studentName || !regNo || !entrydate){
            return res.status(400).json({msg:"Please fill all fields",data:{Class,academicYear,roomNo,bedNo,studentName,regNo,entrydate}})
        }
        else{
            let query=`select available_bed,occupied_bed from bed_availability where room_no='${roomNo}'`
            Database.query(query,(err,result)=>{
              if(err){
                  console.log(err)
              }
              else {
                  let available_bed=result[0].available_bed
                  let occupied_bed=result[0].occupied_bed
                  if(available_bed===0){
                      return res.status(400).json({msg:"No Bed Available"})
                  }
                  else{
                    query=`INSERT INTO master_hostel (Class,academic_year,room_no,bed_no,student_name,registration_no,entry_date) VALUES ('${Class}','${academicYear}','${roomNo}','${bedNo}','${studentName}','${regNo}','${entrydate}')`
                      Database.query(query,(err,result)=>{
                          if(err){
                              console.log(err)
                          }
                          else{
                            available_bed=available_bed-1
                            occupied_bed=occupied_bed+1
                                query=`UPDATE bed_availability SET available_bed='${available_bed}',occupied_bed='${occupied_bed}' WHERE room_no='${roomNo}'`
                             
                                Database.query(query,(err,result)=>{
                                    if(err){
                                        console.log(err)
                                    }
                                    else{
                                        query= `update Student_Admission set hostelentry=1 where registration_no='${regNo}'`
                                        Database.query(query,(err,result)=>{
                                            if(err){
                                                console.log(err)
                                            }
                                            else{
                                                return res.status(200).json({msg:"Hostel Entry Created Successfully"})
                                            }
                                        })
                                    }
                                })
                          }
                      })
                  }
              }
            })
        }
    }
    catch (err) {
        console.log(err)
    }
}

//delete hostel entry
exports.DeleteHostelEntry=(req,res)=>{
try{
        const{regNo,roomNo}=req.body
        if( !regNo || !roomNo){
            return res.status(400).json({msg:"Please fill all fields"})
        }
        else{
            let query=`delete from master_hostel where registration_no='${regNo}' and room_no='${roomNo}'`
            Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                }
                else{
                    query=`select available_bed,occupied_bed from bed_availability where room_no='${roomNo}'`
                    Database.query(query,(err,result)=>{
                        if(err){
                            console.log(err)
                        }
                        else{
                            let available_bed=result[0].available_bed
                            let occupied_bed=result[0].occupied_bed
                            available_bed=available_bed+1
                            occupied_bed=occupied_bed-1
                            query=`UPDATE bed_availability SET available_bed='${available_bed}',occupied_bed='${occupied_bed}' WHERE room_no='${roomNo}'`
                            Database.query(query,(err,result)=>{
                                if(err){
                                    console.log(err)
                                }
                                else{
                                    query= `update Student_Admission set hostelentry=0 where registration_no='${regNo}'`
                                    Database.query(query,(err,result)=>{
                                        if(err){
                                            console.log(err)
                                        }
                                        else{
                                            return res.status(200).json({msg:"Hostel Entry Deleted Successfully"})
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }

    }
    catch (err) {
        console.log(err)
    }
}

//update hostel entry

exports.UpdateHostelEntry=(req,res)=>{
    const{roomNo,bedNo,entrydate,regNo}=req.body
    try{
       if(!roomNo || !bedNo || !entrydate || !regNo){
           return res.status(400).json({msg:"Please fill all fields"})
       }
       else{
           let query=`select room_no from master_hostel where registration_no='${regNo}'`
              Database.query(query,(err,result)=>{
                if(err){
                    console.log(err)
                }
                else{
                    let room_no=result[0].room_no
                    if(room_no===roomNo){
                        query=`update master_hostel set bed_no='${bedNo}',entry_date='${entrydate}' where registration_no='${regNo}'`
                        Database.query(query,(err,result)=>{
                            if(err){
                                console.log(err)
                            }
                            else{
                                return res.status(200).json({msg:"Hostel Entry Updated Successfully"})
                            }
                        })
                    }
                    else{
                        query=`select available_bed,occupied_bed from bed_availability where room_no='${roomNo}'`
                        Database.query(query,(err,result)=>{
                          if(err){
                              console.log(err)
                          }
                          else{
                              let available_bed=result[0].available_bed
                              let occupied_bed=result[0].occupied_bed
                              if(available_bed===0){
                                    return res.status(400).json({msg:"No Bed Available"})
                              }
                              else{
                                  available_bed=available_bed-1
                                  occupied_bed=occupied_bed+1
                                    query=`UPDATE bed_availability SET available_bed='${available_bed}',occupied_bed='${occupied_bed}' WHERE room_no='${roomNo}'`
                                    Database.query(query,(err,result)=>{
                                      if(err){
                                          console.log(err)
                                      }
                                      else{
                                          query=`select available_bed,occupied_bed from bed_availability where room_no='${room_no}'`
                                          Database.query(query,(err,result)=>{
                                              if(err){
                                                  console.log(err)
                                              }
                                              else{
                                                  let available_bed=result[0].available_bed
                                                  let occupied_bed=result[0].occupied_bed
                                                    available_bed=available_bed+1
                                                    occupied_bed=occupied_bed-1
                                                    query=`UPDATE bed_availability SET available_bed='${available_bed}',occupied_bed='${occupied_bed}' WHERE room_no='${room_no}'`
                                                    Database.query(query,(err,result)=> {
                                                        if (err) {
                                                            console.log(err)
                                                        } else {
                                                            query = `update master_hostel set room_no='${roomNo}',bed_no='${bedNo}',entry_date='${entrydate}' where registration_no='${regNo}'`
                                                            Database.query(query, (err, result) => {
                                                                if (err) {
                                                                    console.log(err)
                                                                } else {
                                                                    return res.status(200).json({msg: "Hostel Entry Updated Successfully"})
                                                                }
                                                            })
                                                        }
                                                    })
                                              }
                                          })
                                      }
                                    })
                              }
                          }
                        })
                    }
                }
              })
       }
    }
    catch (err) {
        console.log(err)
    }
    }