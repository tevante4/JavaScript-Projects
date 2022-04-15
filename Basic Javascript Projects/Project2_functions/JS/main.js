function My_First_Function() { //This function allows the html document to call for the text when the button is clicked
    var str="Here is the button text!";
    document.getElementById("Button_text").innerHTML = str;
}

function myfunction() { //This function allows the html document to call for the concatenated text when the button is clicked
    var sentence = "I'm I am learning a lot in this course";
    sentence += " at the perfect pace!";
    document.getElementById("concatenate").innerHTML = sentence;
}