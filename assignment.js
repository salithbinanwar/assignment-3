
// kilometerToMeter
function kilometerToMeter(kilometer){

    const meter = (kilometer * 1000);
    return meter;
} 
console.log(kilometerToMeter(3));     // Kilometer is "3000"


// bugetCalculator... 
function bugetCalculator(watch,mobile,laptop){

    var iteamOne = (watch * 50);
    var iteamTwo = (mobile * 100);
    var iteamThree = (laptop * 500);

    var totallCost = iteamOne + iteamTwo + iteamThree;

    return totallCost; 
}

console.log(bugetCalculator(8,5,6));  // Buget Calculate is "3900"



// hotelCost...
function hotelCost(day){
    if(day<=10){
       var totallCost = day*100;
    }
    else if(day<=20){
       var  first = 10*100;
       var  firstDiscount = (day-10)*80;
       var  totallCost = first + result2;
    }
    else{
       var first  = 10*100;
       var firstDiscount = 10*80;
       var secondDiscount  = (day-20)*50;
       var totallCost = first + firstDiscount + secondDiscount;
    }
      return totallCost;   

}

console.log(hotelCost(35));  // Totall cost is "2550"



// mega friend name
function megaFriend(friendsName) {
    var longestName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (longestName.length < friendsName[i].length) {
            longestName = friendsName[i];
        }
    }
    return longestName;
}

// Friends Name
var getMegaFriend = megaFriend([
    'salith bin anwar',
    'anwar hossain',
    'sazzad',
]);

console.log(getMegaFriend);  //  salith bin anwar is mega friend