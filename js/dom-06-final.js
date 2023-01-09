import { assign as assignInput } from './input.js';
document.addEventListener('DOMContentLoaded', () => {
    const inputTemplate = document.querySelector('template#tmp-input');
    if (inputTemplate === null) {
        throw new Error('Error');
    }
    const inputSection = document.querySelector('.cmp-input-section');
    if (inputSection === null) {
        throw new Error('Error');
    }
    assignInput(inputSection, inputTemplate);
});
