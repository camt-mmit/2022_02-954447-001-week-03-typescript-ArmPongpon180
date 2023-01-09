import { assign as assignInput } from './input.js';
import { ComandComponent, ResultComponent } from './types.js';

function add(
  sectionsContainer: HTMLElement,
  sectionTemplate: HTMLTemplateElement,
  inputTemplate: HTMLTemplateElement,
) {
  const fragment = sectionTemplate.content.cloneNode(true) as DocumentFragment;
  const inputSection =
    fragment.querySelector<ResultComponent>('.cmp-input-section');

  if (inputSection === null) {
    throw new Error('Error');
  }

  sectionsContainer.append(fragment);

  assignInput(inputSection, inputTemplate);
  rebuildIndex(sectionsContainer);
}

export function assign(
  container: HTMLElement,
  sectionTemplate: HTMLTemplateElement,
  inputTemplate: HTMLTemplateElement,
) {
  const sectionsContainer = container.querySelector<HTMLElement>(
    '.cmp-sections-container',
  );

  if (sectionsContainer === null) {
    throw new Error('Error');
  }

  container.addEventListener('click', (ev) => {
    if (ev.target) {
      if ((ev.target as HTMLElement).matches('.cmd-remove-section')) {
        remove(sectionsContainer, inputTemplate);
      }
    }
  });

  container.addEventListener('click', (ev) => {
    if (ev.target) {
      if ((ev.target as HTMLElement).matches('.cmd-add-section')) {
        add(sectionsContainer, sectionTemplate, inputTemplate);
      }
    }
  });

  sectionsContainer.addEventListener('click', (ev) => {
    if (ev.target) {
      const targetElement = ev.target as HTMLElement;
      if (targetElement.matches('.cmd-remove-section')) {
        const inputSection = targetElement.closest(
          '.cmp-input-section',
        ) as HTMLElement;

        if (inputSection === null) {
          throw new Error('Erroe');
        }

        remove(sectionsContainer, inputSection);
      }
    }
  });

  add(sectionsContainer, sectionTemplate, inputTemplate);
}

function rebuildIndex(sectionsContainer: HTMLElement) {
  const inputSections = [
    ...sectionsContainer.querySelectorAll('.cmp-input-section'),
  ];

  inputSections.forEach((inputSection, i) => {
    [...inputSection.querySelectorAll<HTMLElement>('.cmp-section-no')].forEach(
      (elem) => {
        elem.innerText = `${i + 1}`;
      },
    );

    [
      ...inputSection.querySelectorAll<ComandComponent>('.cmd-remove-section'),
    ].forEach((elem) => {
      elem.disabled = inputSections.length > 1 ? false : true;
    });
  });
}

function remove(sectionContainer: HTMLElement, inputSection: HTMLElement) {
  inputSection.remove();

  rebuildIndex(sectionContainer);
}
