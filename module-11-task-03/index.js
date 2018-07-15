'use strict';

/* 
  Напишите функцию validate которая проверяет поля формы 
  firstname и lastname и возвращает результат в виде 
  обьекта со свойствами 'first name' и 'last name'.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }
  
  Критерии валидации:
  1)Имя. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/

const firstname = document.getElementById('first_name');
const lastname = document.getElementById('last_name');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', validate);

const patern = {
  first_name: /^[a-z]{4,12}$|^[a-z]{1,15}[ -]{1}[a-z]{1,15}$/g,
  last_name: /^[a-z]{4,12}$|^[a-z]{1,15}[ -]{1}[a-z]{1,15}$/g,
};

function handleValidation(arr) {
  let result = arr.reduce((acc, { id, value }) => {
    const valid = validation(id, value);
    acc[id] = valid;
    return acc;
  }, {});
  const valid = Object.values(result).every(val => val);
  return {
    valid,
    result,
  };
}

function validation(name, value) {
  return patern[name].test(value);
}

function validate(evt) {
  evt.preventDefault();
  const inputArr = [
    {
      id: firstname.id,
      value: firstname.value,
    },
    {
      id: lastname.id,
      value: lastname.value,
    },
  ];
  const validate = handleValidation(inputArr);
  showResult(validate);
}

function showResult(res) {
  if (!res.valid) {
    console.log(res.result);
    if (!res.result[first_name]) {
      alert('Wrong First Name');
    } else if (!res.result[last_name]) {
      alert('Wrong Last Name');
    }
  } else {
    console.log(res.result);
    return alert('You sumbited succesfull!');
  }
}
