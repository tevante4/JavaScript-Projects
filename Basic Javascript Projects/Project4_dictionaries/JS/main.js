function my_dictionary() { //This function creates a dictionary with KVPs
    var Game = {
        System:"XBOX",
        Developer:"Sony",
        Color:"Black"
    };
    delete Game.System; // This deletes the text defining the variable System
    document.getElementById("Dictionary").innerHTML = Game.System;
}