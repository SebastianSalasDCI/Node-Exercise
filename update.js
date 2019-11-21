const fs = require('fs')
const path = require('path')

function Update(data){
    if(data.length<3){
        console.log('missing arguments')
        process.exit()
    }

    let [name,key,value] = data

    fileName = process.cwd(__dirname)+'/'+name+'/info.json'
    let info = {}
    data = fs.readFileSync(fileName)
    info = JSON.parse(data)
    console.log(info)

    info[key]=value

    fs.writeFile(fileName,JSON.stringify(info),(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('file updated')
        }
    })
}

module.exports = Update;