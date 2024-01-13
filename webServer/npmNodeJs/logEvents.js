const { v4: uuidv4 } = require('uuid')
const { format } =require('date-fns')

const fs=require('fs')
const fsPromises=require('fs').promises
const path=require('path')

const logEvent=async(message)=>{
    const dateTime=`${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`
    const logItem=`${dateTime}\t${uuidv4()}\t${message}`
    console.log(logItem)
    try{
        if(!fs.existsSync(path.join(__dirname,"logEvent"))){
            await fsPromises.mkdir(path.join(__dirname,"logEvent"))
        }
        //testing
        await fsPromises.appendFile(path.join(__dirname,"logEvent","eventLog.txt"),logItem+"\n")
        
    }catch(e){
        console.log(e)
    }
}
module.exports=logEvent