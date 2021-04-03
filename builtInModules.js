// const os=require('os');


//info about current user

// const user=os.userInfo();
// console.log(user);

//methods return system uptime in seconds

// console.log(`The system uptime is ${os.uptime()} seconds..`);

// const currentOs={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem()
// }
// console.log(currentOs);

//PATH MODULE

// const path=require('path');

// console.log(path.sep);
// const filePath=path.join('/content','subfolder','text.txt');
// console.log(filePath);
// const base=path.basename(filePath);
// console.log(base);

// const absolute=path.resolve(__dirname,'content/subfolder','text.txt');
// console.log(absolute);

//---FS module----
// const fs=require('fs');

// const {readFileSync,writeFileSync, write}=require('fs');

// const first=readFileSync('./content/first.txt','utf-8');
// const second=readFileSync('./content/second.txt','utf-8');

// console.log(first,second);

// writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`,{flag:'a'});

//----------Async FS------------//

// const {readFile,writeFile}=require('fs');

// readFile('./content/first.txt','utf-8',(err,result)=>{
//     if(err)
//     {
    //         console.log(err);
//         return err;
//     }
//     // console.log(result);
//     const first=result;
//     readFile('./content/second.txt','utf-8',(err,result)=>{
//          if(err)
//         {
    //             console.log(err);
//             return err;
//         }
//         const second=result;
//         writeFile('./content/result-async.txt',`Here's the result ${first} , ${second}`,(err,result)=>{
    //             if(err)
//             {
//                 console.log(err);
//                 return;
//             }
//             console.log(result);
//         })
//     })
//     }
// )

//--------------HTTP module----------//
// const http=require('http');

// const server=http.createServer((req,res)=>{
//     // console.log(req);
//     if(req.url==='/')
//     {
//     res.write('<h1>hello ,Welcome to homepage</h1>');
//     res.end();
//     //or res.end('<h1>hello ,Welcome to homepage</h1>'); is also correct
//     }
//     if(req.url==='/about')
//     {
//         res.write(`<h2>Hello welcome to about page</h2>`);
//         res.end();
//     }
//     else
//     {
//     res.write('<h1>Not found</h1>')
//     res.end();
//     }
// })
// server.listen(5000,()=>{
//     console.log("listening at port 5000");
// })

