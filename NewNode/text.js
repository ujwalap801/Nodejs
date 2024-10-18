// import fs module
const { Console } = require('console');
const fs= require('fs');


// read file
function getDataFromFile()
{
    fs.readFile('./data.text',(err,data)=>
    {
        if(err)
        {
            console.log("err in file read",err);
        }

        else{
        console.log(data.toString());
        }
    })
}

getDataFromFile()

console.log("hello");


// hello
// good evening
// welcome to node.js



function writeDataToFile()
{
    fs.appendFile('./data.text','this is new line',(err)=>
    {
        if(err)
        {
            console.log("err is writing the file",err);
        }
        else{
            console.log("write completed")
        }
    })
}


writeDataToFile()