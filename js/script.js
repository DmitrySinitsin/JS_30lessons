// document.querySelector('button').onclick = () => {
//     console.log(document.querySelector('#one').value);//без указания вэлью будет возвращён сам объект а не то что там введено
//     //применение стилей к объектам
//     document.querySelector('button').style.backgroundColor =
//         document.querySelector('#one').value;
// }

// document.querySelector('#one').oninput = () => {
//     console.log(document.querySelector('#one').value);
//     document.querySelector('span').innerHTML = document.querySelector('#one').value;
// }

document.querySelector('#btn-1').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('Нажат');
    }
    else {
        console.log('Не нажат');
    }
}

document.querySelector('#btn-2').onclick = (event) => {
    event.preventDefault();//остановка дефолтного перезагруза страницы
    // let text = document.querySelector('#two');
    // console.log(text.value);
    // text.value = 'one';
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.two.value);//форма.свойствоЭлементс.идентификатор.значение
    console.log(form.elements.three.value);
}
console.log('Dmitry');
console.log(05);
console.log('Добро ' + 'пожаловать ' + 'на курс!');
let a = 7;
let b = 9;
console.log(a * b);
let c = 7;
let d = 9;
console.log(7 / 9);
let e = 3;
let f = 5;
console.log(+e + f);
console.log(e + f);

let inField = document.querySelector('#i-1');
let startButton = document.querySelector('#b-1');
let resField = document.querySelector('#out1');
startButton.onclick = function f1() {
    let a = +inField.value;
    console.log('Work!');
    resField.innerHTML = a == 4;
}

let a21 = document.querySelector('#a21');
let a22 = document.querySelector('#a22');
let btnS = document.querySelector('#b-2');
let outWindow = document.querySelector('#out-2');
btnS.onclick = function f2() {
    let a = +a21.value;
    let b = +a22.value;
    if (a < b)
        outWindow.innerHTML = b;
    else
        outWindow.innerHTML = a;
}
let button1 = document.querySelector('#b-1');//вечно забываю в указании на идентификатор давать знак диеза (решетку)!!!!
let input1 = document.querySelector('.b-2');
let paragraph1 = document.querySelector('.p-3');
button1.onclick = () => {
    console.log ('button');
    alert('Номер задачи: 1');
}
input1.onclick=()=>{
    alert('Номер задачи теперь: 2');
}
paragraph1.onclick =()=>{
    alert('Номер задачи таперича такой: 3');
}