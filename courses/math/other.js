let back = document.createElement("button");
back.onclick = () => window.history.back();
back.innerText = "<-- Go back to course structure";
document.body.insertBefore(back, document.body.firstChild);
window.onmessage = (e) => {
  if (e.origin === "https://quantum.georgetown.domains") {
    window.parent.postMessage(document.body.parentElement.scrollHeight, "https://quantum.georgetown.domains");
  }
}
