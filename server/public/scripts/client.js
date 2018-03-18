console.log('js')

$(document).ready(readyNow);
// linking jQuery
function readyNow(){
    console.log('jQuery linked');
    $('#oneButton').on('click', oneFunk);
    $('#twoButton').on('click', twoFunk);
    $('#threeButton').on('click', threeFunk);
    $('#fourButton').on('click', fourFunk);
    $('#fiveButton').on('click', fiveFunk);
    $('#sixButton').on('click', sixFunk);
    $('#sevenButton').on('click', sevenFunk);
    $('#eightButton').on('click', eightFunk);
    $('#nineButton').on('click', nineFunk);
    $('#zeroButton').on('click', zeroFunk);
    $('#additionButton').on('click', addNumbers);
    $('#subtractButton').on('click', subtractNumbers);
    $('#multiplyButton').on('click', multiplyNumbers);
    $('#divisionButton').on('click', divideNumbers);
    $('#equalsButton').on('click', equalNumbers);
    $('#clearButton').on('click', refreshPage);
    getProblem();
}

let numbersArray = [];

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
    // sendProblem(newNumbers);
}

//function for subtraction click listener
function subtractNumbers(){
    let number1 = $('#input1').val();
    let number2 = $('#input2').val();
    let newNumbers = new Value(number1, number2);
    newNumbers.operator = '-';
    console.log(newNumbers);
    // sendProblem(newNumbers);
}

//function for multiply click listener
function multiplyNumbers(){
    let number1 = $('#input1').val();
    let number2 = $('#input2').val();
    let newNumbers = new Value(number1, number2);
    newNumbers.operator = 'x';
    console.log(newNumbers);
    // sendProblem(newNumbers);
}

//function for division click listener
function divideNumbers(){
    let number1 = $('#input1').val();
    let number2 = $('#input2').val();
    let newNumbers = new Value(number1, number2);
    newNumbers.operator = '/';
    console.log(newNumbers);
    // sendProblem(newNumbers);
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
    }
}

//function to clear
function refreshPage(){
    $.ajax({
        type: "DELETE",
        url: "/calc"
    }).done(function(response){
        console.log(response);
        appendToDom(response);
        
    })
}

//function for equals click listener
function equalNumbers(){
    sendProblem(newNumbers);
}

//function for clicking the one button
function oneFunk(){
    let inputValue = $('#input1').val(1);
    numbersArray.push(1);
    console.log(numbersArray);
}

//function for clicking the two button
function twoFunk(){
    let inputValue = $('#input1').val(2);
    numbersArray.push(2);
    console.log(numbersArray);
}

//function for clicking the three button
function threeFunk(){
    let inputValue = $('#input1').val(3);
    numbersArray.push(3);
    console.log(numbersArray);
}

//function for clicking the four button
function fourFunk(){
    let inputValue = $('#input1').val(4);
    numbersArray.push(4);
    console.log(numbersArray);
}

//function for clicking the five button
function fiveFunk(){
    let inputValue = $('#input1').val(5);
    numbersArray.push(5);
    console.log(numbersArray);
}

//function for clicking the six button
function sixFunk(){
    let inputValue = $('#input1').val(6);
    numbersArray.push(6);
    console.log(numbersArray);
}

//function for clicking the seven button
function sevenFunk(){
    let inputValue = $('#input1').val(7);
    numbersArray.push(7);
    console.log(numbersArray);
}

//function for clicking the eight button
function eightFunk(){
    let inputValue = $('#input1').val(8);
    numbersArray.push(8);
    console.log(numbersArray);
}

//function for clicking the nine button
function nineFunk(){
    let inputValue = $('#input1').val(9);
    numbersArray.push(9);
    console.log(numbersArray);
}

//function for clicking the zero button
function zeroFunk(){
    let inputValue = $('#input1').val(0);
    numbersArray.push(0);
    console.log(numbersArray);
}