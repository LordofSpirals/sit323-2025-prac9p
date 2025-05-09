const express = require("express");
const app = express();
const port = 8080;
const host = '0.0.0.0';

// Main route
app.get('/', (req, res) => {
    res.send("Hello world!");
})

//addition endpoint
app.get("/add/:num1/:num2", (req, res) => {
    numA = Number(req.params.num1);
    console.log(numA);

    numB = Number(req.params.num2);
    console.log(numB);

    if(Number.isNaN(numA)){
        console.log("ERROR: First parameter is not a number.");
        res.send("ERROR: First parameter is not a number.");
    } else if (Number.isNaN(numB)) {
        console.log("ERROR: Second parameter is not a number.");
        res.send("ERROR: Second parameter is not a number.");
    } else {
        result = numA + numB;
        console.log(result);
    
        res.send(String(result)); // Returns as string, otherwise interpreted as an HTTP status code
    }
})

//subtraction endpoint
app.get("/sub/:num1/:num2", (req, res) => {
    numA = Number(req.params.num1);
    console.log(numA);

    numB = Number(req.params.num2);
    console.log(numB);

    if(Number.isNaN(numA)){
        console.log("ERROR: First parameter is not a number.");
        res.send("ERROR: First parameter is not a number.");
    } else if (Number.isNaN(numB)) {
        console.log("ERROR: Second parameter is not a number.");
        res.send("ERROR: Second parameter is not a number.");
    } else {
        result = numA - numB;
        console.log(result);
    
        res.send(String(result)); // Returns as string, otherwise interpreted as an HTTP status code
    }
})

//multiplication endpoint
app.get("/mult/:num1/:num2", (req, res) => {
    numA = Number(req.params.num1);
    console.log(numA);

    numB = Number(req.params.num2);
    console.log(numB);

    if(Number.isNaN(numA)){
        console.log("ERROR: First parameter is not a number.");
        res.send("ERROR: First parameter is not a number.");
    } else if (Number.isNaN(numB)) {
        console.log("ERROR: Second parameter is not a number.");
        res.send("ERROR: Second parameter is not a number.");
    } else {
        result = numA * numB;
        console.log(result);
    
        res.send(String(result)); // Returns as string, otherwise interpreted as an HTTP status code
    }
})

//division endpoint
app.get("/div/:num1/:num2", (req, res) => {
    numA = Number(req.params.num1);
    console.log(numA);

    numB = Number(req.params.num2);
    console.log(numB);

    if(Number.isNaN(numA)){
        console.log("ERROR: First parameter is not a number.");
        res.send("ERROR: First parameter is not a number.");
    } else if (Number.isNaN(numB)) {
        console.log("ERROR: Second parameter is not a number.");
        res.send("ERROR: Second parameter is not a number.");
    } else {
        result = numA / numB;
        console.log(result);
    
        res.send(String(result)); // Returns as string, otherwise interpreted as an HTTP status code
    }
})


//exponentiation endpoint
app.get("/exp/:num1/:num2", (req, res) => {
    numA = Number(req.params.num1);
    console.log(numA);

    numB = Number(req.params.num2);
    console.log(numB);

    if(Number.isNaN(numA)){
        console.log("ERROR: First parameter is not a number.");
        res.send("ERROR: First parameter is not a number.");
    } else if (Number.isNaN(numB)) {
        console.log("ERROR: Second parameter is not a number.");
        res.send("ERROR: Second parameter is not a number.");
    } else {
        result = numA ** numB;
        console.log(result);
    
        res.send(String(result)); // Returns as string, otherwise interpreted as an HTTP status code
    }
})

//modulo endpoint
app.get("/mod/:num1/:num2", (req, res) => {
    numA = Number(req.params.num1);
    console.log(numA);

    numB = Number(req.params.num2);
    console.log(numB);

    if(Number.isNaN(numA)){
        console.log("ERROR: First parameter is not a number.");
        res.send("ERROR: First parameter is not a number.");
    } else if (Number.isNaN(numB)) {
        console.log("ERROR: Second parameter is not a number.");
        res.send("ERROR: Second parameter is not a number.");
    } else {
        result = numA % numB;
        console.log(result);
    
        res.send(String(result)); // Returns as string, otherwise interpreted as an HTTP status code
    }
})

//square root endpoint
app.get("/sqrt/:num1", (req, res) => {
    numA = Number(req.params.num1);
    console.log(numA);

    if(Number.isNaN(numA)){
        console.log("ERROR: Parameter is not a number.");
        res.send("ERROR: Parameter is not a number.");
    } else {
        result = Math.sqrt(numA);
        console.log(result);
    
        res.send(String(result)); // Returns as string, otherwise interpreted as an HTTP status code
    }
})

//factorial endpoint
app.get("/fact/:num1", (req, res) => {
    numA = Number(req.params.num1);
    console.log(numA);

    if(Number.isNaN(numA)){
        console.log("ERROR: Parameter is not a number.");
        res.send("ERROR: Parameter is not a number.");
    } else if (numA % 1 != 0){
        console.log("ERROR: Parameter is not an integer.");
        res.send("ERROR: Parameter is not an integer.");
    } else if (numA < 0) {
        console.log("ERROR: Parameter is negative.");
        res.send("ERROR: Parameter is negative.");
    } else {
        result = factorial(numA);
        console.log(result);
    
        res.send(String(result)); // Returns as string, otherwise interpreted as an HTTP status code
    }
})

function factorial (num) {
    if (num == 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}


app.listen(port, '0.0.0.0', () => {
    console.log(`Running on http://${host}:${port}`);
})