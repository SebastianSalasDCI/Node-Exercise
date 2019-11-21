const fs = require('fs')
const path = require('path')

data = 'seb'
function Read(data){
    let name = data

    fileName = process.cwd(__dirname)+'/'+name+'/info.json'


    fs.readFile(fileName,(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(JSON.parse(data))
        }
    })
}

module.exports = Read;