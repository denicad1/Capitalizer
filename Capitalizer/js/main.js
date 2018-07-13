function capital(str) {
    //spltting the input into an array
    var thing = str.split(" ");
    //creating a new array to add the new strings into
    var tog = new Array();
    //for loop to grab each element, make a capital letter of the first char, then replace the lowercase with the uppercase
    for (var i = 0; i < thing.length; i++) {
        var nah = thing[i][0].toUpperCase();
        var bah = nah+thing[i].slice(1);
        //adding the new strings to an array
        tog.push(bah);
        
        
    }
    //joining the array back into a new string
    return tog.join(" ");
    
    
}
console.log(capital("brave new world"));

