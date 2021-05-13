const bikes = [
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
let minWeight = 100;
let bikeName;

for (let i = 0; i < bikes.length; i++) {

    let {weight} = bikes[i];
    
    if (weight < minWeight) {

        minWeight = weight;
        bikeName = bikes[i].name;

    }

}

document.getElementById("bike").innerHTML = `Our lightest bike is ${bikeName} and weights ${minWeight} kgs`;