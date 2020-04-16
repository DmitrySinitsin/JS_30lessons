let a = 6;
let b = 'Hello';

console.log(a);

let inputIn = document.querySelector('.input-in');// input

let button = document.querySelector('button');// button
let div = document.querySelector('.out');

button.onclick = function () {
    //кнопка будет нажата
    console.log('Работает!!!!!!!!!!');
    //console.log(inputIn.value);// value - это то, что введено в input
    let b = +inputIn.value;//плюс перед переменной - преобразование переменной из строковой в число
    console.log(b + 10);// '66' + 10 = 6610
    div.innerHTML = b;
    inputIn.value = '';//очистка инпута от введенного значения
}