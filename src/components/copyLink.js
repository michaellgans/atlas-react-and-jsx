// Copies the link to clipboard on click

export function copyLink(link) {
    navigator.clipboard.writeText(link);

    console.log("Copy was clicked on");
};