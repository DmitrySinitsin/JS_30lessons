let a = 19;

// >= <= == != порядок важен
// CTRL + slash - mass Comment
// if (a != 9) {
//     //true
//     console.log('Yes');
// }
// else {
//     console.log('else');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');

// () => {} это сокращенный вариант записи функции (стрелочная)
button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num <= 60) {//если не добавить верхнюю границу, то второй ифэлз не сработает на 60+
        console.log('welcome!!!');
    }
    else if (num > 60) {
        console.log('Ты точно сюда?')
    }
    else {
        console.log('Ты не пройдёшь!!');
    }
    switch (num) {
        case 15:
            console.log('Ещё год потерпи!');
            break;//если не надо проверять блоки ниже - пиши брик
        case 16:
            console.log('Ураааа можно!!!!');
            break;
        default:
            console.log('oooooooooook');
    }
}

let b = 3;
console.log(b > 3 && b < 7);
console.log(b == 3 || b == 7);