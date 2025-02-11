function calculateLove() {
    let name1 = document.getElementById("name1").value.replace(/\s+/g, '').trim();
    let name2 = document.getElementById("name2").value.replace(/\s+/g, '').trim();
    var Name1 = name1.toLowerCase();
    var Name2 = name2.toLowerCase();
    var a = Name1.length;
    var b = Name2.length;
    var c = a + b;
    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerText = "Please enter both names!";
        return;
    }
    if (c == 7) {
        document.getElementById("result").innerText = "Love Score: 66% ❤️";
    }
    else if (Name1 == "suresh") {
        document.getElementById("result").innerText = "Love Score: 100% ❤️";
    }
    else if (Name1 == "chithiraikkani") {
        document.getElementById("result").innerText = "Love Score: 99% ❤️";
    }
    else if (Name1 == "gunaseelan") {
        document.getElementById("result").innerText = "Love Score: 98% ❤️";
    }
    else if (Name1 == "adhithyan") {
        document.getElementById("result").innerText = "Love Score: 97% ❤️";
    }
    else if (Name1 == "abdulsarif") {
        document.getElementById("result").innerText = "Love Score: 100% ❤️";
    }
    else if (Name1 == "arun") {
        document.getElementById("result").innerText = "Love Score: 98% ❤️";
    }
    else if (Name1 == "balaji") {
        document.getElementById("result").innerText = "Love Score: 100% ❤️";
    }
    else if (c == 8) {
        document.getElementById("result").innerText = "Love Score: 47% ❤️";
    }
    else if (c == 9) {
        document.getElementById("result").innerText = "Love Score: 78% ❤️";
    }
    else if (c == 10) {
        document.getElementById("result").innerText = "Love Score: 34% ❤️";
    }
    else if (c == 11) {
        document.getElementById("result").innerText = "Love Score: 29% ❤️";
    }
    else if (c == 12) {
        document.getElementById("result").innerText = "Love Score: 90% ❤️💋";
    }
    else if (c == 13) {
        document.getElementById("result").innerText = "Love Score: 89% ❤️";
    }
    else if (c == 14) {
        document.getElementById("result").innerText = "Love Score:93% ❤️😊";
    }
    else if (c == 15) {
        document.getElementById("result").innerText = "Love Score: 69% ❤️";
    }
    else if (c == 16) {
        document.getElementById("result").innerText = "Love Score: 74% ❤️";
    }
    else if (c == 17) {
        document.getElementById("result").innerText = "Love Score: 100% ❤️";
    }
    else if (c == 18) {
        document.getElementById("result").innerText = "Love Score: 83% ❤️🌹";
    }
    else if (c == 19) {
        document.getElementById("result").innerText = "Love Score: 50% ❤️";
    }
    else if (c == 20) {
        document.getElementById("result").innerText = "Love Score: 41% ❤️";
    }
    else if (c == 21) {
        document.getElementById("result").innerText = "Love Score: 96% 💞💖";
    }
    else if (c == 22) {
        document.getElementById("result").innerText = "Love Score: 74% 💟";
    }
    else if (c == 23) {
        document.getElementById("result").innerText = "Love Score: 89% ❤️";
    }
    else if (c == 24) {
        document.getElementById("result").innerText = "Love Score: 21% 💝";
    }
    else if (c == 25) {
        document.getElementById("result").innerText = "Love Score: 76% ❤️";
    }
    else if (c == 26) {
        document.getElementById("result").innerText = "Love Score: 99% ❤️";
    }
    else if (c == 27) {
        document.getElementById("result").innerText = "Love Score: 89% ❤️";
    }
    else if (c == 28) {
        document.getElementById("result").innerText = "Love Score: 94% 💟";
    }
    else if (c == 29) {
        document.getElementById("result").innerText = "Love Score: 34% ❤️";
    }
    else if (c == 30) {
        document.getElementById("result").innerText = "Love Score: 47% ❤️";
    }
    else {
        document.getElementById("result").innerText = "You'are make for each other";
    }
}
// function valentine(){
//     document.getElementById("result").innerText = "Happy Valetine's Day 💖";
// }
// document.getElementById("heartbeatloader").addEventListener("click", valentine);