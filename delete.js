const fs = require('fs')
const path = require('path')

function Delete(data){

    let name = data
    let relative_path = path.dirname(__filename);

    let dir_path = path.join(relative_path,name[0])
    console.log(dir_path)
    let file_path = path.join(dir_path,'info.json')

    fs.unlinkSync(file_path)
    fs.rmdirSync(dir_path)

    // fs.unlink(file_path,(err)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         console.log('File deleted')
    //     }
    // }).then(
        
    //     fs.rmdir(dir_path,(err)=>{
    //         if(err){
    //             console.log(err)
    //         }else{
    //             console.log('Folder deleted')
    //         }
    //     })
    // )

    
}

module.exports = Delete;