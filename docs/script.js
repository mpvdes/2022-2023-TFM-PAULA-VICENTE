let btn = document.querySelector('button');
let txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
    if (btn.textContent === 'Iniciar máquina') {
        btn.textContent = 'Detener máquina';
        txt.textContent = 'La máquina se inició!';
    } else {
        btn.textContent = 'Iniciar máquina';
        txt.textContent = 'La máquina se detuvo.';
    }
}
