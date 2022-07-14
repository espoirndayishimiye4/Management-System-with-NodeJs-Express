const fsPromises = require('fs').promises
const path = require('path')

 const writeJsonFile = async (file,data)=>{
    await fsPromises.writeFile(
        path.join(__dirname,'..','models',`${file}.json`),
        JSON.stringify(data)
    );
}

module.exports = {writeJsonFile}