    //initialize the express framework
    const express= require("express");
    //initialize the express respond object
    const res = require("express/lib/response");
    //create an instance of express with name app
    const app= express();

    //Create a function to add 2 numbers
    const addTwoNumber= (n1,n2) => {
        return n1+n2;
    }
    //Create a route handler to process the get request
    //Respond with the sum of the 2 numbers and the status code in JSON format
    app.get("/addTwoNumber", (req,res)=>{
        const n1= parseInt(req.query.n1);
        const n2=parseInt(req.query.n2);
        const result = addTwoNumber(n1,n2);
        res.json({statuscocde:200, data: result }); 
    });
    //create a variable to hold the port number configuration
    const port=3040;
    //Start server and initialize the binding process to the port had been define above 
    app.listen(port,()=> {
        console.log("hello i'm listening to port "+port);
    })