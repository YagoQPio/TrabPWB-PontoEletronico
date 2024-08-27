document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os elementos do formulário
    const form = document.querySelector('form');
    const nomeInput = document.getElementById('nome');
    const registroInput = document.getElementById('registro');
    const senhaInput = document.getElementById('senha');

    // Função para validar o nome
    function validarNome(nome) {
        const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Regex para permitir letras, acentos e espaços
        return regex.test(nome);
    }

    // Função para validar o registro da empresa
    function validarRegistro(registro) {
        const regex = /^\d{5}$/; // Regex para exatamente 5 dígitos numéricos
        return regex.test(registro);
    }

    // Função para validar a senha
    function validarSenha(senha) {
        const regex = /^[A-Za-z0-9]+$/; // Regex para permitir apenas letras e números
        return regex.test(senha);
    }

    // Função para mostrar mensagens de erro
    function mostrarErro(input, mensagem) {
        const parent = input.parentElement;
        const erroMsg = document.createElement('small');
        erroMsg.classList.add('erro-msg');
        erroMsg.style.color = 'red';
        erroMsg.textContent = mensagem;
        parent.appendChild(erroMsg);
    }

    // Função para limpar mensagens de erro
    function limparErros() {
        const erros = document.querySelectorAll('.erro-msg');
        erros.forEach(erro => erro.remove());
    }

    // Adiciona um evento de envio ao formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        limparErros(); // Limpa os erros anteriores

        let valido = true; // Variável para controle de validação

        // Validação do nome
        if (!validarNome(nomeInput.value)) {
            mostrarErro(nomeInput, "O nome deve conter apenas letras e acentos.");
            valido = false;
        }

        // Validação do registro da empresa
        if (!validarRegistro(registroInput.value)) {
            mostrarErro(registroInput, "O registro da empresa deve conter exatamente 5 números.");
            valido = false;
        }

        // Validação da senha
        if (!validarSenha(senhaInput.value)) {
            mostrarErro(senhaInput, "A senha deve conter apenas letras e números.");
            valido = false;
        }

        // Se todos os campos forem válidos, redireciona para a página "index.html"
        if (valido) {
            window.location.href = "index.html";
        }
    });
});
