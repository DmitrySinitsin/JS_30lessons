let buttonStart = document.querySelector('#b-1');
buttonStart.onclick = () => {
    strCount = '';
    for (let i = 1; i <= 50; i++) {
        strCount += i + ' ';
    }
    document.querySelector('#out-1').innerHTML = strCount;
}
let buttonStart2 = document.querySelector('#b-2');
buttonStart2.onclick = () => {
    strCount2 = '';
    for (let i = 2; i <= 122; i += 2) {
        strCount2 += i + ' ';
    }
    document.querySelector('#out-2').innerHTML = strCount2;
}
let buttonStart3 = document.querySelector('#b-3');
buttonStart3.onclick = () => {
    strCount3 = '';
    for (let i = 25; i >= 7; i--) {
        strCount3 += i + ' ';
    }
    document.querySelector('#out-3').innerHTML = strCount3;
}


// let div = document.querySelectorAll('.one');
// console.log(div);
// // div.style.background = 'red';

// document.querySelector('button').onclick = () => {
//     let r = document.querySelectorAll('input[type="radio"]');
//     console.log(r);
//     for (let i = 0; i < r.length; i++) {
//         if (r[i].checked) {
//             console.log(r[i].value);
//         }
//     }
// }
// let out = '';
// for (let i = 0; i < 10; i++) {
//     if (i == 6) continue;//пропустить шестой элемент
//     out += i + ' ';
//     //if (i == 6) break;

// }
// document.querySelector('#out').innerHTML = out;

// for (let i = 0; i < div.length; i++) {
//     console.log(div[i]);
//     div[i].style.background = 'red';
//     div[i].onclick = two;
// }

// function two() {
//     console.log('work!!!');
// }

// let b = document.getElementsByClassName('one');
// let c = document.getElementsByTagName('div');
// console.log(b);
// console.log(c);
// for (let i = 0; i < b.length; i++) {
//     c[i].style.border = '11px solid black';
// }



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

// document.querySelector('#btn-1').onclick = () => {
//     console.log(document.querySelector('#i2').value);
//     let myCheckBox = document.querySelector('#i2');
//     console.log(myCheckBox.checked);
//     if (myCheckBox.checked) {
//         console.log('Нажат');
//     }
//     else {
//         console.log('Не нажат');
//     }
// }

// document.querySelector('#btn-2').onclick = (event) => {
//     event.preventDefault();//остановка дефолтного перезагруза страницы
    // let text = document.querySelector('#two');
    // console.log(text.value);
    // text.value = 'one';
//     let form = document.querySelector('form');
//     console.log(form);
//     console.log(form.elements.two.value);//форма.свойствоЭлементс.идентификатор.значение
//     console.log(form.elements.three.value);
// }
// console.log('Dmitry');
// console.log(05);
// console.log('Добро ' + 'пожаловать ' + 'на курс!');
// let a = 7;
// let b = 9;
// console.log(a * b);
// let c = 7;
// let d = 9;
// console.log(7 / 9);
// let e = 3;
// let f = 5;
// console.log(+e + f);
// console.log(e + f);

// let inField = document.querySelector('#i-1');
// let startButton = document.querySelector('#b-1');
// let resField = document.querySelector('#out1');
// startButton.onclick = function f1() {
//     let a = +inField.value;
//     console.log('Work!');
//     resField.innerHTML = a == 4;
// }

// let a21 = document.querySelector('#a21');
// let a22 = document.querySelector('#a22');
// let btnS = document.querySelector('#b-2');
// let outWindow = document.querySelector('#out-2');
// btnS.onclick = function f2() {
//     let a = +a21.value;
//     let b = +a22.value;
//     if (a < b)
//         outWindow.innerHTML = b;
//     else
//         outWindow.innerHTML = a;
// }