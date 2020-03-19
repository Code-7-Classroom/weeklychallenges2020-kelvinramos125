function myFunction() {
    var x = document.getElementById("myText").value;
    if (x == x.toUpperCase()) {
        document.getElementById("res").innerHTML = ('They are shouting');
    
    }
    else if(x == x.toLowerCase()){
        document.getElementById("res").innerHTML = ('They are whispering');
    }
    else{
    document.getElementById("res").innerHTML = ('They are talking normal');
    }

}