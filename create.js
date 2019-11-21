const fs = require('fs')
const path = require('path')

// data = ['seb',22,'three houses']

function Create(data) {
    if(data.length<3){
        console.log('missing arguments')
        process.exit()
    }

    let [name,age,hobby] = data

    newJson = {
        name:name,
        age:age,
        hobby:hobby
    }

    folderName =  path.dirname(__filename)+'/'+name

    fs.mkdir(folderName,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('folder created')
        }
    })
    fileName = folderName+'/info.json'
    fs.writeFile(fileName,JSON.stringify(newJson), (err) =>{
        if(err){
            console.log(err)
        }else{
            console.log('file created')
        }
    })
}

module.exports = Create;