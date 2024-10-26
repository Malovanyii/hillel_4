// 4.1
// let userName = prompt("Введіть ім'я користувача");

// if (userName && userName.trim() !== '' && isNaN(userName)) {
//     alert(`Hello, ${userName}! How are you?`);
// }

//4.2
function checkDigits(number) {
    const numberToString = number.toString();
    const digit1 = numberToString[0];
    const digit2 = numberToString[1];
    const digit3 = numberToString[2];

    console.log("Всі цифри однакові:", digit1 === digit2 && digit2 === digit3);

    console.log("Є однакові цифри:", (digit1 === digit2 || digit1 === digit3 || digit2 === digit3),);
}

const inputNum = prompt("Введіть тризначне число:");
checkDigits(Number(inputNum));