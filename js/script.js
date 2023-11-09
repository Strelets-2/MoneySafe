import { convertStringNumber } from './convertStringNumber.js';

const financeForm = document.querySelector(".finance__form");
const financeAmount = document.querySelector(".finance__amount");
const financeReport = document.querySelector(".finance__report");

let amount = 0;

financeAmount.textContent = amount;

financeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Объявляем константу в которую записываем значение data-type-operation атрибута кнопки - или + на которую мы нажали
  const typeOperation = e.submitter.dataset.typeOperation;
  // Объявляем константу в которую записываем значение из инпута Сумма
  const changeAmount = Math.abs(convertStringNumber(financeForm.amount.value));


  if (typeOperation === "expenses" && amount !== 0) {
    amount -= changeAmount;
  };

  if (typeOperation === "income") {
    amount += changeAmount;
  };

  financeAmount.textContent = `${amount.toLocaleString()} ₽`;
});

financeReport.addEventListener("click", (e) => {
  const report = document.querySelector(".report");
  report.classList.add('report__open');
})
