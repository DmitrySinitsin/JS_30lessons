const a = {
    "a": 5,
    "b": 'Hello',
    "z2": 'Hi',
    y43: 2020,
    'villa de': 3040,
};
a.yyyy = 5555;
a.b = 'uuu';
delete a.a;// удаление элемента массива по его имени
console.log(a);
console.log(a.z2);
let kk = 'y43';
console.log(a[kk]);

// document.querySelector('.out30').innerHTML = a;
let out30 = '';
for (let key in a) {
    // out30 += key;
    // out30 += a[key] + ' ';
    out30 += key + ' ---' + a[key] + '<br>';
}
document.querySelector('.out30').innerHTML = out30;



// function printTime() {
//     let d = new Date();
//     let hours = d.getHours();
//     let mins = d.getMinutes();
//     let secs = d.getSeconds();
//     // document.body.innerHTML = hours + ":" + mins + ":" + secs;
//     document.querySelector('.time').innerHTML = hours + ":" + mins + ":" + secs;
// }
// setInterval(printTime, 1000);

// // задача перемещения единицы в ряду без цикла
// let d = [1, 0, 0, 0, 0];
// document.querySelector('.out2').innerHTML = d;
// let k = 0;
// document.querySelector('button').onclick = () => {
//     if (k + 1 < 5) {
//         d[k] = 0;
//         d[k + 1] = 1;
//         k++;
//     }

//     document.querySelector('.out2').innerHTML = d;
// }



// let a = [4, 5, 6];
// let b = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// // console.log(b);

// let out = '';

// for (let i = 0; i < b.length; i++) {
//     for (let k = 0; k < b[i].length; k++) {
//         console.log(b[i][k]);
//         out += b[i][k] + ' ';
//     }
//     out += '<br>';
// }

// for (let i = 0; i < b.length; i++) {
//     for (let k = 0; k < b[i].length; k++) {
//         // console.log(b[i][k]);
//         if (b[i][k] > 4) {
//             out += b[i][k] + ' ';

//         }
//     }
//     out += '<br>';
// }

// document.querySelector('.out').innerHTML = out;

// for (let i = 0; i < b.length; i++) {
//     console.log(b[i]);
//     let c = b[i];

//     for (let k = 0; k < c.length; k++) {
//         console.log(c[k]);
//     }
// }

// for (let i = 0; i < b.length; i++) {
//     //console.log(b[i]);
//     let c = b[i];

//     for (let k = c.length - 1; k >= 0; k--) {
//         console.log(c[k]);
//     }
// }


// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const b = ['a', 'b', 'c', 'd', 'e', 'f'];

// console.log(a.length);
// console.log(a.push(10, 11, 44, 55, 66));
// console.log(a);
// b.push('j', 'e');
// console.log(b);
// b.pop();//удаление последнего (справа) элемента массива
// console.log(b.pop());//получаем удаляемый элемент массива
// console.log(b);

// //удалить элемент внутри массива (НЕ ВЛИЯЕТ НА ДЛИНУ МАССИВА!!!)
// delete a[3];
// console.log(a);

// //удалить начиная с третьего элемента, запятая, удалить 4 элемента
// a.splice(3, 4, 'hi');//сплайс МЕНЯЕТ длину массива и если надо добавляет замену (третий аргумент)
// console.log(a);

// a.unshift('AAA');//втулить в начало массива элемент из аргумента
// console.log(a);

// let a = 'Иван';
// let b = '37';
// let z7 = 'Овен';
// let c = ['Иван', 37, 'Овен'];//создание и инициализация значениями
// let d = [];//создание пустого массива
// console.log(c[0]);
// console.log(c[1]);
// console.log(c[5]);//undefined
// console.log(c);
// console.log(c.length);








//ширину 200px, высоту 40px
// buttonHuy = document.querySelector('.b-1');
// outHuy = document.querySelector('.out-1');
// buttonHuy.onclick = function f1() {
//     outHuy.style.width = '200px';
//     outHuy.style.height = '40px';
// }

