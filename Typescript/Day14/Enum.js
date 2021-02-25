var electronics;
(function (electronics) {
    electronics[electronics["mobile"] = 0] = "mobile";
    electronics[electronics["ipad"] = 1] = "ipad";
    electronics[electronics["laptop"] = 2] = "laptop";
    electronics[electronics["btspeakers"] = 3] = "btspeakers";
    electronics[electronics["tv"] = 4] = "tv";
    electronics["fridge"] = "lg";
    electronics["airconditioner"] = "daikin";
})(electronics || (electronics = {}));
console.log(electronics);
//reverse mapping
var Weekend;
(function (Weekend) {
    Weekend[Weekend["Friday"] = 1] = "Friday";
    Weekend[Weekend["Saturday"] = 2] = "Saturday";
    Weekend[Weekend["Sunday"] = 3] = "Sunday";
})(Weekend || (Weekend = {}));
console.log(Weekend.Saturday);
console.log(Weekend["Saturday"]);
console.log(Weekend[3]);
var Week;
(function (Week) {
    Week[Week["monday"] = 1] = "monday";
    Week[Week["tuesday"] = getDate('Dominoz')] = "tuesday";
    Week[Week["wednesday"] = Week.tuesday * 40] = "wednesday";
})(Week || (Week = {}));
function getDate(day) {
    if (day === 'Dominoz') {
        return 3;
    }
}
console.log(Week.tuesday);
console.log(Week.wednesday);
