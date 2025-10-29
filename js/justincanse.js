document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.download-innerContent');
    const openBtn = document.querySelector('.download-button');
    const closeBtn = document.querySelector('.close-button');

    if (openBtn && closeBtn && modal) {
        openBtn.addEventListener('click', () => {
            modal.classList.add('open');
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('open');
        });
    }
});