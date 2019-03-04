let canvas = document.getElementById("game");
let cx = canvas.getContext("2d");

function getPiece () {

    let pieces = [
        [
            [0, 0, 0],
            [0, 1, 0],
            [1, 1, 1]
        ],
        [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 1]
        ],
        [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ],
        [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],
        [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        [
            [1, 1],
            [1, 1]
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]
        ],
    ];

    let piece = Math.floor(Math.random() * Math.floor(pieces.length));
    return pieces[piece];
}


function Piece() {
    this.x = 60;
    this.y = 0;
    this.cubeSize = 40;
    this.vx = 0;
    this.vy = this.cubeSize;
    this.matrix = getPiece();

    this.update = function () {
        this.x += this.vx;
        this.y += this.vy;
    };

    this.draw = function () {
        cx.fillStyle = "#fff";

        this.matrix.forEach(function (row, rId) {
            row.forEach(function (cube, cId) {
                if (cube) {
                    cx.fillRect(this.x + this.cubeSize * cId,
                                this.y + this.cubeSize * rId,
                                this.cubeSize, this.cubeSize);
                }
            }, this);
        }, this);
    };

    this.move = function (key) {
        if (key === 37) {
            this.x -= this.cubeSize;
        } else if (key === 39) {
            this.x += this.cubeSize;
        } else if (key === 40) {
            this.y += this.cubeSize;
        } else if (key === 88) {
            this.rotate();
        }
    };

    this.rotate = function () {
        // _.zip(...this.matrix);
    }
}

let last = 0;

function loop(now) {
    if (!last || now - last > 400) {
        last = now;
        cube.update();
    }

    draw();
    window.requestAnimationFrame(loop);
}

function draw() {
    cx.fillStyle = "#000";
    cx.fillRect(0, 0, canvas.width, canvas.height);

    cube.draw();
}

window.addEventListener("keydown", event => {
    cube.move(event.keyCode);
});

let cube = new Piece();
loop();