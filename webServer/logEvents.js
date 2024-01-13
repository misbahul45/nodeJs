const fs=require('fs')
const fsPromise=require('fs').promises
const path=require('path')
const { v4: uuid } = require('uuid');
const { format }=require('date-fns')
const logEvents=async(msg)=>{
    const dateTimes=`${format(new Date(),'yyyy-MM-dd\tHH:mm:ss')}`
    const logIn=`${msg} login at ${dateTimes}\t id room ${uuid()}`
    try{
        if(!fs.existsSync(path.join(__dirname,"logs"))){
            await fsPromise.mkdir(path.join(__dirname,"logs"))
        }
        await fsPromise.appendFile(path.join(__dirname,"logs",`user${msg}.txt`),logIn+"\n")
    }catch(e){
        console.log(e)
    }
}

module.exports=logEvents