document.addEventListener('DOMContentLoaded', () => {
    const modalTwo = document.querySelector('.download-innerContentTwo');
    const openBtnTwo = document.querySelector('.download-buttonTwo');
    const closeBtnTwo = document.querySelector('.close-buttonTwo');

    if (openBtnTwo && closeBtnTwo && modalTwo) {
        openBtnTwo.addEventListener('click', () => {
            modalTwo.classList.add('open');
        });

        closeBtnTwo.addEventListener('click', () => {
            modalTwo.classList.remove('open');
        });
    }
});