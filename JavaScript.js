var house = {
    areas: [{
        livingRoom: {items: ['tv', 'sofa']},
        bedroomOne: {items: ['bed', 'washing machine'],windows: 3},
        bedroomTwo: {items: ['bed','bed','desk'],windows: 4},
        kitchen: {items: ['fridge','broken chair']},
        garden: [true,'red rose'],
        garage: {car:{color:'red', wheels: 4, honk: ()=>{alert("Beep")}}}
    }]
};
var houseAreas = house.areas[0]
console.log('The total number of areas is: ' + Object.keys(houseAreas).length)
houseAreas.livingRoom.items.push('dining table');
houseAreas.kitchen.items.push('stove');
houseAreas.bedroomOne.items.splice(1, 1);
var bedsInOne = house.areas[0].bedroomOne.items
var bedsIntwo = house.areas[0].bedroomTwo.items

function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}

var totalBeds = countInArray(bedsInOne,'bed') + countInArray(bedsIntwo,'bed');
console.log('The total beds in all rooms is: ' + totalBeds);
houseAreas.garage.car.color = 'blue';
console.log(houseAreas.garage.car.color);
houseAreas.garage = Object.assign({car2 : function honk () {alert("Beep")}},houseAreas.garage);
console.log(houseAreas.garage);
houseAreas.kitchen.items[1] = 'new chair';


// function check(what){
// for (var i = 0; i < Object.keys(houseAreas).length; i++) {
//     if (Object.keys(houseAreas)[i] === what) {
//         var flowerName = houseAreas.garden[1];
        
//         }
//     } 
//     return flowerName;
// }
//     console.log(check('garden'));

if(Object.keys(houseAreas).includes('garden')){
    console.log(houseAreas.garden[1])
}
