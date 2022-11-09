let javaScriptDescription = "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";

//Обрежь строку наполовину с 1-го символа по символ, который находится посередине строки
javaScriptDescription = javaScriptDescription.substring(0, Math.floor(javaScriptDescription.length / 2));

//В обрезанной строке необходимо заменить все строчные буквы “а” на прописные “А” (и латиницу, и кириллицу).
javaScriptDescription = javaScriptDescription.replace(/[aа]/g, "A");

//Удали все пробелы в строке.
javaScriptDescription = javaScriptDescription.replaceAll(" ", "");

//Продублируй итоговую строку 3 раза.
javaScriptDescription = javaScriptDescription.repeat(3);

//В консоль необходимо вывести:
// Символ, который находится посередине конечной строки
// Саму строку
console.log(javaScriptDescription[Math.floor(javaScriptDescription.length / 2)]);
console.log(javaScriptDescription);
