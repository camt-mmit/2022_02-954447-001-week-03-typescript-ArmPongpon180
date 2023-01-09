import { assign as assignInput } from './input.js';
function add(sectionsContainer, sectionTemplate, inputTemplate) {
    const fragment = sectionTemplate.content.cloneNode(true);
    const inputSection = fragment.querySelector('.cmp-input-section');
    if (inputSection === null) {
        throw new Error('Error');
    }
    sectionsContainer.append(fragment);
    assignInput(inputSection, inputTemplate);
    rebuildIndex(sectionsContainer);
}
export function assign(container, sectionTemplate, inputTemplate) {
    const sectionsContainer = container.querySelector('.cmp-sections-container');
    if (sectionsContainer === null) {
        throw new Error('Error');
    }
    container.addEventListener('click', (ev) => {
        if (ev.target) {
            if (ev.target.matches('.cmd-remove-section')) {
                remove(sectionsContainer, inputTemplate);
            }
        }
    });
    container.addEventListener('click', (ev) => {
        if (ev.target) {
            if (ev.target.matches('.cmd-add-section')) {
                add(sectionsContainer, sectionTemplate, inputTemplate);
            }
        }
    });
    sectionsContainer.addEventListener('click', (ev) => {
        if (ev.target) {
            const targetElement = ev.target;
            if (targetElement.matches('.cmd-remove-section')) {
                const inputSection = targetElement.closest('.cmp-input-section');
                if (inputSection === null) {
                    throw new Error('Erroe');
                }
                remove(sectionsContainer, inputSection);
            }
        }
    });
    add(sectionsContainer, sectionTemplate, inputTemplate);
}
function rebuildIndex(sectionsContainer) {
    const inputSections = [
        ...sectionsContainer.querySelectorAll('.cmp-input-section'),
    ];
    inputSections.forEach((inputSection, i) => {
        [...inputSection.querySelectorAll('.cmp-section-no')].forEach((elem) => {
            elem.innerText = `${i + 1}`;
        });
        [
            ...inputSection.querySelectorAll('.cmd-remove-section'),
        ].forEach((elem) => {
            elem.disabled = inputSections.length > 1 ? false : true;
        });
    });
}
function remove(sectionContainer, inputSection) {
    inputSection.remove();
    rebuildIndex(sectionContainer);
}
