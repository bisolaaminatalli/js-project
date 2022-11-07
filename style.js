//challenge1:Your age in days
function ageinDays(){
var birthYear = prompt ('What year were you born..good friends');
var ageinDayss= (2018 - birthYear) * 365;
var h1 = document.createElement('h1');
var textAnswer = document.createTextNode('you are '+ ageinDayss+ ' days old');
h1.appendChild(textAnswer)
h1.setAttribute("id","ageinDays")
document.getElementById("flex-box-result").appendChild(h1)
}

function reset(){
    document.getElementById('ageinDays').remove();
}


