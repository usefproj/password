function getPassword(length) {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";
  const array = new Uint32Array(length);
  window.crypto.getRandomValues(array);
  for (let i = 0; i < length; i++) {
    password += chars[array[i] % chars.length]; // % operator returns remainder of division
  }
  return password;
}
pass = document.querySelector("#ps");
password = document.querySelector("#password")
copy = document.querySelector("#copy")
passContainer = document.querySelector("#password-container")
clipB = document.querySelector(".fa-clipboard")
function setPassword() {
    pass.innerText = getPassword(8);
    pass.classList.add("absolute", "show")
    password.classList.add("absolute","color")
    copy.classList.add("absolute")
    clipB.classList.add("add-size")
    passContainer.classList.add("add-padding")
    console.log(copy);
}
function copyToDevice() {
    navigator.clipboard.writeText(pass.innerText);
}
function tooltipAppear() {
  var tooltip = document.getElementById("myTooltip");
  if (pass.innerText != "") {
    tooltip.innerHTML = "Copied: " + pass.innerText;
  }
  
}
function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}