// По нажатию кнопки b-2 запускайте 
// функцию f2, которая присваивает 
// блоку out-2 класс .bg-2.
// buttonHuy = document.querySelector('.b-2');
// buttonUdaliClass = document.querySelector('.b-3');
// outHuy = document.querySelector('.out-2');
// buttonHuy.onclick = function f2() {
//     outHuy.classList.add('bg-2');
// }
// buttonUdaliClass.onclick = function f3() {
//     outHuy.classList.remove('bg-2');
// }




// const one = document.querySelector('.one');
// one.style.width = '150px';
// one.style.paddingBottom = '40px';//кэмелКейс и присваивать СТРОКУ с единицами измерения
// //console.log(one.style);
// one.classList.add('two', 'three');//затрет предыдущий класс если совпадение и добавит указанные классы
// one.classList.remove('three');
// const toggle = document.querySelector('.toggle');
// toggle.onclick = function () {
//     this.classList.toggle('three');
// }
// //атрибуты задаются с префиксом data

// console.log(one.getAttribute('data'));
// console.log(document.querySelectorAll('link')[1].getAttribute('href'));

// one.setAttribute('data-num', 6);


// let gas = document.querySelectorAll('.gas');
// for (let i = 0; i < gas.length; i++) {
//     gas[i].onclick = function () {
//         let gallons = document.querySelector('.gallons').value;
//         let amount = this.getAttribute('data');

//         console.log(gallons * amount);
//     }
// }

// let a = document.createElement('div');
// a.innerHTML = 'Hello!';
// a.classList.add('one');
// a.onclick = function () {
//     alert('Hello!');
// }

// document.querySelector('.test').appendChild(a);//добавление дочернего элемента
// console.log(a);



// Допишите код функции так, 
// чтобы она возвращала 
// произведение двух чисел, 
// переданных ей в качестве параметра a, b. 
// Протестируем функцию на двух примерах, 
// с помощью кнопок b3-1 и b3-2.


// function t3(a, b) {
//     return a * b;
// }
// document.querySelector('.b-3-1').onclick = function () {
//     document.querySelector('.out-3-1').textContent = t3(3, 4);
// }
// document.querySelector('.b-3-2').onclick = function () {
//     document.querySelector('.out-3-2').textContent = t3(5, 6);
// }



// Пусть теперь функция t2 возвращает переменную a2. 
// Поскольку функция возвращает переменную, 
// то имя функции со скобками (вызов функции) 
// можно встраивать в выражения. 
// Обратите внимание, как изменился вызов функции.

// let a2 = 8;
// function t2() {
//     return a2;
// }
// document.querySelector('.b-2').onclick = function () {
//     document.querySelector('#out-2').textContent = t2() * 2;
// }




// Напишите функцию t1, которая 
// при нажатии кнопки выводит в out-1 переменную a1.
// let a1 = 8;
// let buttonZ1 = document.querySelector('.z-1');
// buttonZ1.onclick = function t1() {
//     document.querySelector('#out-1').innerHTML = a1;
// }






// document.querySelector('.f-2').onclick = function () {
//     console.log('*****************');
// }
// //при повторах отрабатывает последняя функция
// document.querySelector('.f-2').onclick = () => {
//     console.log('.....................');
// }
// (a, b) => {//два параметра (сокращенная запись стрелочной функции)

// }

// a => {//один параметр, скобки опускаются в сокращении стрелочной функции

// }

// (a) => 'Hello' * a;//сокращение с ритёрном функции




// let f1 = document.querySelector('.f-1');

// function one() {
//     console.log('Work!!')
// }

// one();

// //f1.onclick = one;//вызов функции указывается БЕЗ круглых скобок (если их указать то функция отработает один раз и результат запишется в объект слева от оператора присваивания)
// //f1.onclick = function () {//анонимная функция (без наименования)
// f1.onclick = () => {//стрелочная функция - аналог анонимной
//     console.log('Hello!');
// }

