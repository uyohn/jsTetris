// Original Cube Code

function Cube () {
    this.x = 40;
    this.y = 0;
    this.size = 40;
    this.vx = 0;
    this.vy = this.size;

    this.update = function () {
        this.x += this.vx;
        this.y += this.vy;
    };

    this.draw = function () {
        cx.fillStyle = "#fff";
        cx.fillRect(this.x, this.y, this.size, this.size);
    };

    this.move = function (key) {
        if (key === 37) {
            this.x -= this.size;
        } else if (key === 39) {
            this.x += this.size;
        } else if (key === 40) {
            this.y += this.size;
        }
    };
}