document.write(typeof 9);
document.write("49" + 2);
document.getElementById("Infinity").innerHTML = "4E10";
document.getElementById("NInfinity")
function nan_function() { // Not a number function
    document.getElementById("nan").innerHTML = 0/0;
}
function isnan_function() { // Is not a number function
    document.getElementById("isnan").innerHTML = isNaN('This is fun')
}
function isnan2_function() {
    document.getElementById("isnan2").innerHTML = isNaN('54')
}
function inf_function() { // Infinity function
    document.getElementById("infinity").innerHTML = 4E310;
}
function inf2_function() { // Negative infinity function
    document.getElementById("-infinity").innerHTML = -4E310;
}
function boo_function() { // Boolean function
    document.getElementById("boo").innerHTML = (31 > 30);
}
function boo2_function() {
    document.getElementById("boo2").innerHTML = (31 < 30);
}
console.log(4 +9);
function de_function() { // Double equals function
    document.getElementById("de").innerHTML = (33 == 33);
}
function de2_function() {
    document.getElementById("de2").innerHTML = (33 == 11);
}
A = 10
B = 10
function te_function() { // Triple equals function
    document.getElementById("te").innerHTML = (A === B);
}
C = 13
D = "Chest"
function te2_function() {
    document.getElementById("te2").innerHTML = (C === D);
}
E = 33
F = "33"
function te3_function() {
    document.getElementById("te3").innerHTML = (E === F);
}
G = 21
H = 22
function te4_function() {
    document.getElementById("te4").innerHTML = (G === H);
}
function blo_function() { // Boolean logic function
    document.getElementById("blo").innerHTML = (10 > 5 && 3 > 1);
}
function blo2_function() {
    document.getElementById("blo2").innerHTML = (7 < 2 || 9 < 11);
}
function blo3_function() {
    document.getElementById("blo3").innerHTML = (44 < 3 && 45 < 44);
}
function blo4_function() {
    document.getElementById("blo4").innerHTML = (55 < 44 || 33 > 54);
}
function not_function() { // Not function
    document.getElementById("not").innerHTML = !(55 > 65);
}
function not2_function() {
    document.getElementById("not2").innerHTML = !( 45 > 35);
}