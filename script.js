const modal = document.querySelector(".modal");
// const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector("#close-modal");
// const openBtn = document.querySelector(".§");
const handburgerBtn = document.querySelector(".fa-bars");
const xmarkBtn = document.querySelector("#close-mobile");
const nav = document.querySelector(".active");
const nav_links = document.querySelectorAll(".nav-links .nav-items");
const projects_container = document.querySelector(".projects_container");

//modal
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalTechnologies = document.getElementById("modal-technologies");
const modalSource = document.querySelector(".modal-source");
const modalLive = document.querySelector(".modal-live");
const modalImage = document.getElementById("modal-image");

// openBtn.addEventListener("click", () => {
//   modal.style.display = "flex";

//   document.documentElement.classList.add("modal-open");
//   document.body.classList.add("modal-open");
// });

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";

  document.documentElement.classList.remove("modal-open");
  document.body.classList.remove("modal-open");
});

handburgerBtn.addEventListener("click", () => {
  nav.style.display = "block";

  document.body.classList.add("modal-open");
});

xmarkBtn.addEventListener("click", () => {
  nav.style.display = "none";
  document.body.classList.remove("modal-open");
});

for (let navlink of nav_links) {
  navlink.addEventListener("click", () => {
    nav.style.display = "none";
    document.body.classList.remove("modal-open");
  });
}

const projects = [
  {
    id: 0,
    project_title: "Multi-Post Stories",
    img: "./assets/images/placeholder1.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech_stacks: ["HTML", "CSS", "JavaScript", "Ruby"],
    source: "#",
    link: "#",
  },
  {
    id: 1,
    project_title: "Multi-Post Stories",
    img: "./assets/images/placeholder1.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech_stacks: ["HTML", "CSS", "JavaScript", "Ruby"],
    source: "#",
    link: "#",
  },
  {
    id: 2,
    project_title: "Multi-Post Stories",
    img: "./assets/images/placeholder1.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech_stacks: ["HTML", "CSS", "JavaScript", "Ruby"],
    source: "#",
    link: "#",
  },
  {
    id: 3,
    project_title: "Multi-Post Stories",
    img: "./assets/images/placeholder1.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    tech_stacks: ["HTML", "CSS", "JavaScript", "Ruby"],
    source: "#",
    link: "#",
  },
];

projects.map((project, index) => {
  const projectElement = document.createElement("div");

  projectElement.classList.add(
    "project",
    index % 2 === 0 ? "normal" : "reverse",
  );
  projectElement.innerHTML = `
    <div class="img_container">
    <img src= ${project.img} alt=${project.project_title}>
    </div>

    <div class="others">
      <h4>${project.project_title}</h4>
      <p>${project.description}</p>

      <div class="tech-stacks">
        ${project.tech_stacks.map((technology, index) => `<span> ${technology} </span>`).join("")}
      </div>
      <button class="see_project" data-id=${project.id}> See Project </button>
    </div>
  `;

  projects_container.appendChild(projectElement);
});

const projectButtons = document.querySelectorAll(".see_project");
for (let button of projectButtons) {
  button.addEventListener("click", () => {
    const projectId = Number(button.dataset.id);
    const project = projects.find((item) => item.id === projectId);
    modalTitle.textContent = project.project_title;
    modalDescription.textContent = project.description;
    modalImage.src = project.img;
    modalLive.href = project.link;
    modalSource.href = project.source;
    modalTechnologies.innerHTML = project.tech_stacks
      .map((technology) => `<span> ${technology} </span>`)
      .join("");
    modal.style.display = "flex";
    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");
  });
}
