const { v4: uuidv4 } = require('uuid')
const { format } =require('date-fns')

const fsPromises=require('fs').promises
const path=require('path')

const logEveneasync=async(message)=>{
    const dateTime=`${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`
    const logItem=`${dateTime}\t${uuidv4()}\t${message}`
    console.log(logItem)
    try{
        await fsPromises.appendFile(path.join(__dirname,"logEvent","eventLog.txt"),logItem+"\n")
    }catch(e){
        console.log(err)
    }
}
module.exports=logEveneasync