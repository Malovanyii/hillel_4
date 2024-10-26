// 4.1
// let userName = prompt("Введіть ім'я користувача");

// if (userName && userName.trim() !== '' && isNaN(userName)) {
//     alert(`Hello, ${userName}! How are you?`);
// }

//4.2
// function checkDigits(number) {
//     const numberToString = number.toString();
//     const digit1 = numberToString[0];
//     const digit2 = numberToString[1];
//     const digit3 = numberToString[2];

//     console.log("Всі цифри однакові:", digit1 === digit2 && digit2 === digit3);

//     console.log("Є однакові цифри:", (digit1 === digit2 || digit1 === digit3 || digit2 === digit3),);
// }

// const inputNum = prompt("Введіть тризначне число:");
// checkDigits(Number(inputNum));

//4.3
// function UserInfo() {
//     const yearOfBirth = prompt('Введіть рік вашого народження');
//     const city = prompt('Введіть місто в якому ви проживаєте');
//     const sport = prompt('Введіть ваш улюблений вид спорту');

//     if (yearOfBirth === null || city === null || sport === null) {
//         const cancel = [];
//         if (yearOfBirth == null) cancel.push('дату народження');
//         if (city == null) cancel.push('місто проживання');
//         if (sport == null) cancel.push('улюблений вид спорту');
//         alert(`Шкода, що Ви не захотіли ввести ${cancel}`);
//         return null;
//     }
//     return { yearOfBirth, city, sport };
// }

// function CurrentAge(yearOfBirth) {
//     const currentYear = 2024;
//     return currentYear - yearOfBirth;
// }

// function Capital(city) {
//     const capitals = {
//         київ: 'України',
//         вашингтон: 'США',
//         лондон: 'Великобританії',
//     };
//     return capitals[city];
// }

// function Sports(sport) {
//     const champions = {
//         футбол: 'Поль Погба',
//         бокс: 'Олександр Усик',
//         баскетбол: 'Стефен Каррі'
//     }
//     return champions[sport];
// }

// function GetUserInfo() {
//     const User = UserInfo();
//     const { yearOfBirth, city, sport } = User;
//     const country = Capital(city);
//     const age = CurrentAge(yearOfBirth);

//     let cityInfo = `Ти живеш у місті ${city}`;
//     if (country) {
//         cityInfo = `Ти живеш у столиці ${country}`;
//     }

//     let sportInfo = `Улюблений вид спорту: ${sport}.`;
//     const favouriteChampion = Sports(sport);
//     if (favouriteChampion) {
//         sportInfo = `Круто! Хочеш стати як ${favouriteChampion} ?`
//     }

//     alert(`Твій вік ${age}, ${cityInfo}, ${sportInfo}`);
// }

// GetUserInfo();

//4.4
let numOrStr = prompt('input number or string');
console.log(numOrStr)

// if (numOrStr === null) {
//     console.log('ви скасували')
// } else if (numOrStr.trim() === '') {
//     console.log('Empty String');
// } else if (isNaN(+numOrStr)) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }

switch (true) {
    case numOrStr === null:
        console.log('ви скасували')
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!')
}