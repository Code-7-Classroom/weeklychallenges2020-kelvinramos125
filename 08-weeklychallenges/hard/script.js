var person = (function (){
    var pii = {
        name: 'Mike Tyson',
        ssn: '123 45 6789'
    }
        return public = {
            getName: function getName(){
                return pii.name;
            }
        }
})();

console.log(person.getName());
