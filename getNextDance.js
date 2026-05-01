export function getNextDance(danceSchedule) {
    // Normalize today's date to midnight
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Loop through the schedule IN ORDER
    for (const entry of danceSchedule) {
        const d = new Date(entry.date);
        const danceDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());
 // ADD THIS BLOCK
        console.log("CHECKING ENTRY:", {
            entryDateRaw: entry.date,
            parsedDate: d,
            normalizedDanceDate: danceDate,
            today
        });
        if (danceDate >= today) {
            return {
                date: entry.date,
                theme: entry.theme
            };
        }
    }

    return {
        date: null,
        theme: "No upcoming dances"
    };
}