const area = document.getElementById("area");
const box = document.getElementById("box");
let width = area.clientWidth;
let height = area.clientHeight;
let moveLeft = 0;
let moveDown = 0;
let x = 0;
let y = 0;
function moveBox(e) {
    if (e.key == "ArrowRight") {
        x = moveLeft + box.clientWidth * 2;
        if (x < width) {
            moveLeft += box.clientWidth;
            box.style.left = moveLeft + "px";
        }

    } else if (e.key == "ArrowLeft") {
        x = moveLeft;
        if (x > 0) {
            moveLeft -= box.clientWidth;
            box.style.left = moveLeft + "px";
        }
    } else if (e.key == "ArrowDown") {
        y = moveDown + box.clientWidth * 2;
        if (y <= height) {
            moveDown += box.clientHeight;
            box.style.top = moveDown + "px";
        }
    } else if (e.key == "ArrowUp") {
        y = moveDown;
        if (y > 0) {
            moveDown -= box.clientHeight;
            box.style.top = moveDown + "px"
        }
    }
}

document.addEventListener("keydown", moveBox);