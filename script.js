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
"superficie du mali": "Le Mali couvre environ 1 241 238 km². 🇲🇱",
"surface du mali": "Le Mali couvre environ 1 241 238 km². 🇲🇱",
"taille du mali": "Le Mali a une superficie d'environ 1 241 238 km². 🇲🇱",
"population du mali": "Le Mali compte environ 22 millions d'habitants. 🇲🇱",
"nombre d'habitants du mali": "Le Mali compte environ 22 millions d'habitants. 🇲🇱",
"capital du mali": "La capitale du Mali est Bamako. 🇲🇱",
"capitale du mali": "La capitale du Mali est Bamako. 🇲🇱",
"president du mali": "Le président du Mali est Assimi Goïta. 🇲🇱",
"président du mali": "Le président du Mali est Assimi Goïta. 🇲🇱",
"chef de l'etat du mali": "Le chef de l'État du Mali est Assimi Goïta. 🇲🇱",
"chef de letat du mali": "Le chef de l'État du Mali est Assimi Goïta. 🇲🇱",
"premier ministre du mali": "Le Premier ministre du Mali est le chef du gouvernement. 🇲🇱",
"langue officielle du mali": "La langue officielle du Mali est le français. 🇲🇱",
"langues du mali": "Le Mali compte plusieurs langues : bambara, fulfulde, soninké, malinké et français. 🇲🇱",
"monnaie du mali": "La monnaie du Mali est le franc CFA. 💰",
"devise du mali": "Le Mali utilise le franc CFA comme monnaie. 💰",
"code monnaie du mali": "La monnaie du Mali est le franc CFA, code XOF. 💰",
"pays du mali": "Le Mali est un pays d'Afrique de l'Ouest. 🌍",
"continent du mali": "Le Mali est situé en Afrique de l'Ouest. 🌍",
"regions du mali": "Le Mali compte 8 régions administratives principales. 🇲🇱",
"bamako capitale": "Oui, Bamako est la capitale du Mali. 🇲🇱",
"ou est bamako": "Bamako se trouve au sud du Mali, près du fleuve Niger. 🇲🇱",
"mali en afrique": "Oui, le Mali est en Afrique de l'Ouest. 🌍",
"villes du mali": "Les grandes villes du Mali sont Bamako, Sikasso, Ségou, Mopti, Gao et Tombouctou. 🇲🇱",
"histoire du mali": "Le Mali a une histoire riche avec l'empire du Mali, fondé par Sundiata Keita. 🇲🇱",
"empire du mali": "L'empire du Mali a été l'un des plus grands empires d'Afrique de l'Ouest. 🇲🇱",
"sundiata keita": "Sundiata Keita est le fondateur de l'empire du Mali. 🇲🇱",
"mansa musa": "Mansa Musa est l'un des souverains les plus riches et célèbres de l'empire du Mali. 🇲🇱",
"askia muhammad": "Askia Muhammad est un grand souverain de l'histoire du Mali et du Songhaï. 🇲🇱",
"modibo keita": "Modibo Keita a été un président historique du Mali. 🇲🇱",
"paysage du mali": "Le Mali a des paysages variés : savane, désert, fleuves et montagnes. 🌾",
"desert du mali": "Le nord du Mali est dominé par le Sahara et le désert. 🏜️",
"fleuve niger": "Le Niger est le plus grand fleuve du Mali. 🌊",
"niger mali": "Le fleuve Niger traverse le Mali et est très important pour le pays. 🌊",
"tombouctou": "Tombouctou est une ville historique du Mali, connue pour ses mosquées. 🇲🇱",
"djenné": "Djenné est une ville historique du Mali avec une belle mosquée en terre cuite. 🇲🇱",
"ségou": "Ségou est une ville importante du Mali sur le fleuve Niger. 🇲🇱",
"sikasso": "Sikasso est une grande ville du sud du Mali. 🇲🇱",
"mopti": "Mopti est une ville du centre du Mali, port sur le Niger. 🇲🇱",
"gao": "Gao est une ville historique du nord-est du Mali. 🇲🇱",
"kidal": "Kidal est une ville du nord du Mali. 🇲🇱",
"kayes": "Kayes est une ville du Mali, capitale de la région de Kayes. 🇲🇱",
"koumantou": "Koumantou est un endroit du Mali. 🇲🇱",
"koulikoro": "Koulikoro est une région du Mali. 🇲🇱",
"musique du mali": "La musique du Mali est très riche avec le griot, le blues du Mali, et les instruments traditionnels. 🎵",
"griot": "Le griot est un musicien et conteur traditionnel du Mali. 🎵",
"kora": "La kora est un instrument de musique traditionnel du Mali. 🎸",
"balafon": "Le balafon est un instrument de musique traditionnel du Mali. 🎵",
"njark": "Le njark est un instrument traditionnel du Mali. 🎵",
"culture du mali": "La culture du Mali est riche et diverse avec des traditions ancestrales. 🇲🇱",
"traditions du mali": "Le Mali a des traditions très anciennes et respectées. 🇲🇱",
"danse du mali": "Le Mali a des danses traditionnelles très belles et dynamiques. 💃",
"artisanat du mali": "L'artisanat du Mali est très réputé pour la qualité et le design. 🎨",
"textile du mali": "Le Mali produit des textiles traditionnels très beaux. 🧵",
"bogolan": "Le bogolan est un tissu traditionnel du Mali avec des motifs spéciaux. 🇲🇱",
"agriculture du mali": "L'agriculture est importante au Mali, surtout la culture du coton et du mil. 🌾",
"coton du mali": "Le Mali produit beaucoup de coton, c'est une ressource importante. 🌾",
"elevage au mali": "L'élevage est aussi une activité importante au Mali. 🐄",
"economie du mali": "L'économie du Mali est basée sur l'agriculture, l'élevage et le commerce. 💼",
"ressources du mali": "Le Mali a des ressources naturelles comme l'or, le coton et les pâturages. ⛏️",
"or du mali": "Le Mali a des gisements d'or importants. ⛏️",
"climat du mali": "Le climat du Mali est chaud et sec au nord, tropical au sud. ☀️",
"saison seche": "La saison sèche au Mali est très chaude. ☀️",
"saison des pluies": "La saison des pluies au Mali est de mai à octobre. 🌧️",
"vegetation du mali": "La végétation du Mali varie du désert au sud avec la savane. 🌳",
"faune du mali": "La faune du Mali comprend les lions, éléphants, girafes et antilopes. 🦁",
"flore du mali": "La flore du Mali est adaptée au climat sec et tropical. 🌿",
"sante au mali": "Le Mali a des défis en matière de santé, mais améliore ses services. 🏥",
"education au mali": "L'éducation est une priorité au Mali pour développer le pays. 📚",
"sport au mali": "Le Mali aime beaucoup le football et d'autres sports. ⚽",
"equipe de football du mali": "L'équipe nationale du Mali au football s'appelle les Aigles du Mali. 🦅",
"eagles du mali": "Les Eagles du Mali est le surnom de l'équipe de football nationale. 🦅",
"religion au mali": "La majorité du Mali est musulmane, avec aussi du christianisme. 🕌",
"islam au mali": "L'islam est la religion principale du Mali. 🕌",
"mosquee du mali": "Le Mali a de magnifiques mosquées, notamment celle de Djenné. 🕌",
"mosquee de djenne": "La mosquée de Djenné est l'une des plus belles d'Afrique. 🕌",
"mosquee de tombouctou": "Tombouctou a plusieurs mosquées historiques très importantes. 🕌",
"art du mali": "L'art du Mali est très riche avec la sculpture, la peinture et l'artisanat. 🎨",
"sculpture du mali": "Les sculptures du Mali sont très réputées pour leur qualité. 🎨",
"litterature du mali": "La littérature du Mali inclut les épopées comme celle de Soundjata. 📖",
"epopee du mali": "L'épopée de Soundjata est une histoire importante de la littérature malienne. 📖",
"cinema du mali": "Le Mali a une industrie cinématographique en développement. 🎬",
"fespaco": "Le FESPACO est un festival de cinéma africain très important. 🎬",
"independence du mali": "Le Mali a obtenu son indépendance en 1960. 🇲🇱",
"colonisation du mali": "Le Mali a été colonisé par la France, anciennement Soudan français. 🇫🇷",
"soudan francais": "Le Mali s'appelait le Soudan français avant son indépendance en 1960. 🇲🇱",
"mali federation": "Le Mali a formé une courte fédération avec le Sénégal en 1960. 🇲🇱",
"coup d'etat au mali": "Le Mali a connu plusieurs changements politiques dans son histoire. 🇲🇱",
"gouvernement du mali": "Le Mali est gouverné par un régime militaire depuis 2020. 🇲🇱",
"politique du mali": "La politique du Mali évolue avec des réformes constantes. 🇲🇱",
"democratie au mali": "Le Mali travaille pour renforcer sa démocratie. 🇲🇱",
"securite au mali": "Le Mali fait face à des défis de sécurité dans le nord. 🇲🇱",
"conflits au mali": "Le Mali a connu des conflits armés, notamment dans le nord. 🇲🇱",
"insecurite": "L'insécurité est un défi au Mali, surtout dans le nord. 🇲🇱",
"terrorisme au mali": "Le Mali lutte contre le terrorisme avec l'aide internationale. 🇲🇱",
"frontiere du mali": "Le Mali a des frontières avec 7 pays : Mauritanie, Sénégal, Guinée, Côte d'Ivoire, Burkina Faso, Niger et Algérie. 🗺️",
"pays voisins du mali": "Les pays voisins du Mali sont la Mauritanie, le Sénégal, la Guinée, la Côte d'Ivoire, le Burkina Faso, le Niger et l'Algérie. 🗺️",
"mauritanie": "La Mauritanie est un pays voisin du Mali au nord. 🇲🇷",
"senegal": "Le Sénégal est un pays voisin du Mali à l'ouest. 🇸🇳",
"guinee": "La Guinée est un pays voisin du Mali au sud-ouest. 🇬🇳",
"cote d ivoire": "La Côte d'Ivoire est un pays voisin du Mali au sud. 🇨🇮",
"burkina faso": "Le Burkina Faso est un pays voisin du Mali à l'est. 🇧🇫",
"niger": "Le Niger est un pays voisin du Mali à l'est-nord. 🇳🇪",
"algerie": "L'Algérie est un pays voisin du Mali au nord. 🇩🇿",
"diaspora malienne": "Il y a une importante diaspora malienne partout dans le monde. 🌍",
"maliens en france": "Beaucoup de Maliens vivent en France et contribuent à la société. 🇫🇷",
"maliens aux usa": "Des Maliens vivent aussi aux États-Unis et au Canada. 🇺🇸",
"immigration malienne": "L'immigration malienne est importante vers l'Europe et l'Amérique. 🌍",
"cuisine malienne": "La cuisine malienne est délicieuse avec le riz, le couscous et les sauces. 🍲",
"riz au mali": "Le riz est un aliment de base au Mali. 🍚",
"couscous malien": "Le couscous est très populaire au Mali. 🍲",
"sauce malienne": "Les sauces maliennes sont riches et savoureuses. 🍲",
"mafé": "Le mafé est un plat traditionnel du Mali avec sauce d'arachide. 🍲",
"tieboudienne": "Le tieboudienne est un plat savoureux à base de riz et poisson. 🍚",
"arachide": "L'arachide est très utilisée dans la cuisine malienne. 🥜",
"mil": "Le mil est une céréale importante au Mali. 🌾",
"bouillie": "La bouillie de mil est un petit-déjeuner traditionnel au Mali. 🥣",
"biere malienne": "Le Mali produit de la bière locale très appréciée. 🍺",
"jus de gingembre": "Le jus de gingembre frais est très populaire au Mali. 🥤",
"eau froide": "L'eau froide est très appréciée au Mali, surtout en saison chaude. 💧",
"vestimentaires du mali": "Les vêtements traditionnels maliens sont colorés et élégants. 👗",
"boubou": "Le boubou est un vêtement traditionnel très porté au Mali. 👗",
"pagnes": "Les pagnes sont des tissus traditionnels très importants au Mali. 🧵",
"foulard malien": "Les foulards maliennes sont très beaux et colorés. 🧣",
"traditions vestimentaires": "Les traditions vestimentaires du Mali reflètent la culture riche du pays. 👗",
"mariage au mali": "Les mariages au Mali sont des événements festifs et importants. 💒",
"ceremonies du mali": "Le Mali a des cérémonies traditionnelles très importantes. 🎉",
"griots du mali": "Les griots sont les dépositaires de la culture et l'histoire du Mali. 🎵",
"initiation au mali": "Les initiations traditionnelles sont importantes au Mali. 🇲🇱",
"circoncision": "La circoncision est une pratique traditionnelle au Mali. 🇲🇱",
"excision": "L'excision est une pratique ancienne au Mali, mais il y a des efforts pour l'éliminer. 🇲🇱",
"fete du mali": "Le Mali a plusieurs fêtes et célébrations traditionnelles. 🎉",
"jour de l independence": "L'indépendance du Mali est célébrée le 22 septembre. 🇲🇱",
"fete nationale": "La fête nationale du Mali est le 22 septembre. 🇲🇱",
"paque au mali": "Pâques est une fête importante pour les chrétiens du Mali. 🕊️",
"noel au mali": "Noël est célébré par les chrétiens au Mali. 🎄",
"ramadan": "Le Ramadan est une période importante pour les musulmans du Mali. 🕌",
"eid al fitr": "L'Aïd al-Fitr est une fête musulmane importante au Mali. 🕌",
"eid al adha": "L'Aïd al-Adha est une fête musulmane importante au Mali. 🕌",
"tabaski": "La Tabaski est l'Aïd al-Adha, très célébrée au Mali. 🎉",
"nouvel an au mali": "Le nouvel an est célébré au Mali le 1er janvier. 🎆",
"medecine traditionnelle": "La médecine traditionnelle existe encore au Mali à côté de la médecine moderne. 💊",
"fétichisme": "Le fétichisme mélange croyances traditionnelles et spiritualité au Mali. 🇲🇱",
"griots et histoires": "Les griots racontent l'histoire du Mali à travers les générations. 📖",
"magie blanche": "La magie blanche est parfois associée à la spiritualité traditionnelle. ✨",
"sorcellerie": "La sorcellerie est une croyance traditionnelle au Mali. 🇲🇱",
"esprits": "Les esprits et ancêtres sont importants dans la spiritualité malienne. 👻",
"ancetres": "Les ancêtres sont vénérés au Mali. 👨‍👩‍👦",
"defunts": "Le culte des défunts est important au Mali. 🙏",
"ceremony funeraire": "Les cérémonies funéraires au Mali sont longues et importantes. 🇲🇱",
"deuil": "Le deuil au Mali est une période sacrée respectée. 🇲🇱",
"valeurs du mali": "Les valeurs maliennes incluent le respect, la famille et l'honneur. 🇲🇱",
"respect": "Le respect est une valeur fondamentale au Mali. 🤝",
"famille malienne": "La famille est très importante au Mali, les liens sont forts. 👨‍👩‍👧‍👦",
"generalisme": "L'oralité et les histoires sont très importantes au Mali. 📖",
"proverbes maliens": "Le Mali a de beaux proverbes traditionnels. 💭",
"sagesse malienne": "La sagesse malienne se transmet par les griots et les anciens. 🧙",
"chefs traditionnels": "Les chefs traditionnels jouent encore un rôle au Mali. 👑",
"royaute": "L'histoire royale du Mali est riche et prestigieuse. 👑",
"royaume du mali": "Le royaume du Mali était très puissant au Moyen Âge. 🇲🇱",
"mali modern": "Le Mali moderne se développe tout en respectant les traditions. 🇲🇱",
"technologie au mali": "La technologie se développe au Mali avec l'accès à Internet. 💻",
"telephone mobile": "Le téléphone mobile est très répandu au Mali. 📱",
"internet au mali": "Internet se développe au Mali, surtout dans les villes. 🌐",
"reseau": "Le réseau mobile se développe au Mali. 📶",
"television malienne": "La télévision existe au Mali avec plusieurs chaînes. 📺",
"radio": "La radio est un média important au Mali. 📻",
"presse malienne": "La presse écrite existe au Mali. 📰",
"journaux du mali": "Le Mali a plusieurs journaux quotidiens. 📰",
"medias du mali": "Les médias jouent un rôle important au Mali. 📺",
"information": "L'accès à l'information s'améliore au Mali. ℹ️",
"transparence": "La transparence gouvernementale est un objectif au Mali. 🇲🇱",
"corruption": "Le Mali lutte contre la corruption. 🇲🇱",
"justice": "Le système judiciaire du Mali cherche à progresser. ⚖️",
"code civil": "Le Mali a un système juridique basé sur le code civil français. ⚖️",
"constitution du mali": "La constitution du Mali définit le cadre politique. 🇲🇱",
"droit malien": "Le droit malien combine le droit civil français et les traditions. ⚖️",
"assemblee nationale": "L'Assemblée nationale est le parlement du Mali. 🏛️",
"senat": "Le Mali peut avoir un sénat selon sa constitution. 🏛️",
"collectivites": "Les collectivités territoriales jouent un rôle au Mali. 🏛️",
"regions du mali": "Le Mali est divisé en régions administratives. 🗺️",
"cercles": "Les cercles sont des subdivisions administratives au Mali. 🗺️",
"communes": "Les communes sont les plus petites unités administratives au Mali. 🗺️",
"capitale regionali": "Chaque région a sa capitale administrative. 🗺️",
"budget du mali": "Le budget du Mali dépend du gouvernement et des revenus. 💰",
"financements": "Le Mali reçoit des financements internationaux. 💰",
"aide internationale": "Le Mali reçoit l'aide de la communauté internationale. 🌍",
"ong au mali": "De nombreuses ONG travaillent au Mali. 🤝",
"organisations": "Plusieurs organisations travaillent au Mali pour le développement. 🤝",
"unicef au mali": "L'UNICEF travaille au Mali pour protéger les enfants. 👶",
"pnud": "Le PNUD soutient le développement au Mali. 🌍",
"banque mondiale": "La Banque mondiale aide au développement du Mali. 💰",
"fmi": "Le FMI coopère avec le Mali. 💰",
"union africaine": "Le Mali est membre de l'Union africaine. 🌍",
"cedeao": "Le Mali est membre de la CEDEAO. 🌍",
"francophonie": "Le Mali est une nation francophone. 🇫🇷",
"accord international": "Le Mali participe à plusieurs accords internationaux. 🤝",
"droits de l homme": "Le Mali travaille à respecter les droits de l'homme. 🇲🇱",
"conventions": "Le Mali signe des conventions internationales. 🇲🇱",
"militaire du mali": "Le Mali a une armée nationale pour la défense. 🎖️",
"forces armees": "Les Forces armées maliennes sont importantes pour la sécurité. 🎖️",
"police": "La police malienne maintient l'ordre public. 👮",
"gendarmerie": "La gendarmerie opère au Mali. 👮",
"securite publique": "La sécurité publique est un enjeu au Mali. 🚨",
"prisons": "Le Mali a un système pénitentiaire. 🚔",
"justice penale": "Le Mali a un système de justice pénale. ⚖️",
"criminalite": "Le Mali lutte contre la criminalité. 🚨",
"epidemie au mali": "Le Mali a connu diverses épidémies. 🏥",
"covid 19": "Le COVID-19 a affecté le Mali. 🦠",
"malaria": "La malaria est une maladie courante au Mali. 🦟",
"fievre jaune": "La fièvre jaune peut être un risque au Mali. 🦟",
"ebola": "Le Mali a connu des cas d'Ebola. 🦠",
"vaccination": "La vaccination est importante au Mali. 💉",
"sante publique": "La santé publique au Mali a besoin d'amélioration. 🏥",
"hôpitaux": "Le Mali a des hôpitaux dans les principales villes. 🏥",
"medecins": "Le Mali a un nombre croissant de médecins. 👨‍⚕️",
"infirmier": "Les infirmiers jouent un rôle important dans la santé malienne. 👩‍⚕️",
"pharmacie": "Les pharmacies existent au Mali. 💊",
"medicament": "Les médicaments sont disponibles au Mali. 💊",
"environnement du mali": "L'environnement du Mali est affecté par le changement climatique. 🌍",
"changement climatique": "Le Mali est vulnérable au changement climatique. 🌍",
"desertification": "La désertification est un problème au Mali. 🏜️",
"secheresse": "Le Mali connaît régulièrement des sécheresses. 🏜️",
"eau du mali": "L'eau est une ressource précieuse au Mali. 💧",
"forets": "Les forêts du Mali diminuent à cause de la déforestation. 🌳",
"deforestation": "La déforestation est un problème au Mali. 🌳",
"reboisement": "Des efforts de reboisement sont en cours au Mali. 🌱",
"energie au mali": "L'énergie au Mali provient surtout du diesel et de l'hydroélectrique. ⚡",
"electricite": "L'électricité est disponible dans les villes du Mali. 💡",
"barrage": "Le Mali a des barrages hydroélectriques. 🌊",
"energie renouvelable": "Les énergies renouvelables se développent au Mali. ☀️",
"solaire au mali": "L'énergie solaire se développe au Mali. ☀️",
"vent": "L'énergie éolienne pourrait se développer au Mali. 💨",
"charbon": "Le Mali utilise peu de charbon. ⛏️",
"petrole": "Le Mali n'a pas de grandes réserves de pétrole. ⛽",
"gaz naturel": "Le Mali a peu de gaz naturel exploité. 🌍",
"mines": "Le Mali a des mines importantes, notamment d'or. ⛏️",
"phosphate": "Le Mali a des gisements de phosphate. ⛏️",
"marbre": "Le Mali a du marbre. 🪨",
"sal": "Le Mali a du sel. 🧂",
"titane": "Le Mali a des gisements de titane. ⛏️",
"uranium": "Le Mali peut avoir de l'uranium. ⛏️",
"commerce du mali": "Le commerce est important pour l'économie du Mali. 💼",
"exportations": "Le Mali exporte surtout du coton et de l'or. 📤",
"importations": "Le Mali importe divers produits. 📥",
"tarifs": "Les tarifs commerciaux s'appliquent au Mali. 📊",
"douanes": "Les douanes maliennes régulent le commerce. 🚢",
"ports": "Le Mali n'a pas de ports maritimes. 🇲🇱",
"aeropuerto": "Le Mali a un aéroport international à Bamako. ✈️",
"transports": "Les transports au Mali incluent routes, rail et air. 🚗",
"routes": "Le réseau routier du Mali se développe. 🛣️",
"chemin de fer": "Le Mali a une ligne de chemin de fer limitée. 🚂",
"bus": "Les bus sont un transport important au Mali. 🚌",
"taxi": "Les taxis sont courants au Mali. 🚕",
"infrastructure": "Les infrastructures au Mali ont besoin d'amélioration. 🏗️",
"construction": "La construction se développe au Mali. 🏗️",
"immobilier": "L'immobilier se développe à Bamako. 🏢",
"logement": "Le logement est un enjeu au Mali. 🏠",
"eau potable": "L'accès à l'eau potable s'améliore au Mali. 💧",
"assainissement": "L'assainissement est un défi au Mali. 🚽",
"hygiène": "L'hygiène publique est importante au Mali. 🧼",
"detritus": "La gestion des déchets s'améliore au Mali. 🗑️",
"pollution": "La pollution est un problème dans les villes du Mali. 💨",
"air": "La qualité de l'air peut être mauvaise à Bamako. 💨",
"bruit": "La pollution sonore existe au Mali. 🔊",
"ecologie": "L'écologie devient une préoccupation au Mali. 🌍",
"parc naturel": "Le Mali a des réserves naturelles. 🌳",
"reserve": "Les réserves fauniques existent au Mali. 🦁",
"tourisme": "Le tourisme se développe au Mali. 🏖️",
"sites touristiques": "Le Mali a plusieurs sites touristiques intéressants. 🗺️",
"musees": "Le Mali a des musées. 🏛️",
"musee national": "Le Musée national du Mali existe à Bamako. 🏛️",
"patrimoine": "Le Mali a un riche patrimoine culturel. 🇲🇱",
"UNESCO": "Plusieurs sites du Mali sont au patrimoine UNESCO. 🌍",
"timbuktu": "Tombouctou est sur la liste de l'UNESCO. 🌍",
"djenne patrimoine": "Djenné est un site du patrimoine de l'UNESCO. 🌍"
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