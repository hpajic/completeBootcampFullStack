var count = 100;
var count1 = 99;
function beer(){

    while (count >= 0){
        if(count > 1){
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take 1 down, pass it around, " + count1 + " bottles of beer on the wall.");
        }
        else if (count === 1){
            console.log(count + " bottle of beer on the wall, " + count + " bottle of beer. Take 1 down, pass it around, " + count1 + " bottles of beer on the wall.");
        }
        else{
            console.log("No more bottles of beer on the wall.");
        }
        count--;
        count1--;
    }
    
    
}