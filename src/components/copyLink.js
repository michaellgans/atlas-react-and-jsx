// Copies the link to clipboard on click

export function copyLink(event, link) {
    event.preventDefault();

    navigator.clipboard.writeText(link);

    console.log("Copy was clicked on");
};