export function getNextDance(danceSchedule) {
    // Normalize today's date to midnight (local time)
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    for (const entry of danceSchedule) {
        // Parse YYYY-MM-DD safely with NO timezone shift
        const [year, month, day] = entry.date.split("-").map(Number);
        const danceDate = new Date(year, month - 1, day);

        // Debug output
        console.log("CHECKING ENTRY:", {
            entryDateRaw: entry.date,
            danceDate,
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
