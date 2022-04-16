var X = 20;
function global_function() {
    document.getElementById("global").innerHTML = (X + 20);
}
function local_function() {
    var Y = 35;
    document.getElementById("local").innerHTML = (Y + 9);
}
function console_function() {
    var Z = 45;
    document.getElementById("console").innerHTML = (3 + Z);
}
function getdate_function() {
    if (new Date().getHours() < 17) {
    document.getElementById("hello").innerHTML = "Hello friend!";
    }
}
function if_function() {
    if (34 > 21);
    document.getElementById("if").innerHTML = ("The left number is greater than the one on the right.");
}
function Weight_function() {
    Weight = document.getElementById("Weight").value;
    if (Weight <= 185) {
        Ride = "You are within the weight limit to ride."
    }
    else {
        Ride = "You are above the weight limit to ride."
    }
    document.getElementById("How_much_do_you_weigh?").innerHTML = Ride;
}
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}