var name = window.prompt("give me the name");
var firstNum = parseInt(window.prompt("give me the first number"));
var secondNum = parseInt(window.prompt("give me the second second"));
document.writeln("Thanks, " + name);
document.getElementById("operador1").innerHTML = "The operator #1 is: " + firstNum;
document.getElementById("operador2").innerHTML = "The operator #2 is: " + secondNum;

//Operations
document.getElementById("sum").innerHTML = "La suma de " + firstNum + " mas " + secondNum + " es = " + (firstNum + secondNum);
document.getElementById("less").innerHTML = "La resta de " + firstNum + " mas " + secondNum + " es = " + (firstNum - secondNum);
document.getElementById("mul").innerHTML = "La multiplicacion de " + firstNum + " mas " + secondNum + " es = " + (firstNum * secondNum);
document.getElementById("div").innerHTML = "La division de " + firstNum + " mas " + secondNum + " es = " + (firstNum / secondNum);
document.getElementById("mod").innerHTML = "El modulo de " + firstNum + " mas " + secondNum + " es = " + (firstNum % secondNum);