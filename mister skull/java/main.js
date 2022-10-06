var canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var ctx = canvas.getContext("2d")

var cave = new Image()
cave.src = "./cave.png"


function fundo() {

    ctx.fillStyle = "gray"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

}

var player = {

    x: canvas.width / 2,
    y: canvas.height / 2,
    largura: 400,
    altura: 400,
    desenhar: function () {

        ctx.drawImage(cave, this.x, this.y, this.largura, this.altura)

    }

}

var tecla = "nenhuma"

window.addEventListener("keydown", (evento) => {

    tecla = evento.key

})

var tecla="nenhuma"

function loop() {

    fundo()
    fillStyle = "white"
    ctx.font = "30px arial"
    ctx.fillText("tecla: " + tecla , 100 , 50)

    switch (tecla) {
        case "a":

            player.x -= 100
            tecla=""

            break;
        case "d":

            player.x += 100
            tecla=""

            break;
        case "w":

            player.y -= 100
            tecla=""

            break;
        case "s":

            player.y += 100
            tecla=""

            break;
    }

    player.desenhar()

    setTimeout(() => {loop()} , 1000 / 60)

}

setTimeout(() => {loop()} , 1000 / 60)



