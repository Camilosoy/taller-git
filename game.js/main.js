
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let Numintentos = 0;

document.getElementById("BotonIniciar").addEventListener("click", function() {
    let NumeroAdivinar = parseInt(document.getElementById("NumeroAdivinar").value);
    let Pista = document.getElementById("Pista");
    let Contador = document.getElementById("Contador");

    if (isNaN(NumeroAdivinar) || NumeroAdivinar < 1 || NumeroAdivinar > 100) {
        Pista.textContent = "Por favor ingresa un número válido entre 1 y 100.";
        return;
    }

    Numintentos++;

    if (NumeroAdivinar === numeroSecreto) {
        Pista.textContent = ` ¡Felicidades! Adivinaste el número en ${Numintentos} intentos.`;
        Pista.style.backgroundColor = "white";
        Pista.style.color = "green";
    } else {
        let diferencia = Math.abs(NumeroAdivinar - numeroSecreto);
        Pista.style.backgroundColor = "white";
        if (diferencia <= 5) {
            Pista.textContent = "🔥 ¡Caliente!";
            Pista.style.color = "red";
        } else {
            Pista.textContent = "❄️ Frío...";
            Pista.style.color = "blue";
        }
    }

    Contador.textContent = `Intentos: ${Numintentos}`;

    if (Numintentos >= 5) {
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        Numintentos = 0;
        Contador.textContent = `Intentos: ${Numintentos}`;
        Pista.textContent = "🔄 Se ha generado un nuevo número. ¡Sigue jugando!";
        Pista.style.backgroundColor = "white";
        Pista.style.color = "black";
    }
});
