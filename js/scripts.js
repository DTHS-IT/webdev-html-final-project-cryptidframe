document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("download-innerContent");
    const openBtn = document.getElementById("download-button");
    const closeBtn = document.getElementById("close-button");

    openBtn = addEventListener("click", () => {
        modal.classList.add("open");
    });

    closeBtn = addEventListener("click", () => {
        modal.classList.remove("open");
    });
});