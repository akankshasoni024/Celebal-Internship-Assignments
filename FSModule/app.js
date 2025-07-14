const fs =require('fs')


try{
    fs.writeFileSync('data.txt','Created this file in Node js env');
    console.log("File Written Successfully");

}
catch(e){
    console.log(e);

}

try{
    const data =fs.readFileSync('data.txt',"utf8");
    console.log(data);

}
catch(e){
    console.log(e);

}