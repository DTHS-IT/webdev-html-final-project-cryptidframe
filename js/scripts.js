const openBtn = document.getElementById("download-button");
const closeBtn = document.getElementById("close-button");
const modal = document.getElementById("modal");

openBtn = addEventListener("click", () => {
    modal.classList.add("open");
});

closeBtn = addEventListener("click", () => {
    modal.classList.remove("open");
});