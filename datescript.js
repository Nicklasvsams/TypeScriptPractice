"use strict";
exports.__esModule = true;
// Instantiering af et nyt Date objekt
var date = new Date();
// Funktion der kalder på en funktion der har en formateret string version af tid og dato
function getMyDate(date) {
    return "Time: " + date.time + "\nDate: " + date.localTime;
}
// Vores dato objekt der har forskellige properties (De fleste er der som eksempler uden at blive brugt)
var myDate = {
    time: (date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()).toString(),
    day: date.getDay().toString(),
    month: (date.getMonth() + 1).toString(),
    year: date.getFullYear.toString(),
    localTime: (getDayText(date.getDay()) + ", " + date.getDate() + " " + getMonthText(date.getMonth()) + ", " + date.getFullYear()).toString()
};
// Funktion der konverterer et månedstal til det danske månedsnavn
function getMonthText(month) {
    var months = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];
    return months[month];
}
// Funktion der konverterer et månedstal til et dansk dagsnavn
// NOTE: De 2 ovenstående funktioner ville have været ubrugelige hvis "toLocaleDate" virkede, men det gav ikke det rigtige resultat på dansk
// derfor valgte jeg at gøre det manuelt
function getDayText(day) {
    var days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
    return days[day];
}
// Konsol log der viser tid og dato
console.log(getMyDate(myDate));
