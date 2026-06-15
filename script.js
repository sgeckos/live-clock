function formatTime(date) {
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const isAm = date.getHours() < 12;

    return (`${hours12.toString().padStart(2, "0")}:` +
        `${minutes.toString().padStart(2, "0")}:` +
        `${seconds.toString().padStart(2, "0")} ` +
        `${isAm ? "AM" : "PM"}`);
}

function formatDate(date) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

setInterval(() => {
    const now = new Date();

    const dateelement = document.getElementById("date");
    if (dateelement != null) {
        dateelement.textContent = formatDate(now);
    }

    const timeelement = document.getElementById("time");
    if (timeelement != null) {
        timeelement.textContent = formatTime(now);
    }
}, 200);
