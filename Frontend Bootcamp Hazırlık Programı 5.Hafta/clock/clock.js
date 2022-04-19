let yourName = prompt("Adınız nedir?", "");
let result = yourName ? `${yourName}` : "isimsiz kullanıcı";

document.getElementById('name').innerHTML = `${result}`;

function addZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}

function currentTime() {
    const now = new Date();
    let hours = addZero(now.getHours());
    let minutes = addZero(now.getMinutes());
    let seconds = addZero(now.getSeconds());
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const dayOfWeek = days[now.getDay()];
    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
    document.getElementById('day').innerHTML = `${dayOfWeek}`;
    setTimeout(currentTime, 1000);
}

