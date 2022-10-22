const buttons = document.querySelectorAll('.container-buttons__button');
const submit = document.getElementById('submit');
let numberValue = 0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    button.classList.toggle('active');
    numberValue = button.value;
  });
});

submit.onclick = () => {
  document.getElementById(
    'span'
  ).innerHTML = `You selected ${numberValue} out of 5`;

  document.querySelector('.main-article').classList.add('hidden');

  document.querySelector('.second-article').classList.remove('hidden');
};