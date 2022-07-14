const {writeJsonFile} = require('./functions')

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
        lastName: req.body.lastName,
        position: req.body.position
    };
     
    if(!newStaff.firstName || !newStaff.lastName){
        return res.status(400).json({'message':'firstname or lastname can not be empty'});
    }
     
    data.setStaffs([...data.staffs,newStaff]);
    const dataToWrite = data.staffs
    writeJsonFile('trainees',dataToWrite)
        res.status(201).json({"message":"Staff Created Succesfully"});
}
const updateStaff = async (req, res)=>{
    const staff = data.staffs.find(sta => sta.id === parseInt(req.body.id));
    if(!staff){
        return res.status(400).json({'message': `Staff ID ${req.body.id} not found`});
    }
    if(req.body.firstName) staff.firstName = req.body.firstName;
    if(req.body.lastName) staff.lastName = req.body.lastName;

    const filteredStaff = data.staffs.filter(sta => sta.id !== parseInt(req.body.id))
    const updatedStaff = [...filteredStaff, staff];
    data.setStaffs(updatedStaff);
    const dataToWrite = data.staffs
    writeJsonFile('trainees',dataToWrite)
    res.status(200).json({"message":`staff with id ${req.body.id} Updated`})
}
const deleteStaff = async (req, res) =>{
    const staff = data.staffs.find(st => st.id === parseInt(req.body.id))
    if(!staff) return res.status(400).json({"message":`staff with id ${req.body.id} not found`})
    const filteredStaff = data.staffs.filter(stff => stff.id !== parseInt(req.body.id))
    data.setStaffs([...filteredStaff]);
    const dataToWrite = data.staffs
    writeJsonFile('trainees',dataToWrite)
    res.status(200).json({"message":`staff with id ${req.body.id} deleted`}) 
}

const getOneStaff = (req, res) =>{
    const staff = data.staffs.find(st => st.id === parseInt(req.params.id))
    if(!staff) return res.status(400).json({"message":`staff with id ${req.params.id} not found`})
    res.status(200).json(staff)
}

module.exports = {getAllStaffs, createStaff,updateStaff,deleteStaff, getOneStaff}