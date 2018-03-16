let express = require('express');
let app = express();
const PORT = 5000;
let bodyParser = require('body-parser');

let problemArray = [];

//adding body-parser
app.use(bodyParser.urlencoded({extended:true}));

//server static files
app.use(express.static('server/public'));

app.post('/calc', (req,res) => {
    console.log(req.body);
    let newNumbers = req.body;
    if( newNumbers.operator === 'add'){
        newNumbers.answer = parseInt(newNumbers.number1) + parseInt(newNumbers.number2);
    } else if( newNumbers.operator === 'subtract' ){
        newNumbers.answer = parseInt(newNumbers.number1) - parseInt(newNumbers.number2);
    } else if( newNumbers.operator === 'multiply' ){
        newNumbers.answer = parseInt(newNumbers.number1) * parseInt(newNumbers.number2);
    } else if( newNumbers.operator === 'divide' ){
        newNumbers.answer = parseInt(newNumbers.number1) / parseInt(newNumbers.number2);
    };
    problemArray.push(newNumbers);
    console.log(problemArray);
    res.sendStatus(200);
})

app.get('/calc', (req,res) =>{
    res.send(problemArray);
})

// starting up the server
app.listen(PORT, () => {
    console.log('server is running on port: ', PORT);
})

app.delete('/calc', (req,res) =>{
    problemArray = [];
    res.send(problemArray);
})