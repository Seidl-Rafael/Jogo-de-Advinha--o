let x = 0;
let vidas = 10;
let game = false;

function iniciar() {
    game = true;
    vidas = 10;
    document.getElementById("life").textContent = vidas;
    document.getElementById("chute").value = "";
    x = Math.floor(Math.random() * 100 + 1);
    document.getElementById("result").textContent = "Número gerado. Boa Sorte!"
}

function kick() {

    if (game === false) {
        return;
    }

    let number = parseInt(document.getElementById("chute").value);

    if (number > 100 || number < 1) {
        window.alert("Só serão aceitos números de 1 a 100.")
        return;
    }

    if (vidas === 0) {
        document.getElementById("result").textContent = "Suas vidas acabaram. O número era " + x;
        game = false;
    }

    while (vidas != 0) {

        if (number === x) {
            document.getElementById("result").textContent = "Parabéns, você venceu!";
            game = false;
            break;
        } else if (number < x) {
            document.getElementById("result").textContent = "O número secreto é maior que " + number;
            vidas = vidas - 1;
            document.getElementById("life").textContent = vidas;
            document.getElementById("chute").value = "";
            break;
        } else {
            document.getElementById("result").textContent = "O número secreto é menor que " + number;
            vidas = vidas - 1;
            document.getElementById("life").textContent = vidas;
            document.getElementById("chute").value = "";
            break;
        }

    }
}