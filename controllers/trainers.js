const {writeJsonFile} = require('./functions')

const data= {
    trainers: require('../models/trainers.json'),
    settrainers: function (data){this.trainers = data }
}

const getAlltrainers = (req,res)=>{
    try {
        res.status(200).json(data.trainers)
    } catch (error) {
        
    }
}

const createtrainer = async (req, res)=>{
    const newtrainer = {
        id:data.trainers[data.trainers.length - 1].id + 1 || 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        course: req.body.course,
        salary: req.body.salary
    };
     
    if(!newtrainer.firstName || !newtrainer.lastName || !newtrainer.firstName || !newtrainer.lastName){
        return res.status(400).json({'message':'All fields are required'});
    }
     
    data.settrainers([...data.trainers,newtrainer]);
    const dataToWrite = data.trainers
    writeJsonFile('trainees',dataToWrite)
        res.status(201).json({"message":"trainer Created Succesfully"});
}
const updatetrainer = async (req, res)=>{
    const trainer = data.trainers.find(sta => sta.id === parseInt(req.body.id));
    if(!trainer){
        return res.status(400).json({'message': `trainer ID ${req.body.id} not found`});
    }
    if(req.body.firstName) trainer.firstName = req.body.firstName;
    if(req.body.lastName) trainer.lastName = req.body.lastName;
    if(req.body.course) trainer.course = req.body.course;
    if(req.body.salary) trainer.salary = req.body.salary;

    const filteredtrainer = data.trainers.filter(sta => sta.id !== parseInt(req.body.id))
    const updatedtrainer = [...filteredtrainer, trainer];
    data.settrainers(updatedtrainer);
    const dataToWrite = data.trainers
    writeJsonFile('trainees',dataToWrite)
    res.status(200).json({"message":`trainer with id ${req.body.id} Updated`})
}
const deletetrainer = async (req, res) =>{
    const trainer = data.trainers.find(st => st.id === parseInt(req.body.id))
    if(!trainer) return res.status(400).json({"message":`trainer with id ${req.body.id} not found`})
    const filteredtrainer = data.trainers.filter(stff => stff.id !== parseInt(req.body.id))
    data.settrainers([...filteredtrainer]);
    const dataToWrite = data.trainers
    writeJsonFile('trainees',dataToWrite)
    res.status(200).json({"message":`trainer with id ${req.body.id} deleted`}) 
}

const getOnetrainer = (req, res) =>{
    const trainer = data.trainers.find(st => st.id === parseInt(req.params.id))
    if(!trainer) return res.status(400).json({"message":`trainer with id ${req.params.id} not found`})
    res.status(200).json(trainer)
}

module.exports = {getAlltrainers, createtrainer,updatetrainer,deletetrainer, getOnetrainer}