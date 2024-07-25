function turnOnRed() {
    clearLights();
    document.getElementById("stopLight").style.backgroundColor = "red";
}

function turnOnYellow() {
    clearLights();
    document.getElementById("readyLight").style.backgroundColor = "yellow";
}

function turnOnGreen() {
    clearLights();
    document.getElementById("goLight").style.backgroundColor = "green";
}

function clearLights() {
    document.getElementById("stopLight").style.backgroundColor = "#4b5069";
    document.getElementById("readyLight").style.backgroundColor = "#4b5069";
    document.getElementById("goLight").style.backgroundColor = "#4b5069";
}
