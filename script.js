//Вивести на екран всі числа від 1 до 10 за допомогою циклу while.

// const num1 = document.querySelector(".hw1");
// let string1 = '';

let i = 1;
while (i <= 10) {
    console.log(i);
    document.write (i + " ");
    // if(i===1) {
    //   string1 = i;  
    // } else {
    //     string1 += ', ' + i;
    // }

     i+=1;
}
document.write ("<br /> <br />");

//num1.textContent =  string1;

// Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число не парне, пропустити його за допомогою continue.

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write (i + " ");
    }
    else continue;
}
document.write ("<br /> <br />");

// Вивести на екран таблицю множення числа 7 за допомогою циклу for.
for (i = 1; i <=10; i++) {
    document.write (i +" * 7 = " + i * 7 + "<br />");
}
document.write ("<br />");

// Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while.
let numbers = [1,2,3,4,5];
let j = 0;
while (j < numbers.length) {
    console.log(numbers[j]);
    document.write (numbers[j] + " ");
    
     j+=1;
}
document.write ("<br /> <br />");

// Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. 
// Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i = 0;  i< numbers2.length; i++) {
  if(numbers2[i] === 7) break;
  else document.write(numbers2[i] + " ")
}
document.write ("<br /> <br />");

// Створити скрипт, який виводить на екран всі числа, які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.

let numbers3 = [2, 5, 3, 7, 9, 6, 10, 1, 5, 6];
const breakNum = 6;

for(let i = 0;  i< numbers3.length; i++) {
  if(numbers3[i] >= breakNum) break;
  else document.write(numbers3[i] + " ")
}
document.write ("<br /> <br />");

// За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.

let k = 1;
while (k <= 20) {
    if (k % 3 === 0) {
        k+=1;
        continue;
    }
    document.write (k + " ");
    k+=1;
}
    