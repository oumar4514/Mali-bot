const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const p = document.createElement("p");
  p.textContent = text;

  bubble.appendChild(p);
  message.appendChild(bubble);
  chatMessages.appendChild(message);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addLoadingMessage() {
  const message = document.createElement("div");
  message.className = "message bot";
  message.id = "loadingMessage";

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const loader = document.createElement("div");
  loader.className = "loading";
  loader.innerHTML = "<span></span><span></span><span></span>";

  bubble.appendChild(loader);
  message.appendChild(bubble);
  chatMessages.appendChild(message);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeLoadingMessage() {
  const loading = document.getElementById("loadingMessage");
  if (loading) loading.remove();
}

function getBotReply(input) {
  const text = input.trim().toLowerCase();

  if (!text) return "Je n’ai rien reçu 😅";

  const keywordMap = [
    { keys: ["bonjour", "salut", "bonsoir"], value: "Salut ! Ravi de te voir 😊" },
    { keys: ["merci", "thanks"], value: "Avec plaisir ! 😊" },
    { keys: ["comment ca va", "ça va"], value: "Je vais très bien, merci de demander ! 🚀" },
    { keys: ["aide", "help"], value: "Je peux t’aider à répondre à tes questions. Pose-moi ce que tu veux savoir." },
    { keys: ["mali", "bot"], value: "Oui, je suis Mali-bot, ton assistant IA." },
    { keys: ["quel age as tu", "age"], value: "Je suis un assistant IA, donc je n’ai pas d’âge exact 😉" },
    { keys: ["qui es tu"], value: "Je suis Mali-bot, un assistant IA conçu pour répondre à tes questions." }
  ];

  for (const item of keywordMap) {
    if (item.keys.some((k) => text.includes(k))) {
      return item.value;
    }
  }

  return `J’ai bien reçu ta question : "${input}"\n\nC’est une version démo pour le moment, mais bientôt je serai relié à une vraie IA qui répondra à toutes tes questions.`;
}

function sendMessage() {
  const input = messageInput.value.trim();
  if (!input) return;

  addMessage(input, "user");
  messageInput.value = "";
  messageInput.focus();

  sendBtn.disabled = true;
  sendBtn.textContent = "…";

  addLoadingMessage();

  setTimeout(() => {
    removeLoadingMessage();
    const reply = getBotReply(input);
    addMessage(reply, "bot");
    sendBtn.disabled = false;
    sendBtn.textContent = "Envoyer";
  }, 900);
}

function clearChat() {
  chatMessages.innerHTML = "";
  addMessage("Salut ! 👋 Je suis Mali-bot. Pose-moi n’importe quelle question.", "bot");
}

async function copyChat() {
  const texts = [...document.querySelectorAll(".bubble p")].map((p) => p.textContent).join("\n\n");
  if (!texts.trim()) return;

  try {
    await navigator.clipboard.writeText(texts);
    const original = copyBtn.textContent;
    copyBtn.textContent = "Copié !";
    setTimeout(() => {
      copyBtn.textContent = original;
    }, 1200);
  } catch (err) {
    console.error("Impossible de copier :", err);
    alert("Copie impossible dans ce navigateur.");
  }
}

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

clearBtn.addEventListener("click", clearChat);
copyBtn.addEventListener("click", copyChat);

messageInput.focus();