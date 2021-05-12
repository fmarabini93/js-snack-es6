function getRndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var teams = [
    {
        teamName: "Whites",
        points: 0,
        fouls: 0
    },
    {
        teamName: "Blacks",
        points: 0,
        fouls: 0
    },
    {
        teamName: "Greens",
        points: 0,
        fouls: 0
    },
    {
        teamName: "Reds",
        points: 0,
        fouls: 0
    },
    {
        teamName: "Blues",
        points: 0,
        fouls: 0
    }
];
var nameFouls = [];

for (var i = 0; i < teams.length; i++) {

    teams[i].points = getRndNum(1, 100);
    teams[i].fouls = getRndNum(1, 100);
    let {teamName, fouls} = teams[i];
    nameFouls.push(teamName + " " + fouls);

}
console.log(nameFouls);

