// Controlls what image is displayed in Greeting
// Component based on time of day

export function getTime() {
    const now = new Date().getHours();
    if (!now) {
        console.log("Time could not be found.")
    } else if (now >= 6 && now <= 11) {
        console.log("Morning:", now);
        return "Morning";
    } else if (now >= 12 && now < 17) {
        console.log("Evening:", now);
        return "Evening";
    } else {
        console.log("Night:", now);
        return "Night";
    }
};