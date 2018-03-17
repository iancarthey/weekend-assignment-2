console.log('js')

$(document).ready(readyNow);
// linking jQuery
function readyNow(){
    console.log('jQuery linked');
    $('#additionButton').on('click', addNumbers);
    $('#subtractButton').on('click', subtractNumbers);
    $('#multiplyButton').on('click', multiplyNumbers);
    $('#divisionButton').on('click', divideNumbers);
    $('#clearButton').on('click', refreshPage);
    getProblem();
}

//creating class for numbers
class Value{
    constructor( number1In, number2In ){
        this.number1 = number1In;
        this.number2 = number2In;
        this.operator = " ";        
        this.answer = " ";
    }
}

// using to create a new class every round
function sendProblem(newNumbers){
    $.ajax({
        type: "POST",
        data: newNumbers,
        url: '/calc'
    }).done(function(response){
        getProblem();
        console.log(response);
    }).fail(function(response){
        alert('something went wrong');
    })
}

//function get request
function getProblem(){
    $.ajax({
        type: "GET",
        url: "/calc"
    }).done(function(response){
        console.log(response);
        appendToDom(response);
    })
}

//function for addition click listener
function addNumbers(){
    let number1 = $('#input1').val();
    let number2 = $('#input2').val();
    let newNumbers = new Value(number1, number2);
    newNumbers.operator = '+';
    console.log(newNumbers);
    sendProblem(newNumbers);
}

//function for subtraction click listener
function subtractNumbers(){
    let number1 = $('#input1').val();
    let number2 = $('#input2').val();
    let newNumbers = new Value(number1, number2);
    newNumbers.operator = '-';
    console.log(newNumbers);
    sendProblem(newNumbers);
}

//function for multiply click listener
function multiplyNumbers(){
    let number1 = $('#input1').val();
    let number2 = $('#input2').val();
    let newNumbers = new Value(number1, number2);
    newNumbers.operator = 'x';
    console.log(newNumbers);
    sendProblem(newNumbers);
}

//function for division click listener
function divideNumbers(){
    let number1 = $('#input1').val();
    let number2 = $('#input2').val();
    let newNumbers = new Value(number1, number2);
    newNumbers.operator = '/';
    console.log(newNumbers);
    sendProblem(newNumbers);
}

//appending to dom
function appendToDom(response){
    $('#calculatorBody').empty();
    for(let newNumbers of response){
        console.log(newNumbers);
        $('#answerHead').empty()
        $('#answerHead').append('<h2>The Answer is: ' + newNumbers.answer + '</h2>');
        tr = $('<tr></tr>');
        tr.append('<td>' + newNumbers.number1 + '</td>');
        tr.append('<td>' + newNumbers.operator + '</td>');
        tr.append('<td>' + newNumbers.number2 + ' =</td>');
        tr.append('<td>' + newNumbers.answer + '</td>');
        $('#calculatorBody').append(tr);
        // $('#answerHead').empty()
        // $('#answerHead').append('<h2>The Answer is: ' + newNumbers.answer + '</h2>');
    }
}

//functiont to clear
function refreshPage(){
    $.ajax({
        type: "DELETE",
        url: "/calc"
    }).done(function(response){
        console.log(response);
        appendToDom(response);
        
    })
}