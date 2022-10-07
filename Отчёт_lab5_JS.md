<p align = "center">МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ<br>
РОССИЙСКОЙ ФЕДЕРАЦИИ<br>
ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ<br>
ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ<br>
«САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
<br><br><br><br><br><br>
<p align = "center">Институт естественных наук и техносферной безопасности<br>Кафедра информатики<br>Григораш Алексей Владимирович</p>
<br><br><br>
<p align = "center">Лабораторная работа №6<br>«Основы языка <strong>JavaScript</strong>»<br>01.03.02 Прикладная математика и информатика</p>
<br><br><br><br><br><br><br><br><br><br><br><br>
<p align = "right">Научный руководитель<br>
Соболев Евгений Игоревич</p>
<br><br><br>
<p align = "center">г. Южно-Сахалинск<br>2022 г.</p>
<br><br><br><br><br><br><br><br><br><br><br><br>

## Введение

С помощью JavaScript Вы сможете создавать интерактивные веб-страницы.
Интерактивные страницы могут взаимодействовать с пользователем (выводить сообщения, изменять содержимое после определенных действий и т.д.)
JavaScript встраивается прямо в веб-страницы и исполняется браузером во время их загрузки.
JavaScript был создан в 1995 году как инструмент, предоставляющий веб-дизайнерам возможности программирования. JavaScript обладает простым синтаксисом и его очень легко изучить.
Все современные браузеры имеют поддержку JavaScript.

## Задачи:

1.	Напишите код, выполнив задание из каждого пункта отдельной строкой:
-	Создайте пустой объект user.
-	Добавьте свойство name со значением John.
-	Добавьте свойство surname со значением Smith.
-	Измените значение свойства name на Pete.
-	Удалите свойство name из объекта.

2. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. Должно работать так:

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

3. Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
const user = {
  name: "John"
};
// это будет работать?
user.name = "Pete";

4. У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

5. Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

6. Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?

7. Давайте произведём 5 операций с массивом.
·	Создайте массив styles с элементами «Джаз» и «Блюз».
·	Добавьте «Рок-н-ролл» в конец.
·	Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
·	Удалите первый элемент массива и покажите его.
·	Вставьте «Рэп» и «Регги» в начало массива.
·	Массив по ходу выполнения операций:
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл

8. Каков результат? Почему?
let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2](); // ?

9. Напишите функцию sumInput(), которая:
·	Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
·	Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
·	Подсчитывает и возвращает сумму элементов массива.


  10. На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

11. Удалить в массиве все числа, которые повторяются более двух раз. 

12.Введите одномерный целочисленный массив. Найдите наибольший нечетный элемент. Далее трижды осуществите циклический сдвиг влево элементов, стоящих справа от найденного максимума, и один раз сдвиг элементов вправо, стоящих слева от найденного максимума.

13. Найдите сумму отрицательных элементов массива.

14. Найдите произведение элементов массива с нечетными номерами.

15. Найдите сумму элементов массива между двумя первыми нулями. Если двух нулей нет в массиве, то выведите ноль.

16. Найдите наибольший элемент массива.

17. Найдите наименьший четный элемент массива. Если такого нет, то выведите первый элемент. 

18. Преобразовать массив так, чтобы сначала шли нулевые элементы, а затем все остальные.

19. Найдите сумму номеров минимального и максимального элементов. 

20. Найдите минимальный по модулю элемент массива.

21. Заполнить массив из 10 элементов случайными числами в интервале [-10..10] и сделать реверс отдельно для 1-ой и 2-ой половин массива.

22. Заполнить массив из 12 элементов случайными числами в интервале [-12..12] и выполнить циклический сдвиг ВПРАВО на 4 элемента.

Задачи CodeWars:
1.	https://www.codewars.com/kata/javascript-mathematician
2.	https://www.codewars.com/kata/javascript-from-the-inside-number-1-map
3.	https://www.codewars.com/kata/javascript-from-the-inside-number-2-filter
4.	https://www.codewars.com/kata/power-bind
5.	https://www.codewars.com/kata/closures-and-scopes
6.	https://www.codewars.com/kata/can-you-keep-a-secret



