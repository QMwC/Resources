let back = document.createElement("button");
back.onclick = () => window.history.back();
back.innerText = "<-- Go back to course structure";
document.body.insertBefore(back, document.body.firstChild);
