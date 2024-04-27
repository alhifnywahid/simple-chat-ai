const input = document.querySelector("input.text");
const btnSend = document.querySelector("button.send");
const kotakLayar = document.querySelector("div.kotak-layar");
const bannerInput = document.querySelector(".banner input");
const bannerButton = document.querySelector(".banner button");
const containerBanner = document.querySelector(".container-banner");



const divChatBot = document.createElement("div");
const h2ChatBot = document.createElement("h2");
const rowBot = document.createElement("hr");
const pChatBot = document.createElement("pre");
const h2TeksBot = document.createTextNode("Miyu Bot");

divChatBot.classList.add("chat-bot");
h2ChatBot.classList.add("bot");
// pChatBot.classList.add("chat", "skeleton");


function checkName() {
  if (!bannerInput.value) return alert("Masukkan nama lah bro bro.");
  containerBanner.style.display = 'none';

  const newTeksBot = document.createTextNode(`Halo ${bannerInput.value}, saya chat ai yang siap menjawab semua pertanyaan anda!`);
  kotakLayar.appendChild(divChatBot);
  h2ChatBot.appendChild(h2TeksBot);
  pChatBot.appendChild(newTeksBot);
  divChatBot.appendChild(h2ChatBot);
  divChatBot.appendChild(rowBot);
  divChatBot.appendChild(pChatBot);
}

function checkInput() {
  if (input.value) {
    // btnSend.style.backgroundColor = "blue";
    btnSend.removeAttribute("disabled");
  } else {
    btnSend.setAttribute("disabled", "false");
  }
  // kotakLayar.scrollTop = kotakLayar.scrollHeight;
}

function noneBanner() {
  divBanner.style.display = "none";
}

function clickSend() {
  if (input.value.trim() === "") return;

  input.setAttribute("disabled", "true");

  const divChatUser = document.createElement("div");
  const h2ChatUser = document.createElement("h2");
  const rowUser = document.createElement("hr");
  const pChatUser = document.createElement("p");
  const h2Teks = document.createTextNode("User");
  const newTeksUser = document.createTextNode(input.value);

  divChatUser.classList.add("chat-user");
  h2ChatUser.classList.add("user");
  pChatUser.classList.add("chat");

  h2ChatUser.appendChild(h2Teks);
  pChatUser.appendChild(newTeksUser);
  kotakLayar.appendChild(divChatUser);
  divChatUser.appendChild(h2ChatUser);
  divChatUser.appendChild(rowUser);
  divChatUser.appendChild(pChatUser);

  const divChatBot2 = document.createElement("div");
  const h2ChatBot2 = document.createElement("h2");
  const rowBot2 = document.createElement("hr");
  const pChatBot2 = document.createElement("pre");
  const h2TeksBot2 = document.createTextNode("Miyu Bot");
  const newTeksBot2 = document.createTextNode("One More Than");

  divChatBot2.classList.add("chat-bot");
  h2ChatBot2.classList.add("bot");
  pChatBot2.classList.add("chat", "skeleton");

  kotakLayar.appendChild(divChatBot2);
  h2ChatBot2.appendChild(h2TeksBot2);
  pChatBot2.appendChild(newTeksBot2);
  divChatBot2.appendChild(h2ChatBot2);
  divChatBot2.appendChild(rowBot2);
  divChatBot2.appendChild(pChatBot2);

  kotakLayar.scrollTop = kotakLayar.scrollHeight;

  async function rendering() {
    fetch(`https://dikaardnt.com/api/tool/openai?message=${input.value}`).then(
      async (response) => {
        if (!response.ok) return alert("jaringan eror");
        const json = await response.json();
        newTeksBot2.textContent = json;
        pChatBot2.classList.remove("skeleton");
        input.removeAttribute("disabled");
        btnSend.setAttribute("disabled", "true");
        kotakLayar.scrollTop = kotakLayar.scrollHeight;
      }
    );
  }
  rendering();

  input.value = "";
}
