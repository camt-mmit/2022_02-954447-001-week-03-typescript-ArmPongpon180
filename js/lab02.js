import { assign as assignSection } from './section.js';
document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('.cmp-main-container');
    const sectionTemplate = document.querySelector('template#tmp-section');
    const inputTemplate = document.querySelector('template#tmp-input');
    if (mainContainer === null) {
        throw new Error('Erroe');
    }
    if (sectionTemplate === null) {
        throw new Error('Error');
    }
    if (inputTemplate === null) {
        throw new Error('Error');
    }
    assignSection(mainContainer, sectionTemplate, inputTemplate);
});
