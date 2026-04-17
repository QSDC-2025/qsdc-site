export function getNextDance(danceSchedule) {
    // Normalize today's date to midnight
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    for (const entry of danceSchedule) {
        // Normalize dance date to midnight
        const d = new Date(entry.date);
        const danceDate = new Date(d.getFullYear(), d.getMonth(), d.getDate());

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
