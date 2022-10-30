export function openDisplay(element) {
    if (element.classList.contains('--hide')) {
        element.classList.remove('--hide');
    }
}
export function closeDisplay(element) {
    if (!element.classList.contains('--hide')) {
        element.classList.add('--hide');
    }
}
export function toggleDisplay(element) {
    if (element.classList.contains('--hide')) {
        element.classList.remove('--hide');
    } else {
        element.classList.add('--hide');
    }
}
export function btnCloseId(parentElement, classBtn = '.close') {
    // close icon
    const closeBtns = parentElement.querySelectorAll(classBtn);
    // const closeBtns = document.querySelectorAll('.close');
    closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener('click', () => closeDisplay(parentElement));
    });
}
export function closeModal(element) {
    element.addEventListener('click', (e) => {
        if (e.target === element) {
            closeDisplay(element);
        }
    });
}
export function formatDateDDMMYYYY(date) {
    return (
        date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    );
}
export function resetInputs(inputs) {
    inputs.forEach((input) => {
        input.value = '';
        input.blur();
    });
}
