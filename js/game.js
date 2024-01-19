function gameLoop() {
    player.update();
    coin.update();
    monsters.forEach(c => {
        c.update();
    });
}

let w = 512, h=512;
let app = new PIXI.Application({width: w, height: h, antialias:true});
let monsters = [];
let pressed = {};
let player;
let coin;
let coins;

app.renderer.backgroundColor = 0x456268;
document.querySelector("div#canvas").appendChild(app.view);
setInterval(gameLoop, 1000/60);