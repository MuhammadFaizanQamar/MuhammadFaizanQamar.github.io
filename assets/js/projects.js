const projects = [
  {
    title: "Battlestar Galactica Eternity",
    description: "A thrilling survival game where you begin in the Stone Age with your partner and pet, gathering resources like trees, grass, stones, and crystals to build your way to the AI-driven modern era. Explore mysterious islands, unlock powerful technologies, and face challenging terrains, harsh climates, and fierce enemies. Engage in strategic planning and survival skills, with immersive cutscenes that enrich the storytelling experience.",
    mediaType: "image",
    mediaSrc: "assets/img/p-9.png",
    googlePlay: "https://games.gala.com/games/bsgeternity",
    appStore: "",
    documentation: "",
  },
  {
    title: "AGE TO AI",
    description:
      "A thrilling survival game where you begin in the Stone Age with your partner and pet, gathering resources like trees, grass, stones, and crystals to build your way to the AI-driven modern era. Explore mysterious islands, unlock powerful technologies, and face challenging terrains, harsh climates, and fierce enemies. Engage in strategic planning and survival skills, with immersive cutscenes that enrich the storytelling experience.",
    mediaType: "video",
    mediaSrc: "https://www.youtube.com/embed/s1kkabCeOLQ",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.age.to.ai.CynorStudio&hl=en",
    appStore: "https://apps.apple.com/us/app/age-quest-survival/id6739470495",
    documentation: "",
  },
  {
    title: "Scary Teacher 3D",
    description: "A thrilling survival game where you begin in the Stone Age with your partner and pet, gathering resources like trees, grass, stones, and crystals to build your way to the AI-driven modern era. Explore mysterious islands, unlock powerful technologies, and face challenging terrains, harsh climates, and fierce enemies. Engage in strategic planning and survival skills, with immersive cutscenes that enrich the storytelling experience.",
    mediaType: "image",
    mediaSrc: "assets/img/p-1.jpg",
    googlePlay: "https://play.google.com/store/apps/details?id=com.zatg.catchme.pranks&pli=1",
    appStore: "",
    documentation: "",
  },
  {
    title: "Scary Stranger 3D",
    description: "A thrilling survival game where you begin in the Stone Age with your partner and pet, gathering resources like trees, grass, stones, and crystals to build your way to the AI-driven modern era. Explore mysterious islands, unlock powerful technologies, and face challenging terrains, harsh climates, and fierce enemies. Engage in strategic planning and survival skills, with immersive cutscenes that enrich the storytelling experience.",
    mediaType: "image",
    mediaSrc: "assets/img/p-2.png",
    googlePlay: "https://play.google.com/store/apps/details?id=com.zatg.scaryneighbor.hellgame&hl=en&gl=US",
    appStore: "",
    documentation: "",
  },
  {
    title: "Scary Impostor",
    description: "A thrilling survival game where you begin in the Stone Age with your partner and pet, gathering resources like trees, grass, stones, and crystals to build your way to the AI-driven modern era. Explore mysterious islands, unlock powerful technologies, and face challenging terrains, harsh climates, and fierce enemies. Engage in strategic planning and survival skills, with immersive cutscenes that enrich the storytelling experience.",
    mediaType: "image",
    mediaSrc: "assets/img/p-3.jpg",
    googlePlay: "",
    appStore: "https://apps.apple.com/us/app/scary-impostor/id1553861818",
    documentation: "",
  },
  {
    title: "Scary Robber – Mastermind Heist",
    description: "A thrilling survival game where you begin in the Stone Age with your partner and pet, gathering resources like trees, grass, stones, and crystals to build your way to the AI-driven modern era. Explore mysterious islands, unlock powerful technologies, and face challenging terrains, harsh climates, and fierce enemies. Engage in strategic planning and survival skills, with immersive cutscenes that enrich the storytelling experience.",
    mediaType: "image",
    mediaSrc: "assets/img/p-4.png",
    googlePlay: "https://play.google.com/store/apps/details?id=com.zatg.scaryrobber.boylife",
    appStore: "",
    documentation: "",
  },
  {
    title: "Prankster 3D",
    description: "A thrilling survival game where you begin in the Stone Age with your partner and pet, gathering resources like trees, grass, stones, and crystals to build your way to the AI-driven modern era. Explore mysterious islands, unlock powerful technologies, and face challenging terrains, harsh climates, and fierce enemies. Engage in strategic planning and survival skills, with immersive cutscenes that enrich the storytelling experience.",
    mediaType: "image",
    mediaSrc: "assets/img/p-5.png",
    googlePlay: "https://play.google.com/store/apps/details?id=com.zatg.scaryteacher.prankme",
    appStore: "",
    documentation: "",
  },
  {
    title: "Hide N' Prank",
    description: "A thrilling survival game where you begin in the Stone Age with your partner and pet, gathering resources like trees, grass, stones, and crystals to build your way to the AI-driven modern era. Explore mysterious islands, unlock powerful technologies, and face challenging terrains, harsh climates, and fierce enemies. Engage in strategic planning and survival skills, with immersive cutscenes that enrich the storytelling experience.",
    mediaType: "image",
    mediaSrc: "assets/img/p-6.png",
    googlePlay: "https://play.google.com/store/apps/details?id=com.zatg.catchme.pranks",
    appStore: "",
    documentation: "",
  },
  {
    title: "Scary Siblings",
    description: "A thrilling survival game where you begin in the Stone Age with your partner and pet, gathering resources like trees, grass, stones, and crystals to build your way to the AI-driven modern era. Explore mysterious islands, unlock powerful technologies, and face challenging terrains, harsh climates, and fierce enemies. Engage in strategic planning and survival skills, with immersive cutscenes that enrich the storytelling experience.",
    mediaType: "image",
    mediaSrc: "assets/img/p-7.png",
    googlePlay: "https://play.google.com/store/apps/details?id=com.zatg.scary.family.prank.story",
    appStore: "",
    documentation: "",
  },
  {
    title: "Pull The String : Nick's Quest",
    description: "A thrilling survival game where you begin in the Stone Age with your partner and pet, gathering resources like trees, grass, stones, and crystals to build your way to the AI-driven modern era. Explore mysterious islands, unlock powerful technologies, and face challenging terrains, harsh climates, and fierce enemies. Engage in strategic planning and survival skills, with immersive cutscenes that enrich the storytelling experience.",
    mediaType: "image",
    mediaSrc: "assets/img/p-8.png",
    googlePlay: "https://play.google.com/store/apps/details?id=com.zatg.rescue.quest",
    appStore: "",
    documentation: "",
  },
];

