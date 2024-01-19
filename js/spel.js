const Application = PIXI.Application;

const app = new Application({
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0x23395D
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle.beginFill(0xAA33BB)
.drawRect(200, 200, 100, 120)
.endFill();

app.stage.addChild(rectangle);

const circle = new Graphics();
circle.beginFill(0x000000)
.drawCircle(440,200, 80)
.endFill();

app.stage.addChild(circle);

const poly = new Graphics();
poly.beginFill(0xFF66FF)
.lineStyle(5, 0xFFFFFF, 1)
.drawPolygon([
    600, 50,
    800, 150,
    900, 300,
    400, 400
])
.endFill();

app.stage.addChild(poly);

const torus = new Graphics();
torus.beginFill(0xFFFDDD)
.drawTorus(100, 700, 80, 100, 0, Math.PI / 2)
.endFill();

app.stage.addChild(torus);

const star = new Graphics();
star.beginFill(0xADADAD)
.drawStar(900, 700, 30, 80)
.endFill();

app.stage.addChild(star);

