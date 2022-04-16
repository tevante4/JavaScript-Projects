function Ride_function() { // Utilizes the new and this keywords.
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myfunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
function Game(Make, Model, Color) { // Utilizes the new and this keywords.
    this.Game_Make = Make;
    this.Game_Model = Model;
    this.Game_Color = Color;
}
var James = new Game("Sony", "Playstation", "Blue");
var Ian= new Game("Nintendo", "DS", "Black");
var Ray = new Game("Microsoft", "Xbox360", "Black");
function newfunction() {
    document.getElementById("New_and_This").innerHTML = "James plays a " + James.Game_Color + "-colored " + James.Game_Model + " manufactured by " + James.Game_Make;
}
function nest_function() { // Utilizes nested functions.
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 17;
        function Plus_one() {Starting_point += 3;}
        Plus_one();
        return Starting_point;
    }
}