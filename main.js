const input = document.querySelector("input.text");
const btnSend = document.querySelector("button.send");
const kotakLayar = document.querySelector("div.kotak-layar");
const divBanner = document.querySelector("div.container-banner");

btnSend.style.bakcgroundColor = "red";

function checkInput() {
  if (input.value.trim() !== "") {
    button.removeAttribute("disabled");
    btnSend.style.backgroundColor = 'blue';
  } else {
    button.setAttribute("disabled", "true");
  }
}

function noneBanner(){
  divBanner.style.display = 'none'
}

function clickSend() {
  if (input.value.trim() === "") return divBanner.style.display = 'flex';

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

  async function rendering() {
    fetch(
      `https://aemt.me/openai?text=halo nama saya dani saya ingin bertanya, ${input.value}`
    ).then(async (response) => {
      if (!response.ok) return alert("jaringan eror");
      const a = await response.json();

      const divChatBot = document.createElement("div");
      const h2ChatBot = document.createElement("h2");
      const rowBot = document.createElement("hr");
      const pChatBot = document.createElement("p");
      const h2TeksBot = document.createTextNode("Miyu Bot");
      const newTeksBot = document.createTextNode(a.result);

      divChatBot.classList.add("chat-bot");
      h2ChatBot.classList.add("bot");
      pChatBot.classList.add("chat");

      kotakLayar.appendChild(divChatBot);
      h2ChatBot.appendChild(h2TeksBot);
      pChatBot.appendChild(newTeksBot);
      divChatBot.appendChild(h2ChatBot);
      divChatBot.appendChild(rowBot);
      divChatBot.appendChild(pChatBot);

      kotakLayar.appendChild(divChatBot);
    });
  }
  rendering();

  input.value = "";
}
