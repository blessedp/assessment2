//This is function that will determine whether a string is an isogram

function checkIsogram(word){
    
    if (typeof word === undefined){
     return true;
     }
   //will be true for a word thats an isogram 
    var checking = true;
    
    //Lowercase the string 
    
    var strr = word.toLowerCase();
    
   var goThrough = {}
    
    //Loop through the string one letter at a time 
    
    for (a = 0; a <= strr.length; a++) {
    
     var letter = strr.charAt(i);
    
    if(goThrough[letter]) {
     goThrough[letter] = 1 + goThrough[letter]
     } else {
     goThrough[letter] = 1;
     }
    
    
    if(goThrough[letter] > 1) {
     return checking == false;
     }
    
    }
   
    return checking;

}

console.log(checkIsogram("Tomatoes"));