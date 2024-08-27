function getWeekDay() {
    const date = new Date();
    const days = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return days[date.getDay()]; // Corrigido de getDays() para getDay()
}

function getCurrentDate() {
    const date = new Date();
    let month = (1 + date.getMonth()).toString().padStart(2, '0'); // Adiciona zero à esquerda se necessário
    let day = date.getDate().toString().padStart(2, '0'); // Adiciona zero à esquerda se necessário

    return month + "/" + day + "/" + date.getFullYear();
}

function getCurrentHour(timeZone) {
    const date = new Date();
    const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
}

function atualizarHora() {
    const timeZone = document.getElementById('countrySelect').value;
    document.getElementById('HMS').textContent = getCurrentHour(timeZone);
}

// Atualiza a hora a cada 1000 milissegundos (1 segundo)
setInterval(atualizarHora, 1000);

document.getElementById('btnBaterPonto').addEventListener('click', function() {
    const timeZone = document.getElementById('countrySelect').value;
    const currentTime = getCurrentHour(timeZone);
    const country = document.getElementById('countrySelect').options[document.getElementById('countrySelect').selectedIndex].text;
    document.getElementById('registroPonto').innerHTML = `Ponto batido em ${country} às ${currentTime}`;
});

// Inicializa a exibição com a hora do país selecionado inicialmente
atualizarHora();
