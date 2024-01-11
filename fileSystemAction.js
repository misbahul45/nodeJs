const fsPromises=require("fs").promises
const fs=require("fs")
const path = require("path")

const fileOps=async()=>{
    try{
        const data=await fsPromises.readFile(path.join(__dirname,"files","hello.txt"),"utf8")
        console.log(data)
        //it using for delete
        await fsPromises.unlink(path.join(__dirname,"files","hello.txt"))
        //it using for create
        await fsPromises.writeFile(path.join(__dirname,"files","helloPromises.txt"),data)
        await fsPromises.appendFile(path.join(__dirname,"files","helloPromises.txt"),"\nNice to met You hallo");
        await fsPromises.rename(path.join(__dirname,"files","helloPromises.txt"),path.join(__dirname,"files","helloPromisesRename.txt"));
        
        const newData=await fsPromises.readFile(path.join(__dirname,"files","helloPromisesRename.txt"),"utf8")
        console.log(newData)

    }catch(e){
        console.log(e)
    }
}

fileOps()

//read file
// fs.readFile("./files/lorem.txt",'utf8',(err,data)=>{
//     if(err) throw err
//     console.log(data.toString()+"\n")
// })

//sometimes it can be wrong so we use path
// fs.readFile(path.join(__dirname,'files','hello.txt'),'utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data.toString())
// })

//write file
// fs.writeFile(path.join(__dirname,"files","textMenulis.txt"),'ini menulis menggunakan node js' ,err=>{
//     if(err)throw err;
//     console.log('write success')
// })

//append file
// fs.appendFile(path.join(__dirname,"files","append.txt"),'ini mengapend menggunakan node js' ,err=>{
//     if(err)throw err;
//     console.log('append success')
// })

//if  you want to text is editing in the file you msut be write using writeFile and then you can edi or append new next using appendFile
// fs.writeFile(path.join(__dirname,"files","tulis&edit.txt"),'ini menulis dan mengedit' ,err=>{
//     if(err) throw err
//     console.log('write success')
//     fs.appendFile(path.join(__dirname,"files","tulis&edit.txt"),'\n ini editing yang baru' ,err=>{
//         if(err)throw err;
//         console.log('edit success')

//         fs.rename(path.join(__dirname,"files","tulis&edit.txt"),path.join(__dirname,"files","tulisEditRename.txt"),err=>{
//             if(err)throw err;
//             console.log('rename success')
//         })
//     })
// })

//exit uncaght err
process.on('uncaughtException', err=>{
    console.log('Something is wrong : '+err)
    process.exit(1)
})

