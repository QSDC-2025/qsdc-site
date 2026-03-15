import { danceSchedule } from "./danceSchedule.js";
import { getNextDance } from "./getNextDance.js";

const nextDance = getNextDance(danceSchedule);

console.log("Next dance:", nextDance);

document.getElementById("next-dance").innerHTML = `
    <strong>${nextDance.theme}</strong><br>
    <span style="font-size: 1.1em;">${nextDance.date}</span>
`;

