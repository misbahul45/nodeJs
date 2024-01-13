const http=require('http')
const fs=require('fs')
const path = require('path')
const fsPromises=require('fs').promises

const serveFile=async(filePath, contentType, res)=>{
    try{
        const rawData=await fsPromises.readFile(filePath,'utf8')
        res.writeHead(200,{contentType:contentType})
        res.end(rawData)
    }catch(e){
        res.writeHead(500, {location:'/'})
        res.end()
    }
}

const server=http.createServer((req, res)=>{
    const extension=fs.existsSync(req.url)
    console.log(extension)
    let contentType;
    switch(extension){
        case ".cs":
            contentType='text/css';
        break;
        case ".js":
            contentType='text/javascript';
        break;
        case ".json":
            contentType='aplication/json';
        break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }
    console.log(req.url)

    let pathfile = contentType === "text/html" ?
        path.join(__dirname, `${req.url.slice(0, req.url.lastIndexOf("/"))}`, `${req.url.slice(req.url.lastIndexOf("/"))}${req.url.includes(".html") ? "" : ".html"}`)
        :
        path.join(__dirname, req.url);


    const filexist=fs.existsSync(pathfile)


    if(filexist){
        serveFile(pathfile, contentType, res)
    }else{
        switch (path.parse(pathfile).base) {
            case 'www-page.html':
                res.writeHead(300, {location:''})
                res.end()
            break;
            default:    
                serveFile(path.join(__dirname,"views","404.html"), contentType, res)
            break
        }
    }
   
})

server.listen(3000,()=>{
    console.log('server runing at port 3000')
})

