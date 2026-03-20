export function getNextDance(danceSchedule) {
    const today = new Date();

    // Loop through the schedule IN ORDER
    for (const entry of danceSchedule) {
        const danceDate = new Date(entry.date + "T00:00:00");

        // Pick the FIRST future dance
        if (danceDate >= today) {
            return {
                date: entry.date,
                theme: entry.theme
            };
        }
    }

    // If nothing is found
    return {
        date: null,
        theme: "No upcoming dances"
    };
}