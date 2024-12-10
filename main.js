const form = document.getElementById('form-calcular');

function validaForm(numero1, numero2) {
    if (numero2 > numero1) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('campo-a');
    const numeroB = document.getElementById('campo-b');
    const mensagemInsucesso = `O número B: ${numeroB.value} não é maior que o número A: ${numeroA.value}`;
    
    formValido = validaForm(Number(numeroA.value), Number(numeroB.value));
    if (!formValido) {
        alert(mensagemInsucesso)
    } else {
        alert("Formulário submetido com sucesso")

        numeroA.value = ' ';
        numeroB.value = ' ';
    }

})

console.log(form);