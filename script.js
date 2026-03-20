// 1. Imports
import { danceSchedule } from "./danceSchedule.js?v=2";
import { getNextDance } from "./getNextDance.js?v=2";

// 2. Helper function (put it here)
function formatDate(dateString) {
    const date = new Date(dateString + "T00:00:00");

    const options = { month: "long", day: "numeric", year: "numeric" };
    let formatted = date.toLocaleDateString("en-US", options);

    const day = date.getDate();
    const suffix =
        day % 10 === 1 && day !== 11 ? "st" :
        day % 10 === 2 && day !== 12 ? "nd" :
        day % 10 === 3 && day !== 13 ? "rd" : "th";

    return formatted.replace(/\d+/, day + suffix);
}

// 3. Get next dance
const nextDance = getNextDance(danceSchedule);

// 4. Display it
document.getElementById("next-dance").innerHTML = `
    <div style="font-size:22px; font-weight:bold; margin-bottom:6px;">
        ${nextDance.theme}
    </div>
    <div style="font-size:18px;">
        ${formatDate(nextDance.date)}
    </div>
`;
