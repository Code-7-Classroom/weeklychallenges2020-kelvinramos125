function nameTest(fp, sp){
    var fPerson = document.getElementById("firstPerson").value;
    var sPerson = document.getElementById("secondPerson").value;
    var fp=fPerson.length;
    var sp=sPerson.length;
    var nameDifference = (fp-sp);

    if(nameDifference<0){
        nameDifference=nameDifference * -1;
    }

    if(fp>sp){
    document.getElementById("res").innerHTML = ('The name '+ fPerson+ ' is longer than '
    +sPerson+ ' by '+nameDifference+ ' letters');
    }
    else{
        document.getElementById("res").innerHTML = ('The name '+ sPerson+ ' is longer than '
    +firstPerson+ ' by '+nameDifference+ ' letters');
    }
}