// script.js
const container = document.getElementById("projects-container");
const SHOW_COUNT = 3; // number of projects to show initially
let showingAll = false;

// Function to render projects dynamically
function renderProjects() {
  container.innerHTML = ""; // clear existing cards

  // Determine which projects to show
  const visibleProjects = showingAll ? projects : projects.slice(0, SHOW_COUNT);

  visibleProjects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card animate-on-scroll";

    // Media section
    const media = document.createElement("div");
    media.className = "project-media";

    if (project.mediaType === "video") {
      media.innerHTML = `
        <div class="video-container">
          <iframe width="560" height="315"
            src="${project.mediaSrc}"
            title="${project.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>`;
    } else {
      media.innerHTML = `<img src="${project.mediaSrc}" alt="${project.title}" />`;
    }

    // Info section
    const info = document.createElement("div");
    info.className = "project-info";
    info.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;

    // Links section
    const links = document.createElement("div");
    links.className = "project-links";

    if (project.googlePlay) {
      const gpLink = document.createElement("a");
      gpLink.href = project.googlePlay;
      gpLink.target = "_blank";
      gpLink.className = "btn btn-default";
      gpLink.textContent = "Play on Google Play";
      links.appendChild(gpLink);
    }

    if (project.appStore) {
      const asLink = document.createElement("a");
      asLink.href = project.appStore;
      asLink.target = "_blank";
      asLink.className = "btn btn-default";
      asLink.textContent = "Play on App Store";
      links.appendChild(asLink);
    }

    info.appendChild(links);

    card.appendChild(media);
    card.appendChild(info);

    container.appendChild(card);
  });
}

// Create Show More button
const showMoreBtn = document.createElement("button");
showMoreBtn.className = "btn btn-default mx-auto";
showMoreBtn.textContent = "Show More";

showMoreBtn.addEventListener("click", () => {
  showingAll = !showingAll;
  renderProjects();
  showMoreBtn.textContent = showingAll ? "Show Less" : "Show More";
});

// Initial render
renderProjects();

// Only add button if there are more projects
if (projects.length > SHOW_COUNT) {
  container.after(showMoreBtn);
}
