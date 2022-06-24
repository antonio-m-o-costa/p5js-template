/* Canvas sizes I love to use:
 * 640x480 - (4:3)
 * 1280x720 - (16:9)
 */

function setup() {
    let canvas = createCanvas(640, 480);
    canvas.parent("sketch");
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(2);
    for (let i = 10; i < width - 9; i += 10) {
        for (let j = 10; j < height - 9; j += 10) {
            point(i, j);
        }
    }
}
