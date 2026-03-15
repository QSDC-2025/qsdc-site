import { danceSchedule } from "./danceSchedule.js";
import { getNextDance } from "./getNextDance.js";

const nextDance = getNextDance(danceSchedule);

console.log("Next dance:", nextDance);

document.getElementById("next-dance").innerHTML = `
    <strong>Next Dance:</strong> ${nextDance.theme}<br>
    <strong>Date:</strong> ${nextDance.date}
`;