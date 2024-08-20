// .input이 포커스되면 .box의 background가 1.2배 확대
document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.input');
    const bg = document.querySelector('.bg');
    const copyInput = document.querySelector('.copy-input');

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

});
