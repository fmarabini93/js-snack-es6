const getRndNum = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

const teams = [
    {
        name: "Whites",
        points: 0,
        fouls: 0
    },
    {
        name: "Blacks",
        points: 0,
        fouls: 0
    },
    {
        name: "Greens",
        points: 0,
        fouls: 0
    },
    {
        name: "Reds",
        points: 0,
        fouls: 0
    },
    {
        name: "Blues",
        points: 0,
        fouls: 0
    }
];
const nameFouls = [];

for (let i = 0; i < teams.length; i++) {

    teams[i].points = getRndNum(1, 50);
    teams[i].fouls = getRndNum(1, 50);

    let {name, fouls} = teams[i];

    nameFouls.push({name, fouls});

}

console.log(nameFouls);