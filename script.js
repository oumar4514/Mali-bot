const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");

const responses = {
  "bonjour": "Salut ! Je suis le bot de Oumar. Comment puis-je t’aider ? 👋",
  "bonsoir": "Bonsoir ! Je suis le bot de Oumar, ravi de te parler 😊",
  "salut": "Salut ! Comment ça va ? 👋",
  "coucou": "Coucou ! Quoi de neuf ? 😄",
  "hello": "Hello ! Je suis le bot de Oumar, à ton service 🤖",
  "hi": "Hi ! Comment puis-je t’aider ? 😊",
  "yo": "Yo ! Quoi de neuf ? 🚀",
  "comment ca va": "Je vais très bien, merci de demander ! Et toi ? 😊",
  "comment vas tu": "Je vais très bien, merci ! Je suis prêt à t’aider 💪",
  "ca va": "Oui, ça va très bien ! Et toi ? 👍",
  "merci": "Avec plaisir ! Je suis là pour t’aider 🙌",
  "merci beaucoup": "De rien ! C’est un plaisir 😊",
  "thanks": "You’re welcome! Happy to help 😊",
  "aide": "Bien sûr ! Dis-moi ce que tu veux savoir 💪",
  "aide moi": "Oui, je peux t’aider ! Explique-moi ton besoin 🤝",
  "qui es tu": "Je suis le bot de Oumar, ton assistant IA 🤖",
  "quel est ton nom": "Je suis le bot de Oumar !",
  "comment tu t'appelles": "Je m'appelle le bot de Oumar 🤖",
  "bot de oumar": "Oui, je suis le bot de Oumar ! Comment puis-je t’aider ?",
  "oumar": "Oumar m’a créé pour être ton assistant IA 🤖",
  "quoi": "Quoi quoi ? Explique-moi un peu plus 😄",
  "pourquoi": "Bonne question ! Je peux t’aider à comprendre 🤔",
  "comment": "Comment ? Donne-moi un peu plus de détails 🙌",
  "ou": "Où ça exactement ? 🗺️",
  "quand": "Quand ça ? 🕒",
  "combien": "Combien ? Je peux t’aider à calculer ou à comprendre 💡",
  "mali": "Le Mali est un beau pays 🇲🇱",
  "bamako": "Bamako est la capitale du Mali 🇲🇱",
  "france": "La France est un beau pays d’Europe 🇫🇷",
  "paris": "Paris est la capitale de la France 🗼",
  "informatique": "L’informatique c’est génial ! Tu veux apprendre le code ? 💻",
  "programmation": "La programmation c’est super ! Tu veux apprendre Python, JavaScript ou autre ? 🧠",
  "python": "Python est très puissant et facile à apprendre 🐍",
  "javascript": "JavaScript est excellent pour le web 💛",
  "html": "HTML sert à structurer une page web 🌐",
  "css": "CSS sert à styliser la page web 🎨",
  "react": "React est un framework très utilisé pour les interfaces ⚛️",
  "node": "Node.js permet de créer des serveurs JavaScript 🟢",
  "api": "Une API permet à deux applications de communiquer entre elles 🔗",
  "code": "Le code c’est la façon de donner des instructions à un ordinateur 💻",
  "ordinateur": "L’ordinateur est un outil essentiel pour travailler et créer 💻",
  "telephone": "Le téléphone est très utile pour accéder à Internet 📱",
  "internet": "Internet relie des millions d’ordinateurs dans le monde 🌍",
  "web": "Le web est l’univers des sites et applications 🌐",
  "sport": "Le sport est important pour la santé 💪",
  "football": "Le football est très populaire ⚽",
  "basket": "Le basket est rapide et dynamique 🏀",
  "tennis": "Le tennis est un sport très technique 🎾",
  "natation": "La natation est excellente pour la santé 🏊",
  "musique": "La musique est magnifique 🎵",
  "film": "Les films sont passionnants 🎬",
  "serie": "Les séries sont très addictives 📺",
  "livre": "La lecture ouvre l’esprit 📚",
  "lecture": "La lecture est très enrichissante 📚",
  "chat": "Les chats sont adorables 🐱",
  "chien": "Les chiens sont très loyaux 🐕",
  "animal": "J’aime tous les animaux 🐾",
  "cuisine": "La cuisine est une vraie forme d’art 👨‍🍳",
  "pizza": "La pizza est délicieuse 🍕",
  "burger": "Le burger c’est classique et bon 🍔",
  "chocolat": "Le chocolat est trop bon 🍫",
  "glace": "La glace est parfaite en été 🍦",
  "cafe": "Le café donne de l’énergie ☕",
  "the": "Le thé est très agréable 🍵",
  "printemps": "Le printemps apporte de la couleur 🌸",
  "ete": "L’été est très agréable ☀️",
  "automne": "L’automne est magnifique avec ses couleurs 🍂",
  "hiver": "L’hiver est froid mais très beau ❄️",
  "voyage": "Les voyages sont super enrichissants ✈️",
  "vacances": "Les vacances c’est le repos et le bonheur 🏖️",
  "rêve": "Les rêves sont importants 💭",
  "objectif": "Les objectifs te motivent à avancer 🎯",
  "ambition": "L’ambition c’est très bien quand elle est positive 🚀",
  "sante": "La santé est très importante 💪",
  "stress": "Respire profondément, ça va aller 🧘",
  "fatigue": "Repose-toi un peu, le repos est important 😴",
  "triste": "Je suis là pour toi 💙",
  "heureux": "C’est super ! Continue comme ça 😊",
  "amour": "L’amour c’est beau 💕",
  "amis": "Les amis c’est important 🤝",
  "famille": "La famille compte beaucoup 👨‍👩‍👧‍👦",
  "blague": "Pourquoi les plongeurs plongent-ils en arrière ? Parce que sinon ils tombent dans le bateau 😄",
  "raconte une blague": "Quel est le comble pour un électricien ? De ne pas être au courant ⚡",
  "super": "Super ! C’est génial 🚀",
  "genial": "Génial ! Tu as bon goût 😄",
  "cool": "Cool ! On avance bien 😎",
  "excellent": "Excellent ! C’est parfait 👍",
  "parfait": "Parfait ! Continue comme ça 👏",
  "merci pour ton aide": "C’est normal, c’est mon job 😊",
  "je veux apprendre": "Super ! Dis-moi le sujet que tu veux apprendre 📚",
  "enseigne moi": "Bien sûr ! Quelle matière ou sujet tu veux apprendre ? 📖",
  "je suis fatigué": "Prends du repos, va te reposer un peu 😴",
  "je suis triste": "Je suis là pour toi, tu n’es pas seul 💙",
  "je suis stressé": "Respire profondément et calme-toi 🧘",
  "je suis heureux": "C’est très bien ! Continue sur cette énergie 😊",
  "je veux voyager": "Très bonne idée ! Où aimerais-tu aller ? ✈️",
  "je veux travailler": "Très bien ! Quel domaine t’intéresse ? 💼",
  "je veux créer": "Excellent ! Tu peux créer un site, une app, un bot ou autre 🚀",
  "je veux un site": "Tu peux faire un site web moderne avec HTML, CSS et JavaScript 🌐",
  "je veux une application": "Tu peux développer une app mobile avec Flutter ou React Native 📱",
  "je veux un bot": "Tu peux créer un chatbot avec du JavaScript ou un backend IA 🤖",
  "je veux une ia": "Tu peux créer une IA avec Python, OpenAI, Hugging Face ou Ollama 🤖",
  "je veux gagner de l'argent": "Tu peux commencer par vendre un service, un site web ou une app 💰",
  "je veux devenir riche": "Il faut commencer par apprendre, créer, vendre et rester régulier 🚀",
  "je veux devenir développeur": "C’est une très bonne idée ! Commence par HTML, CSS, JavaScript 💻",
  "bitcoin": "Le bitcoin est une crypto-monnaie très connue ₿",
  "crypto": "Les cryptomonnaies peuvent être intéressantes, mais il faut être prudent 💰",
  "argent": "L’argent suit souvent le travail, la valeur et la demande 💸",
  "emploi": "Un bon emploi se construit avec des compétences et de la régularité 💼",
  "business": "Le business demande de la stratégie et de l’action 🚀",
  "marketing": "Le marketing aide à vendre et à attirer les clients 📣",
  "design": "Le design rend les produits plus beaux et plus utiles 🎨",
  "ui": "UI = interface utilisateur, c’est l’apparence de l’application 🎨",
  "ux": "UX = expérience utilisateur, c’est le confort d’utilisation 🧠",
  "ai": "L’IA est très forte pour répondre, créer et aider 🤖",
  "machine learning": "Le machine learning aide les machines à apprendre à partir de données 🧠",
  "deep learning": "Le deep learning est une branche avancée de l’IA 🔬",
  "openai": "OpenAI est très connu pour les modèles de langage 🤖",
  "hugging face": "Hugging Face est une plateforme très utile pour les modèles IA 🤗",
  "ollama": "Ollama permet d’exécuter des modèles IA localement sur son PC 🧠",
  "chatgpt": "ChatGPT aide beaucoup pour les réponses et la création 💡",
  "copilot": "GitHub Copilot aide à écrire du code plus vite 🚀",
  "github": "GitHub est excellent pour stocker et gérer du code 🧑‍💻",
  "git": "Git permet de gérer les versions du code 🧩",
  "linux": "Linux est très utilisé pour les serveurs et le développement 🐧",
  "windows": "Windows est très pratique pour beaucoup de gens 🪟",
  "mac": "Mac est apprécié pour son design et son écologie 🍏",
  "android": "Android est utilisé sur beaucoup de téléphones 📱",
  "ios": "iOS est très utilisé sur les iPhones 🍎",
  "manga": "Les mangas sont cool ! Tu en lis ? 📖",
  "anime": "Les animes sont très populaires ! Tu en regardes ? 🎌",
  "football": "Le football est le sport le plus populaire ⚽",
  "basketball": "Le basketball est très dynamique 🏀",
  "voiture": "Les voitures sont très utiles pour voyager 🚗",
  "moto": "Les motos sont rapides et cool 🏍️",
  "avion": "Les avions permettent de voyager vite ✈️",
  "train": "Le train est confortable et écologique 🚆",
  "mer": "La mer est belle et apaisante 🌊",
  "montagne": "La montagne c’est beau et reposant ⛰️",
  "plage": "La plage est excellente pour se détendre 🏖️",
  "arbre": "Les arbres donnent de l’oxygène 🌳",
  "fleur": "Les fleurs sont très belles 🌼",
  "nature": "La nature est essentielle pour la vie 🌍",
  "photo": "La photo c’est une façon de capturer des souvenirs 📷",
  "camera": "La caméra sert à prendre des photos et des vidéos 📸",
  "robot": "Les robots sont fascinants 🤖",
  "science": "La science est incroyable 🔬",
  "astronomie": "L’astronomie est fascinante 🌌",
  "espace": "L’espace est immense et mystérieux 🚀",
  "lune": "La lune est belle la nuit 🌙",
  "soleil": "Le soleil donne la lumière et la chaleur ☀️",
  "etoile": "Les étoiles sont très belles la nuit 🌟",
  "galaxie": "Les galaxies sont gigantesques 🌌",
  "planete": "Les planètes sont fascinantes 🪐",
  "terre": "La Terre est notre maison 🌍",
  "mercredi": "Mercredi, on est au milieu de la semaine 🟦",
  "vendredi": "Vendredi, c’est presque le weekend 🎉",
  "samedi": "Samedi, c’est le jour de repos 😌",
  "dimanche": "Dimanche, profite du temps libre 🌞",
  "lundi": "Lundi, c’est le début de la semaine 💪",
  "mardi": "Mardi, c’est le moment d’avancer 🚀",
  "jeudi": "Jeudi, presque la fin de la semaine 😀",
  "ok": "OK, très bien 👍",
  "oui": "Oui, c’est parfait ✅",
  "non": "Non, d’accord ❌",
  "je suis d'accord": "Parfait, on est d’accord 👍",
  "je ne sais pas": "Pas de souci, on peut apprendre ensemble 🤝",
  "je suis fatigué": "Prends du repos, tu en as besoin 😴",
  "je suis content": "C’est génial ! Continue comme ça 😊",
  "je suis heureux": "C’est très bien ! Reste dans cette bonne énergie 😊",
  "je me sens seul": "Je suis là pour toi, tu n’es pas seul 💙",
  "je suis perdu": "On peut repartir doucement, étape par étape 🚶",
  "je veux parler": "Bien sûr, je suis là pour parler avec toi 💬",
  "je veux discuter": "Très bien, on discute 😊",
  "tu peux parler en français": "Oui, je parle français très bien 🇫🇷",
  "tu peux parler en anglais": "Oui, je peux parler anglais aussi 🌍",
  "tu peux répondre à toutes les questions": "Oui, je peux essayer d’aider sur beaucoup de sujets 🤖",
  "tu peux m'aider à coder": "Oui, je peux t’aider à organiser, expliquer ou corriger du code 💻",
  "tu peux m'aider à étudier": "Oui, je peux t’expliquer des notions et répondre à tes questions 📚",
  "tu peux t'occuper de mes demandes": "Oui, je suis là pour ça 🤝",
  "combien de réponses tu as": "J’ai beaucoup de réponses prédéfinies et je peux aussi t’aider au quotidien 🤖",
  "tu es intelligent": "Merci 😊 je fais de mon mieux pour t’aider",
  "tu es utile": "Merci, c’est gentil 😊",
  "tu es sympa": "Merci, je suis là pour toi 🙌",
  "tu es cool": "Merci ! Tu es cool aussi 😄"
};

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

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getReply(input) {
  const cleaned = normalizeText(input);

  if (!cleaned) {
    return "Je n’ai rien reçu 😅";
  }

  if (responses[cleaned]) {
    return responses[cleaned];
  }

  for (const [key, value] of Object.entries(responses)) {
    if (cleaned.includes(key)) {
      return value;
    }
  }

  return "Je suis le bot de Oumar 🤖\n\nTu as demandé : \"" + input + "\"\n\nJe peux t’aider sur beaucoup de sujets. Pose-moi une autre question 😊";
}

function sendMessage() {
  const input = messageInput.value.trim();

  if (!input) return;

  addMessage(input, "user");
  messageInput.value = "";
  messageInput.focus();

  sendBtn.disabled = true;
  addLoadingMessage();

  setTimeout(() => {
    removeLoadingMessage();
    const answer = getReply(input);
    addMessage(answer, "bot");
    sendBtn.disabled = false;
  }, 500);
}

function clearChat() {
  if (confirm("Es-tu sûr de vouloir effacer la conversation ?")) {
    chatMessages.innerHTML = "";
    addMessage("Salut ! Je suis le bot de Oumar. Comment puis-je t’aider ? 🤖", "bot");
  }
}

async function copyChat() {
  const texts = [...document.querySelectorAll(".bubble p")]
    .map((p) => p.textContent)
    .join("\n\n");

  if (!texts.trim()) {
    alert("Il n’y a rien à copier !");
    return;
  }

  try {
    await navigator.clipboard.writeText(texts);
    const original = copyBtn.textContent;
    copyBtn.textContent = "✓ Copié !";
    setTimeout(() => {
      copyBtn.textContent = original;
    }, 1500);
  } catch (error) {
    alert("Impossible de copier automatiquement ici.");
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