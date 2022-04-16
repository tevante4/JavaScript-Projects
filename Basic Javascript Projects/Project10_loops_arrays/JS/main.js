function Call_Loop() { // This function demonstrates a loop.
    var Digit = "";
    var X = 1;
    while (X < 21) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
var Instruments = ["Trumpet", "Trombone", "Tuba", "Frenchorn", "Baritone"];
var Content = "";
var Y;
function for_Loop() { // This function creates a for loop.
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
function array_function() { // This function creates an array
    var sofa = [];
    sofa[0] = "Red0"
    sofa[1] = "black"
    sofa[2] = "Blue"
    sofa[3] = "Silver"
    document.getElementById("Array").innerHTML = "This sofa is " + sofa[3] + ".";
}
function constant_function() { // This function sets a constant
    const Musical_Instrument = {type:"Trumpet", brand:"Bach", color:"gold"};
    Musical_Instrument.price = "$5,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
{ // This function demonstrates how to use the let command.
    let X = 32;
    document.getElementById("let").innerHTML = X;
}
let Piano = { // This function creates an object using the let keyword.
    make: "Yamaha",
    model: "Grand piano ",
    color: "black ",
    description : function() {
        return "The piano is a " + this.color + this.make + this.model;
     }
};
document.getElementById("piano_object").innerHTML = piano.description();