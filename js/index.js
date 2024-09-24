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

    // Função para obter a hora atual
    function getCurrentHour() {
        const date = new Date();
        return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    }

    // Atualiza a exibição da hora
    function atualizarHora() {
        document.getElementById('HMS').textContent = getCurrentHour();
    }

    // Função para mostrar o modal
    function openModal() {
        const modal = document.getElementById('modalPonto');
        modal.style.display = 'flex';
        document.getElementById('modalData').textContent = `Data: ${getCurrentDate()}`;
        document.getElementById('modalHora').textContent = `Hora: ${getCurrentHour()}`;
    }

    // Função para fechar o modal
    function closeModal() {
        document.getElementById('modalPonto').style.display = 'none';
    }

    // Função para mostrar o pop-up de notificação
    function showPopupNotification(message) {
        const popup = document.getElementById('popupNotification');
        popup.textContent = message;
        popup.classList.add('show');
        setTimeout(function () {
            popup.classList.remove('show');
        }, 3000);
    }

    // Função para salvar o ponto
    function savePonto() {
        const tipoPonto = document.getElementById('tipoPonto').value;
        showPopupNotification(`Ponto registrado: ${tipoPonto}`);
        closeModal();
        registrarPonto(tipoPonto); // Registra o ponto na lista
    }

    // Função para registrar o ponto
    function registrarPonto(tipo) {
        const currentTime = getCurrentHour();
        const currentDate = getCurrentDate();
        let registroTexto = `Ponto de ${tipo} registrado em ${currentDate} às ${currentTime}`;
        let registroDiv = document.getElementById('registroPonto');
        registroDiv.innerHTML += `<p>${registroTexto}</p>`;
    }

    // Eventos para abrir e fechar o modal e salvar o ponto
    document.getElementById('btnBaterPonto').addEventListener('click', openModal);
    document.getElementsByClassName('close')[0].addEventListener('click', closeModal);
    document.getElementById('btnSalvarPonto').addEventListener('click', savePonto);

    // Atualiza o dia da semana e a data
    document.getElementById('DiaSemana').textContent = getWeekDay();
    document.getElementById('DMA').textContent = getCurrentDate();

    // Atualiza a hora a cada segundo
    setInterval(atualizarHora, 1000);
});
