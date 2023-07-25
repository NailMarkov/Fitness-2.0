const inputElement = document.querySelector('[data-on-input-validate]');
const messageElement = document.querySelector('[data-message-base="Сообщение"]');

export const initForm = (element) => {
  const validateInput = window.form.validateFormElement(inputElement, messageElement);

  return validateInput;
};
