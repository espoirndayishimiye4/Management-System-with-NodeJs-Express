const fsPromises = require('fs').promises
const path = require('path')

const data= {
    staffs: require('../models/staffs.json'),
    setStaffs: function (data){this.staffs = data }
}

const getAllStaffs = (req,res)=>{
    try {
        res.status(200).json(data.staffs)
    } catch (error) {
        
    }
}

const createStaff = async (req, res)=>{
        const newStaff = {
            id:data.staffs[data.staffs.length - 1].id + 1 || 1,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        };
     
        if(!newStaff.firstName || !newStaff.lastName){
            return res.status(400).json({'message':'firstname or lastname can not be empty'});
        }
     
        data.setStaffs([...data.staffs,newStaff]);
        await fsPromises.writeFile(
            path.join(__dirname,'..','models','staffs.json'),
            JSON.stringify(data.staffs)
        );
        res.status(201).json(data.staffs);
}
const updateStaff = (req, res)=>{
    try {
        res.json({
            "firstName": req.body.firstName,
            "lastName": req.body.lastName
        })
    } catch (error) {
        
    }
}
const deleteStaff = (req, res) =>{
    try {
        res.json({"id":req.body.id})
    } catch (error) {
        
    }
}

const getOneStaff = (req, res) =>{
    res.json({"id":req.params.id})
}

module.exports = {getAllStaffs, createStaff,updateStaff,deleteStaff, getOneStaff}