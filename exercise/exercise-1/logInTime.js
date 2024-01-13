const { format }=require('date-fns')
const fsPromises=require("fs").promises
const path=require('path')
const fs=require('fs')

const handleAddNoteuser=async(user)=>{
    const userLogIn=`${user} login at ${format(new Date(),'yyyy-MM-dd\tHH:mm:ss')}`
    console.log(userLogIn)
    try{
        if(!fs.existsSync(path.join(__dirname,"login"))){
            await fsPromises.mkdir(path.join(__dirname,"login"))
        }
        await fsPromises.appendFile(path.join(__dirname,"login",`note${user}login.txt`),userLogIn+"\n")
    }catch(e){
        console.log(e)
    }
}
module.exports=handleAddNoteuser

