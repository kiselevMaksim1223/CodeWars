function sum(a, b) { 
    return a + b;
}

function sum2(a, b) { 
    return a*b;
}

document.querySelector(".b-1").addEventListener("click", function() {
    result = sum(3, 4)
    console.log(result)
});

// переделали в стрелочную функцию
document.querySelector(".b-1").addEventListener("click", () => {
    result = sum(3, 4)
    console.log(result)
});

// запись двух функций
document.querySelector(".b-2").addEventListener("click", () => {
    result = sum(3, 4)
    console.log(result)
    multi = sum2 (5, 5)
    console.log(multi)
});

// callback

const arr1 = [3,4,5,6,7,8]

function multX2(a) { 
    return a**2;
}
const res = arr1.map(multX2)
console.log(res);

// сделаем тоже самое, что и выше, но без вывода отдельной функции 
const res2 = arr1.map(function (a){ 
    return a**2;
})
console.log(res2)

// а теперь с помощью стрелочной функции
const res3 = arr1.map((a) => { 
    return a**2;
})
console.log(res3)

// сокращенные варианты стрел функций
// 1) если строка одна и один аргумент, убрать {} и return и ()
const res4 = arr1.map(a => a**2);
console.log(res4)

// filter

const res5 = arr1.filter(function(value, index){ 
    if (index%2 === 0) { 
        return true;
    }
})
console.log(res5)

// тоже самое стрелочной ф-цией
const res6 = arr1.filter((value, index) => (index%2 === 0))
console.log(res6)