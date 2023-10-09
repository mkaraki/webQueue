let waitTime = [null, 5, 5, 5, 5];

function upd(i, v) {
    const iE = document.getElementById(`counter${i}`);
    const itE = document.getElementById(`counter${i}t`);
    const now = parseInt(iE.innerText);
    iE.innerText = v;
    itE.innerText = v * waitTime[i];
}

function dec(i) {
    const iE = document.getElementById(`counter${i}`);
    const now = parseInt(iE.innerText);
    upd(i, now - 1);
}

function inc(i) {
    const iE = document.getElementById(`counter${i}`);
    const now = parseInt(iE.innerText);
    upd(i, now + 1);
}

function setTitle(i) {
    const title = document.getElementById(`title${i}`);
    const now = title.innerText;
    title.innerText = prompt("New title", now);
}

function setWaitTime(i) {
    const now = waitTime[i];
    waitTime[i] = parseInt(prompt("New wait time (min)", now));
}