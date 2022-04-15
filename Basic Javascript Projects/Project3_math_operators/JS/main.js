function addition_function() { // This function deals with addition
 var addition = 48 + 56;
 document.getElementById("math").innerHTML = "48 + 56 = " + addition;
}
function subtraction_function() {// This function deals with subtraction
    var subtraction = 45 - 12;
    document.getElementById("Math").innerHTML = "45 - 12 = " + subtraction;
}
function multiply_function() { // This function deals with multiplication
    var mul = 17 * 7;
    document.getElementById("Mul").innerHTML = "17 * 7 = " + mul
}
function division_function() { // This function deals with division
    var div = 48 / 8;
    document.getElementById("Div").innerHTML = "48 / 8 = "+ div
}
function math_function() { // This function deals with multiple addition, multiplication, and division
    var more = (95 + 73) * 6 / 3;
    document.getElementById("Lot").innerHTML = "95 + 73 * 6 / 3 = " + more;
}
function modulus_function() { // This function finds the remainder of two numbers
    var simple = 67 % 6;
    document.getElementById("Mod").innerHTML = "When you divide 67 by 6 you have a remainder of: " + simple;
}
function negation_function() { // This function makes the variable the opposite
    var x = 33;
    document.getElementById("Neg").innerHTML = -x;
}
    var X = 6; // This adds 1
    X++;
    document.write(X);

    var Y = 6; // This subtracts 1
    Y--;
    document.write(Y)

    window.alert(Math.random())

function object_function() { // This function shows the circumference of a cirlcle Pi
    Math.PI;
    document.getElementById("PI").innerHTML = Math.PI;
}