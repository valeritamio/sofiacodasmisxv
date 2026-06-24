const targetDate = new Date("August 22, 2026 21:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor(
        (distance % (1000*60*60*24))
        /(1000*60*60)
    );

    const minutes = Math.floor(
        (distance % (1000*60*60))
        /(1000*60)
    );

    const seconds = Math.floor(
        (distance % (1000*60))
        /1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

updateCountdown();

setInterval(updateCountdown,1000);

function enviarSugerencia(){
    const artista = document.getElementById('artista').value.trim();
    const cancion = document.getElementById('cancion').value.trim();

    if(!artista || !cancion){
        alert('Por favor completá el artista y la canción 🎵');
        return;
    }

    const mensaje = `Hola Gabriela! 🎶 Quiero sugerir una canción para la fiesta de Sofía: *${cancion}* de *${artista}*`;
    const url = `https://wa.me/5493624656373?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}