// console.log(1 + one());
// console.log(one());//undefined

// function two() {
//     console.log('work 22222');
//     return 54;
// }
// two();
// console.log(1 + two());

// let a = 8;
// let b = 9;
// //let c;
// function multi() {
//     console.log(a * b);
//     //c = a * b;
//     return a * b;
// }
// let c1 = multi();
// let c2 = 10 * multi();
// //console.log(c);
// console.log(c1, c2);

// function multi2(x = 9, y = 8) {
//     return x * y;
// }
// console.log(multi2(4, 5));
// console.log(multi2(20, a));
// console.log(multi2());//используются параметры по умолчанию
// console.log(multi2(10));//будет заменен лишь первый параметр

// let out4 = document.querySelector('.out4');
// for (let i = 1; i <= 4; i++) {
//     //out4.innerHTML += `<br>`;
//     for (let k = 0; k < 3; k++) {
//         out4.innerHTML += '*' + '_';
//     }
//     out4.innerHTML += '<br>';
// }
// нарисуйте строку:

// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// Решить задачу с 
// помощью вложенных циклов. 
// Внешний цикл выводит 
// перенос строки br, 
// внутренний - звездочки, 
// знак подчеркивания.



// let out3 = document.querySelector('.out3');
// for (let i = 1; i < 4; i++) {
//     out3.innerHTML += `${i}<br>`;
//     for (let k = 0; k < 3; k++) {
//         out3.innerHTML += '*' + '_';
//     }
//     out3.innerHTML += '<br>';
// }
// нарисуйте строку:
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// Решить задачу с помощью вложенных циклов. 
// Внешний цикл выводит цифры и перенос строки br, , 
// второй - звездочки, 
// знак подчеркивания 
// и знак переноса.



// let out2 = document.querySelector('.out2');
// console.log(out2);
// С помощью вложенных циклов, нарисуйте строку:

// ***_***_***_
// где звездочки рисуются с помощью 
// внутреннего цикла от 0 до 3, 
// а _ с помощью внешнего.
// for (let i = 0; i < 3; i++) {

//     for (let k = 0; k < 3; k++) {
//         out2.innerHTML += '*';
//     }
//     out2.innerHTML += '_';
// }



// let out = document.querySelector('.out');
// console.log(out);

// for (let i = 1; i < 10; i++) {
//     // out.innerHTML += '3 * ' + i + " = " + i * 3 + '<br>';
//     //out.innerHTML += `3 * ${i} = ${3 * i}<br>`;//интерполяция
//     for (let k = 1; k < 10; k++) {
//         out.innerHTML += `${i} * ${k} = ${k * i}<br>`;//интерполяция
//     }
//     out.innerHTML += '<hr>';
// }




// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 10; k++) {
//         out.innerHTML += k;
//     }
//     out.innerHTML += '<br>';
// }


// let buttonStart = document.querySelector('#b-1');
// buttonStart.onclick = () => {
//     strCount = '';
//     for (let i = 1; i <= 50; i++) {
//         strCount += i + ' ';
//     }
//     document.querySelector('#out-1').innerHTML = strCount;
// }
// let buttonStart2 = document.querySelector('#b-2');
// buttonStart2.onclick = () => {
//     strCount2 = '';
//     for (let i = 2; i <= 122; i += 2) {
//         strCount2 += i + ' ';
//     }
//     document.querySelector('#out-2').innerHTML = strCount2;
// }
// let buttonStart3 = document.querySelector('#b-3');
// buttonStart3.onclick = () => {
//     strCount3 = ''; git
//     for (let i = 25; i >= 7; i--) {
//         strCount3 += i + ' ';
//     }
//     document.querySelector('#out-3').innerHTML = strCount3;
// }


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
