






// feetToMile
function feetToMile(feet) {
   if (feet > 0) {
    var mile = feet / 5280;
    mile = mile.toFixed(6);
    return mile;
   }
   else{
       return 'Distance cannot be negative'
   }
}
var theMile = feetToMile(4000);
console.log(theMile);

// woodCalculator
function woodCalculator(chair,table,bed){
    {
       if (chair > 0 && table > 0 && bed > 0) {
        let WoodForChair = Math.ceil(chair)*1;
        WoodForTable = Math.ceil(table)*3;
        WoodForBed = Math.ceil(bed)*5;
         return WoodForChair + WoodForTable + WoodForBed;  
       }
       else{
           return 'The value of the measurment cannot be negative';
       }
     }
}
 var totalWood = woodCalculator(14.5,3,12);
 console.log(totalWood);

 // brickCalculator
function brickCalculator(floor) {
    if (floor < 0) {
        return 'The value of the floor cannot be negative';
    }
    if (floor <= 10) {
        let withInTenFloor = Math.ceil(floor)*15*100;
        return withInTenFloor;
    }
    else if (floor > 10 && floor <= 20) {
        let withInTenToTwentyFloor = 10*15*1000 + Math.ceil(floor-10)*12*1000; 
        return withInTenToTwentyFloor;
    } else {
        let MoreThanTwentyFloor = 10*15*1000 + 10*12*1000 + Math.ceil(floor-20)*10*1000;
        return MoreThanTwentyFloor;
    }
}
let totalBricks = brickCalculator(48);
console.log(totalBricks);

// tinyFriend
function tinyFriend(friends) {
    var smallest = friends[0];
    for (let i = 0; i < friends.length; i++) {
        var currentName = friends[i];
       if (currentName.length < smallest.length) {
           smallest = currentName;
       }
       
    }
    return smallest;
}
var smallestFriend = tinyFriend(['arshad','ornob','munna','joty','vr']);
console.log(smallestFriend);