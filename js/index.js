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

    // Função para mostrar o pop-up de notificação
    function showPopupNotification(message) {
        const popup = document.getElementById('popupNotification');
        popup.textContent = message;
        popup.classList.remove('hide');
        popup.classList.add('show');

        setTimeout(() => {
            popup.classList.remove('show');
            popup.classList.add('hide');
        }, 3000);
    }

    // Função para abrir o diálogo de registro de ponto
    function openDialog() {
        const timeZone = document.getElementById('countrySelect').value;
        document.getElementById('dialogDate').textContent = getCurrentDate();
        document.getElementById('dialogTime').textContent = getCurrentHour(timeZone);
        document.getElementById('dialog').classList.remove('hide');
    }

    // Função para fechar o diálogo de registro de ponto
    function closeDialog() {
        document.getElementById('dialog').classList.add('hide');
    }

    // Adiciona o evento ao botão "Bater Ponto"
    document.getElementById('btnBaterPonto').addEventListener('click', openDialog);

    // Adiciona o evento ao botão "Salvar Ponto"
    document.getElementById('btnSalvarPonto').addEventListener('click', function () {
        const tipoPonto = document.getElementById('tipoPonto').value;
        showPopupNotification(`Ponto registrado: ${tipoPonto}`);
        closeDialog();
    });

    // Atualiza o dia da semana e a data
    document.getElementById('DiaSemana').textContent = getWeekDay();
    document.getElementById('DMA').textContent = getCurrentDate();

    // Atualiza a hora a cada segundo
    setInterval(atualizarHora, 1000);
});
