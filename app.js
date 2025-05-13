const express = require("express");
const app = express();
const port = 8080;
const host = '0.0.0.0';
const MongoClient = require('mongodb').MongoClient;
let mongodb;

// Main route
app.get('/', (req, res) => {
    databaseConnect();
    res.send("Hello world!");
})
*
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
app.get("/fact/:num1", async (req, res) => {
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
        const client = await databaseConnect();
        result = await factorial(numA, client);
        console.log(result);
    
        res.send(String(result)); // Returns as string, otherwise interpreted as an HTTP status code
    }
})

//deletion endpoint
app.get("/delete/:num1", async (req, res) => {
    numA = Number(req.params.num1);
    console.log("Attempting to delete document with _id = " + numA);
    
    const client = await databaseConnect();

    try {
        client.db("local").collection("factorial").deleteOne({_id : numA});
        console.log("Deletion successful!");
    } catch (error) {
        console.log("ERROR: Failed to delete");
    }
})

//update endpoint
app.get("/update/:num1/:num2", async (req, res) => {
    numA = Number(req.params.num1);
    numB = Number(req.params.num2);
    console.log("Attempting to update document with _id = " + numA + " to value " + numB);
    
    const client = await databaseConnect();

    try {
        client.db("local").collection("factorial").updateOne({_id : numA}, { $set : {"value" : numB} });
        console.log("Update successful!");
        res.send("Update successful!");
    } catch (error) {
        console.log("ERROR: Failed to update");
        res.send("ERROR: Failed to update");
    }
})

async function factorial (num, client) {
    if (num == 0) {
        return 1;
    } else {
        console.log("FACTORIAL FUNCTION");
        //console.log(client);
        const database = await client.db("local");
        //console.log(database);
        const factCollection = await database.createCollection("factorial");
        //console.log(factCollection);

        try {
            doc = await await factCollection.findOne({_id : (num)}); //get document from database
            result = doc.value; //get already calculated result from database
            console.log("Result from database: " + num + "! = " + result);
            console.log(result);
            return result; //return result from database
        } catch (error) {
            console.log("ERROR: Factorial result not in database");
            result = num * await factorial(num - 1, client); //calculate result recursively
        } finally {
            console.log(num + "! = " + result);
            try {
                await factCollection.insertOne({"_id" : num, "value": result}) // add calculated value to database
            } catch (error) {
                console.log("ERROR: Document already exists");
            } finally
            {
                return result;
            }
        }        
    }
}


app.listen(port, '0.0.0.0', () => {
    console.log(`Running on http://${host}:${port}`);
})

async function databaseConnect () {
    //console.log("Username: " + process.env.MONGODB_USERNAME);
    //console.log("Password: " + process.env.MONGODB_PASSWORD);
    const conString = `mongodb://${process.env.MONGODB_USERNAME}:${encodeURIComponent(process.env.MONGODB_PASSWORD)}@database-service:27017/local?authSource=admin&retryWrites=true&w=majority`;
    //console.log("Connection string: " + conString);
    const client = new MongoClient(conString);

    try {
        await client.connect();
        console.log("Successfully connected to database!");
        //console.log(client);
        return client;
    } catch (err) {
        console.error("Could not connect to database", err);
        throw err;
    }
}