## Решение:

Файл lab5.js:
```JavaScript
module.exports = {

    Method1 : function(){
        console.log("1.");
        let user = {};
        user.name = "john";
        user. surname = "smith";
        console.log(user);
        user.name = "pete";
        console.log(user);
        delete user.name;
        console.log(user);
        return "";
    },

    Method2 : function(){
        console.log("2.");
        let isEmpty = obj => {
            let result = 0;
            for(const prop in obj)
                if (prop) result++;
            return result > 0 ? false : true;
        };
        let schedule = {}
        console.log(isEmpty(schedule));
        schedule["9:30"] = "get up";
        console.log(isEmpty(schedule));
        return "";
    },
    
    Method3 : function(){
        console.log("3.");
        const user = {
            name: "john"
        }
        console.log(user['name']);
        user.name = "pete";
        console.log(user['name']);
        return "";
    },

    Method4 : function(){
        console.log("4.");
        let salaries = {
            johh : 100,
            ann : 160,
            pete : 130
        }
        let sum = 0;
        for(const prop in salaries)
            sum += salaries[prop];
        console.log(sum);
        let salaries2 = {}
        let sum2 = 0;
        for(const prop in salaries2)
            sum2 += salaries2[prop];
        console.log(sum2);
        return ""; 
    },

    Method5 : function(){
        console.log("5.");
        let multiplyNumeric = obj => {
            for (let prop in obj)
               if (typeof(obj[prop]) == 'number') obj[prop] *= 2; 
        }
        let menu ={
            width: 200,
            height: 300,
            title: "my menu"
        }
        console.log(menu);
        multiplyNumeric(menu);
        console.log(menu);
        return "";
    },

    Method6 : function(){
        console.log("6.");
        let fruits = ["Яблоки", "Груша", "Апельсин"];
        let shoppingCart = fruits;
        shoppingCart.push("Банан");
        console.log( fruits);
        console.log( fruits.length );
        return "";
    },

    Method7 : function(){
        console.log("7.");
        let styles = ["Джаз", "Блюз"];
        styles.push("Рок-н-ролл");
        console.log(styles);
        styles[(styles.length - 1) / 2] = "Классика";
        console.log(styles);
        console.log(styles.shift());
        styles.unshift("Рэп", "Регги");
        console.log(styles);
        return "";
    },

    Method8 : function(){
        console.log("8.");
        let arr = ["a", "b"];
        arr.push(function() {
        console.log( this );
        })
        console.log(arr[2]());
        return "";
    },

    Method9 : function(){
        console.log("9.");
        let sumInput = () => {
            let readline = require("readline-sync");
            let array = [];
          
            while (true) {
                array.unshift(+readline.question("value: "));
                if (array[0] === "" || array[0] === null || !isFinite(array[0])) {
                    array.shift();
                    break;
                }
            }
        
            let sum = array.reduce(function(sum, item) {return sum + item} , 0);
            
            console.log(array);
            console.log(sum);
        }
        sumInput();
        
        return "";
    },

    Method10 : function(){
        console.log("10.");
        let getMaxSubSum = arr => {
            let subSum = 0;
            let sum = 0;
            for (let i of arr){
                sum += i;
                subSum = subSum > sum ? subSum : sum;
                if (sum < 0) sum = 0;
            }
            return subSum;
        }

        console.log(getMaxSubSum([-1, 2, 3, -9]));
        console.log(getMaxSubSum([2, -1, 2, 3, -9]));
        console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
        console.log(getMaxSubSum([-2, -1, 1, 2]));
        console.log(getMaxSubSum([100, -9, 2, -3, 5]));
        console.log(getMaxSubSum([1, 2, 3]));
        console.log(getMaxSubSum([-1, -2, -3]));
        return "";
    },

    Method11 : function(){
        console.log("11.");
        let Del = (array) =>{
            console.log(array);
            let result = [];
            for (let i = 0; i < array.length; i++){
                let count = 0;
                for (let j = 0; j < array.length; j++)
                    if (array[j] == array[i] )count++;
                        
                if (count < 3) result.push(array[i]);
            }
            return result;
        }
        console.log(Del([3, 6, 5, 0, 3, 8, 7, 0, 2, 8, 9, 3, 8, 4, 2, 6, 7, 8, 4, 7]));
        return "";
    },

    Method12 : function(){
        console.log("12.");
        let func12 = array => {
            console.log(array);
            
            let currentMax ;
            let max;
            for (let i of array){
                if (i % 2 != 0) currentMax = i;
                max = max > currentMax ? max : currentMax;
            }

            if (!max) return "Все чётные";

            let maxIndex = array.indexOf(max);

            if (maxIndex != array.length - 1){
                for (let i = 0; i < 3; i++){
                    let temp = array[maxIndex + 1];
                    for (let j = maxIndex + 1; j < array.length; j++){
                        array[j] = array[j + 1];
                    }
                    array[array.length - 1] = temp;
                }
            }
            
            if (maxIndex != 0){
                let temp = array[maxIndex - 1];
                for (let i = maxIndex - 1; i > 0; i--){
                    array[i] = array[i - 1];
                }
                array[0] = temp;
            }
            console.log(array);
            
            return `${maxIndex} : ${max}`;
        }
        console.log(func12([1,2,5,3,67,4,77,5,77,78,6,8,7,9]));
        console.log(func12([2,4,6,8,10]));
        return "";
    },

    Method13 : function(){
        console.log("13.");
        let func13 = array => {
            console.log(array);
            let sum = 0;
            for (let n of array) sum += n < 0 ? n : 0;
            return sum < 0 ? sum : "Все неотрицательные";
        }
        console.log(func13([-1,2,-3,4,-5,6,-7,8,-9]));
        console.log(func13([1,2,3,4]));
        console.log(func13([0,0,0]));

        return "";
    },

    Method14 : function(){
        console.log("14.");
        let func14 = array => {
            console.log(array);
            let result = 1;
            for (let i = 1; i < array.length; i += 2) result *= array[i];
            return result;
        }
        console.log(func14([-1,2,-3,4,-5,6]));
        console.log(func14([1,2,3,4]));
        console.log(func14([1,2,0]));

        return "";
    },

    Method15 : function(){
        console.log("15.");
        let func15 = array => {
            console.log(array);
            if (array.indexOf(0) == -1) return "Нет нулей";
            else {
                let zero1 = array.indexOf(0);
                let zero2 = -1;
                for (let i = zero1 + 1; i < array.length; i++) {
                    if (array[i] == 0){
                        zero2 = i;
                        break;
                    }  
                }
                if (zero2 == -1) return "Только один ноль";
                else {
                    let sum = 0;
                    for (let i = zero1; i < zero2; i++) sum += array[i];
                    return sum;
                }
            }
         
        }
        console.log(func15([-1,2,-3,0,4,5,6,0,8,9]));
        console.log(func15([1,2,3,4]));
        console.log(func15([1,2,0]));
        console.log(func15([1,1,1,0,2,2,2,2,0,3,3,3,0,4,4,4]));

        return "";
    },

    Method16 : function(){
        console.log("16.");
        let func16 = a => a.sort()[a.length-1];
        
        console.log(func16([-1,2,-3,0,4,9,5,6,0,8]));
        console.log(func16([1,2,3,4,0]));
        console.log(func16([1,1,1,0,2,2,2,2,3,0,4,4,4,0,3,3]));

        return "";
    },

    Method17 : function(){
        console.log("17.");
        let func17 = a => {
            for (let n of a.sort()) if (n % 2 == 0) return n;
        }
        
        console.log(func17([-1,2,-3,5,-4,-5,0,8]));
        console.log(func17([1,2,0,3,4]));
        console.log(func17([1,5,7,3,8]));

        return "";
    },

    Method18 : function(){
        console.log("18.");
        let func18 = array => {
            let lastZero = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] == 0)  {
                    [array[lastZero], array[i]] = [array[i], array[lastZero]];
                    lastZero++;
                }
            }
            return array;
        }
        
        console.log(func18([-1,2,0,0,5,0,-4,8,0,0]));
        console.log(func18([0,1,2,0,3,4,0]));
        console.log(func18([1,5,7,3,8]));

        return "";
    },

    Method19 : function(){
        console.log("19.");
        let func19 = array => {
            let maxIndex = 0;
            let minIndex = 0;
            let maxEl = array[0];
            let minEl = array[0];

            for (let i = 0; i < array.length; i++) {
                if (array[i] > maxEl){
                    maxEl = array[i];
                    maxIndex = i;
                }
                if (array[i] < minEl){
                    minEl = array[i];
                    minIndex = i;
                }
            }
            return maxIndex + minIndex + 2;
        }
        
        console.log(func19([-1,2,0,0,5,0,-4,8,0,0]));
        console.log(func19([1,2,0,3,4,0]));
        console.log(func19([5,7,3,1,8,2,3]));

        return "";
    },

    Method20 : function(){
        console.log("20.");
        let func20 = array => array.sort((x,y) => Math.abs(x) - Math.abs(y))[0];

        console.log(func20([5,-100,6,-55,55,3,66,-4]));
        console.log(func20([-6,-9,-4,1,-3,-2,-7]));
        console.log(func20([-9,-100,-5,-55,-6]));

        return "";
    },

    Method21 : function(){
        console.log("21.");
        let func21 = () =>  {
            let array = [];
            for (let i = 0; i < 10; i++) array[i] = Math.floor(Math.random() * (10 - -10)) - 10;    // (max - min) + min
            console.log(array);
            /* let sub1 = array.slice(0, (array.length ) / 2).reverse(); 
            let sub2 = array.slice((array.length ) / 2).reverse();*/
            array = array.slice(0, (array.length ) / 2).reverse().concat(array.slice((array.length ) / 2).reverse()) ;
            console.log(array);
        }
        func21();
        return "";
    },

    Method22 : function(){
        console.log("22.");
        let func22 = (shift) =>  {
            let array = [];
            for (let i = 0; i < 12; i++) array[i] = Math.floor(Math.random() * (12 - -12)) - 12;
            console.log(array);
       
            for (let i = 0; i < shift; i++){
                let temp = array[array.length - 1];
                for (let j = array.length - 2; j >= 0; j--)
                    array[j + 1] = array[j];
                
                array[0] = temp;
            }

            console.log(array);
        }
        func22(4);
        return "";
    },
}
```

Файл app.js:
```JavaScript
const methods = require('./lab5.js');

console.log(methods.Method1());
console.log(methods.Method2());
console.log(methods.Method3());
console.log(methods.Method4());
console.log(methods.Method5());
console.log(methods.Method6());
console.log(methods.Method7());
console.log(methods.Method8());

console.log(methods.Method10());
console.log(methods.Method11());
console.log(methods.Method12());
console.log(methods.Method13());
console.log(methods.Method14());
console.log(methods.Method15());
console.log(methods.Method16());
console.log(methods.Method17());
console.log(methods.Method18());
console.log(methods.Method19());
console.log(methods.Method20());
console.log(methods.Method21());
console.log(methods.Method22());

console.log(methods.Method9());
```

[Codewars](https://www.codewars.com/users/thejiexa/completed_solutions)

## Вывод:
В ходе выполнения задач повторил работу c переменными, операторами, способами вывода, циклами, функциями.
