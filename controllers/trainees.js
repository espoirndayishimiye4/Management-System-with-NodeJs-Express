const {writeJsonFile} = require('./functions')
const data= {
    trainees: require('../models/trainees.json'),
    settrainees: function (data){this.trainees = data }
}


const getAlltrainees = (req,res)=>{
    try {
        res.status(200).json(data.trainees)
    } catch (error) {
        
    }
}

const createtrainee = async (req, res)=>{
    const newtrainee = {
        id:data.trainees[data.trainees.length - 1].id + 1 || 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        course: req.body.course
    };
     
    if(!newtrainee.firstName || !newtrainee.lastName || !newtrainee.course){
        return res.status(400).json({'message':'All fields are required'});
    }
     
    data.settrainees([...data.trainees,newtrainee]);
    const dataToWrite = data.trainees
    writeJsonFile('trainees',dataToWrite)
        res.status(201).json({"message":"trainee Created Succesfully"});
}
const updatetrainee = async (req, res)=>{
    const trainee = data.trainees.find(sta => sta.id === parseInt(req.body.id));
    if(!trainee){
        return res.status(400).json({'message': `trainee ID ${req.body.id} not found`});
    }
    if(req.body.firstName) trainee.firstName = req.body.firstName;
    if(req.body.lastName) trainee.lastName = req.body.lastName;
    if(req.body.course) trainee.course = req.body.course;

    const filteredtrainee = data.trainees.filter(sta => sta.id !== parseInt(req.body.id))
    const updatedtrainee = [...filteredtrainee, trainee];
    data.settrainees(updatedtrainee);
    const dataToWrite = data.trainees
    writeJsonFile('trainees',dataToWrite)
    res.status(200).json({"message":`trainee with id ${req.body.id} Updated`})
}
const deletetrainee = async (req, res) =>{
    const trainee = data.trainees.find(st => st.id === parseInt(req.body.id))
    if(!trainee) return res.status(400).json({"message":`trainee with id ${req.body.id} not found`})
    const filteredtrainee = data.trainees.filter(stff => stff.id !== parseInt(req.body.id))
    data.settrainees([...filteredtrainee]);
    const dataToWrite = data.trainees
    writeJsonFile('trainees',dataToWrite)
    res.status(200).json({"message":`trainee with id ${req.body.id} deleted`}) 
}

const getOnetrainee = (req, res) =>{
    const trainee = data.trainees.find(st => st.id === parseInt(req.params.id))
    if(!trainee) return res.status(400).json({"message":`trainee with id ${req.params.id} not found`})
    res.status(200).json(trainee)
}

module.exports = {getAlltrainees, createtrainee,updatetrainee,deletetrainee, getOnetrainee}