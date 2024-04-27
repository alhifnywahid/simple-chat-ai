const input = document.querySelector("input.text");
const btnSend = document.querySelector("button.send");
const kotakLayar = document.querySelector("div.kotak-layar");


function checkInput() {
  if (input.value) {
    // btnSend.style.backgroundColor = "blue";
    btnSend.removeAttribute("disabled");
  } else {
    btnSend.setAttribute("disabled", "false");
  }
}

function noneBanner() {
  divBanner.style.display = "none";
}

function clickSend() {
  if (input.value.trim() === "") return

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

  const divChatBot = document.createElement("div");
  const h2ChatBot = document.createElement("h2");
  const rowBot = document.createElement("hr");
  const pChatBot = document.createElement("pre");
  const h2TeksBot = document.createTextNode("Miyu Bot");
  const newTeksBot = document.createTextNode("One More Than");

  divChatBot.classList.add("chat-bot");
  h2ChatBot.classList.add("bot");
  pChatBot.classList.add("chat", "skeleton");

  kotakLayar.appendChild(divChatBot);
  h2ChatBot.appendChild(h2TeksBot);
  pChatBot.appendChild(newTeksBot);
  divChatBot.appendChild(h2ChatBot);
  divChatBot.appendChild(rowBot);
  divChatBot.appendChild(pChatBot);

  async function rendering() {
    fetch(`https://dikaardnt.com/api/tool/openai?message=${input.value}`).then(
      async (response) => {
        if (!response.ok) return alert("jaringan eror");
        const json = await response.json();
        newTeksBot.textContent = json;
        pChatBot.classList.remove("skeleton");
        input.removeAttribute("disabled");
        btnSend.setAttribute("disabled", 'true');
      }
    );
  }
  rendering();

  input.value = "";
}
