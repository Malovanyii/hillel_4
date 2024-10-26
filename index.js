// 4.1
let userName = prompt("Введіть ім'я користувача");

if (userName && userName.trim() !== '' && isNaN(userName)) {
    alert(`Hello, ${userName}! How are you?`);
}