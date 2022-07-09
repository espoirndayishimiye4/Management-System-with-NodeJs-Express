const staffsModel = require('../models/staffs.json')

const getAllStaffs = (req,res)=>{
    try {
        res.status(200).json(staffsModel)
    } catch (error) {
        
    }
}

module.exports = getAllStaffs