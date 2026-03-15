export function getNextDance(schedule) {
    const today = new Date();

    const upcoming = schedule
        .map(item => ({
            ...item,
            dateObj: new Date(item.date + "T00:00:00")
        }))
        .filter(item => item.dateObj >= today)
        .sort((a, b) => a.dateObj - b.dateObj);

    return upcoming[0] || null;
}