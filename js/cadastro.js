document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    const nomeInput = document.getElementById('nome');
    const registroInput = document.getElementById('registro');
    const cpfInput = document.getElementById('cpf');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmar-senha');

    function validarNome(nome) {
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        return regex.test(nome);
    }

    function validarRegistro(registro) {
        const regex = /^\d{5}$/;
        return regex.test(registro);
    }

    function validarCPF(cpf) {
        const regex = /^\d{11}$/;
        return regex.test(cpf);
    }

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validarSenha(senha) {
        const regex = /^[A-Za-z0-9]+$/;
        return regex.test(senha);
    }

    function confirmarSenha(senha, confirmarSenha) {
        return senha === confirmarSenha;
    }

    function mostrarErro(input, mensagem) {
        const parent = input.parentElement;
        const erroMsg = document.createElement('small');
        erroMsg.classList.add('erro-msg');
        erroMsg.style.color = 'red';
        erroMsg.textContent = mensagem;
        parent.appendChild(erroMsg);
    }

    function limparErros() {
        const erros = document.querySelectorAll('.erro-msg');
        erros.forEach(erro => erro.remove());
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        limparErros();

        let valido = true;

        if (!validarNome(nomeInput.value)) {
            mostrarErro(nomeInput, "O nome deve conter apenas letras e acentos.");
            valido = false;
        }

        if (!validarRegistro(registroInput.value)) {
            mostrarErro(registroInput, "O registro da empresa deve conter exatamente 5 números.");
            valido = false;
        }

        if (!validarCPF(cpfInput.value)) {
            mostrarErro(cpfInput, "O CPF deve conter exatamente 11 números.");
            valido = false;
        }

        if (!validarEmail(emailInput.value)) {
            mostrarErro(emailInput, "O e-mail deve ser válido.");
            valido = false;
        }

        if (!validarSenha(senhaInput.value)) {
            mostrarErro(senhaInput, "A senha deve conter apenas letras e números.");
            valido = false;
        }

        if (!confirmarSenha(senhaInput.value, confirmarSenhaInput.value)) {
            mostrarErro(confirmarSenhaInput, "As senhas não coincidem.");
            valido = false;
        }

        if (valido) {
            form.submit(); // O redirecionamento só acontece após toda a validação
        }
    });
});
