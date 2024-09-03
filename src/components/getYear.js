// Controlls what year is displayed in Footer
// Component based on current year

export function getYear() {
    const now = new Date().getFullYear();
    if (!now) {
        console.log("Year could not be found.");
    } else {
        console.log("Year:", now);
        return now;
    }
};