document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('form-deposit');
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    const mensagemPositiva = document.getElementById('mensagem-positiva');
    const mensagemNegativa = document.getElementById('mensagem-negativa');
    const botaoEnviar = document.getElementById('Botao');

    botaoEnviar.addEventListener('click', function () {
        const valorNumero1 = parseFloat(numero1.value);
        const valorNumero2 = parseFloat(numero2.value);

        if (valorNumero2 > valorNumero1) {
            mensagemPositiva.innerHTML = 'Formulário válido: Número 2 é maior que o número 1.';
            mensagemNegativa.innerHTML = ''; // Limpa a mensagem negativa
            alert('Número 2 é maior que o número 1.');
        } else {
            mensagemNegativa.innerHTML = 'Formulário inválido: Número 2 deve ser maior que o número 1.';
            mensagemPositiva.innerHTML = ''; // Limpa a mensagem positiva
            alert('Número 2 não é maior que o número 1.');
        }
    });
});
