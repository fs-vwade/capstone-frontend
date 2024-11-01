//may need to add module here if we are to use ProgressBar but I'm writing code that does not require it, if we want to change it later, please let me know

const i = 0;
function move() {
    if (i == 0) {
        i = 1;
        const elem = document.getElementById("progessBar");
        const width = 1;
        const id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}