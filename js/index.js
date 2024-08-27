document.addEventListener("DOMContentLoaded", function () {
    // Função para obter o dia da semana
    function getWeekDay() {
        const date = new Date();
        const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        return days[date.getDay()];
    }

    // Função para obter a data atual
    function getCurrentDate() {
        const date = new Date();
        let day = date.getDate().toString().padStart(2, '0');
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    // Função para obter a hora atual no fuso horário selecionado
    function getCurrentHour(timeZone) {
        const date = new Date();
        const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        return new Intl.DateTimeFormat('pt-BR', options).format(date);
    }

    // Atualiza a exibição da hora
    function atualizarHora() {
        const timeZone = document.getElementById('countrySelect').value;
        document.getElementById('HMS').textContent = getCurrentHour(timeZone);
    }

    // Função para registrar o ponto
    function registrarPonto(tipo) {
        const timeZone = document.getElementById('countrySelect').value;
        const currentTime = getCurrentHour(timeZone);
        const country = document.getElementById('countrySelect').options[document.getElementById('countrySelect').selectedIndex].text;
        let registroTexto = `Ponto de ${tipo} registrado em ${country} às ${currentTime}`;
        let registroDiv = document.getElementById('registroPonto');
        registroDiv.innerHTML += `<p>${registroTexto}</p>`;
    }

    // Event listeners para os botões de entrada e saída
    document.getElementById('btnEntrada').addEventListener('click', function () {
        registrarPonto('Entrada');
    });

    document.getElementById('btnSaida').addEventListener('click', function () {
        registrarPonto('Saída');
    });

    // Inicializa a exibição da data e da hora
    document.getElementById('DiaSemana').textContent = getWeekDay();
    document.getElementById('DMA').textContent = getCurrentDate();
    atualizarHora();

    // Atualiza a hora a cada 1000 milissegundos (1 segundo)
    setInterval(atualizarHora, 1000);
});
