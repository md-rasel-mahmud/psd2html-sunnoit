/***
 * ==========> Implement menu toggle bars
 *
 * */
const toggleMenu = () => {
  const toggleMenuIcon = document.getElementById("toggle-menu-icon");
  if (toggleMenuIcon.classList == "fa-solid fa-bars") {
    document.getElementById("menu").style.display = "block";
    toggleMenuIcon.classList = "fa-solid fa-xmark";
    return;
  }
  if (toggleMenuIcon.classList == "fa-solid fa-xmark") {
    document.getElementById("menu").style.display = "none";
    toggleMenuIcon.classList = "fa-solid fa-bars";
    return;
  }
};

/***
 * ==========> Implement portfolio menu
 *
 * */

fetch("../data/portfolio.json")
  .then((res) => res.json())
  .then((data) => {
    portfolioData(data);
  });

// select portfolio group
const portfolioGroup = document.querySelector(".portfolio-group");

// click tab to show portfolio by category
const portfolioNavigate = (event) => {
  const tabCategory = event.target.innerText.toLowerCase();

  // portfolio tab
  const allTab = document.querySelectorAll(".portfolio-menu ul li");
  for (const tab of allTab) {
    tab.style.background = "#ebc985";
  }

  event.target.style.background = "#30BAE7";

  portfolioGroup.innerHTML = "";

  fetch("../data/portfolio.json")
    .then((res) => res.json())
    .then((data) => {
      const filterByCategory = data.filter(
        (category) => category.category == tabCategory
      );

      if (tabCategory == "all") {
        data.map((portfolio) => {
          const portfolioCard = document.createElement("div");
          portfolioCard.classList.add("portfolio-card");
          portfolioCard.innerHTML = `
            <img src="${portfolio.img}" alt="portfolio 2" />
            <p>${portfolio.title}</p>
            `;
          portfolioGroup.appendChild(portfolioCard);
        });
      } else {
        filterByCategory.map((portfolio) => {
          const portfolioCard = document.createElement("div");
          portfolioCard.classList.add("portfolio-card");
          portfolioCard.innerHTML = `
            <img src="${portfolio.img}" alt="portfolio 2" />
            <p>${portfolio.title}</p>
            `;
          portfolioGroup.appendChild(portfolioCard);
        });
      }
    });
};

const portfolioData = (data) => {
  data.map((portfolio) => {
    const portfolioCard = document.createElement("div");

    portfolioCard.classList.add("portfolio-card");

    portfolioCard.innerHTML = `
      <img src="${portfolio.img}" alt="portfolio 2" />
      <p>${portfolio.title}</p>
    `;
    portfolioGroup.appendChild(portfolioCard);
  });
};
