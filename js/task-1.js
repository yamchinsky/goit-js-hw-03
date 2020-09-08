// Задача 3 - 1
// CRUD для свойств объекта
// С - create(создать)
// R - read(читать)
// U - update(обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ: значение
// c переносом строки('\n')

/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */

let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line
user.mood = 'happy';
user['full time'] = true;
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  message += `${key} : ${user[key]}\n`;
}
console.log(message);

или
for (const key of keys) {
  message = `${key} : ${user[key]}\n`;
  console.log(message);
}

2 вариант решения
const entries = Object.entries(user);

for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];

  message = `${key}: ${value}`;
  console.log(message);
}

Похожее решение вывода в консоль
let obj = { model: 'AUDI A8', year: '2019', color: 'brown' };

for (let key in obj) {
  console.log(`${key} = ${obj[key]}`);
}
console.log(user[value] : user[key]);
