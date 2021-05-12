var bikes = [
    {
        name: "white",
        weight: 2
    },
    {
        name: "black",
        weight: 3
    },
    {
        name: "red",
        weight: 11
    },
    {
        name: "grey",
        weight: 7
    },
    {
        name: "green",
        weight: 6
    }
];
var minWeight = 100;

for (var i = 0; i < bikes.length; i++) {

    var {weight} = bikes[i];
    
    if (weight < minWeight) {

        minWeight = weight;

    }


}

document.getElementById("bike").innerHTML = `Our lightest bike weights ${minWeight} kgs`;