const input = document.querySelector('.input');
const bg = document.querySelector('.bg');
const copyInput = document.querySelector('.copy-input');
const loginForm = document.querySelector('#login-form')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

const inputBox = document.querySelector('.input-box');

input.addEventListener('focus', function() {
    bg.style.transform = 'scale(1.8)';
    copyInput.style.transform = 'translateX(-50%) scale(1.8)';
});

input.addEventListener('blur', function() {
    bg.style.transform = 'scale(1)';
    copyInput.style.transform = 'translateX(-50%) scale(1)';
});

function updateBox() {
    copyInput.textContent = input.value;
}
input.addEventListener('input', updateBox);
