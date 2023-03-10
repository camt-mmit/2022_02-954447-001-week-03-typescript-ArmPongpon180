document.addEventListener('DOMContentLoaded', () => {
  const inputs = [
    ...document.querySelectorAll<HTMLInputElement>(
      '.cmp-inputs-container input[type="number"]',
    ),
  ];

  inputs.forEach((elem) => {
    elem.addEventListener('change', () => {
      const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);

      const outputComponent =
        document.querySelector<HTMLOutputElement>('output.cmp-result');

      if (outputComponent === null) {
        throw new Error("Cant not find 'output.cmp-result' in DOM tree.");
      }

      outputComponent.value = `${total}`;
    });
  });
});
