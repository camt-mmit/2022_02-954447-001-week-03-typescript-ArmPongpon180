import { assign as assignSection } from './section.js';

document.addEventListener('DOMContentLoaded', () => {
  const mainContainer = document.querySelector<HTMLElement>(
    '.cmp-main-container',
  );
  const sectionTemplate = document.querySelector<HTMLTemplateElement>(
    'template#tmp-section',
  );
  const inputTemplate =
    document.querySelector<HTMLTemplateElement>('template#tmp-input');

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
