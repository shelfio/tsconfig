export const textContents = [...document.querySelectorAll('div')].map(
  element => element.textContent ?? ''
);
