const burgerBtn = document.querySelector(".burger-btn");
const navEl = document.querySelector("#main-nav");
const navLinks = document.querySelectorAll(".nav-link");

const planetName = document.querySelector("#planet-name");
const planetImg = document.querySelector("#planet-img");
const planetImg2 = document.querySelector("#planet-img-2");

const overviewBtn = document.querySelector("#overview");
const internalBtn = document.querySelector("#internal");
const geologyBtn = document.querySelector("#geology");
const planetDesc = document.querySelector("#planet-desc");

const PLANET_API_URI = "https://planets-api.vercel.app/api/v1/planets";
burgerBtn.addEventListener("click", () => {
  navEl.classList.toggle("active");
});
planetImg2.style.display = "none";

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    getPlanet(navLinks[i].textContent); // Venus
  });
}

const getPlanet = async (planet = "Mercury") => {
  const response = await fetch(`${PLANET_API_URI}/${planet}`);
  const data = await response.json();
  console.log(data);
  planetName.textContent = data.name;
  planetImg.src = data.images.planet;
  planetDesc.textContent = data.overview.content;

  overviewBtn.addEventListener("click", () => {
    planetDesc.textContent = data.ocontent;
    verview.planetImg.src = data.images.planet;
    planetImg2.style.display = "none";
  });
  internalBtn.addEventListener("click", () => {
    planetDesc.textContent = data.structure.content;
    planetImg.src = data.images.internal;
    planetImg2.style.display = "none";
  });
  geologyBtn.addEventListener("click", () => {
    planetDesc.textContent = data.geology.content;
    planetImg2.style.display = "block";
    planetImg.src = data.images.planet;
    planetImg2.src = data.images.geology;
  });
};

getPlanet();
