let back = document.createElement("button");
back.onclick = () => window.history.back();
back.innerText = "<-- Go back to course structure";
document.body.insertBefore(back, document.body.firstChild);
let msg = 0;
window.onmessage = (e) => {
  if (e.origin === "https://quantum.georgetown.domains") {
    if (msg) {
      window.parent.postMessage(document.body.parentElement.offsetHeight, "https://quantum.georgetown.domains");
      msg = 0;
    } else {
      window.parent.postMessage(document.body.parentElement.scrollHeight, "https://quantum.georgetown.domains");
      msg = 1;
    }
  }
}
