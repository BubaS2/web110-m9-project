const recommendations = {
  outdoors: {
    title: "Make time for Pullen Park",
    description:
      "Enjoy playgrounds, rides, and an easy outdoor break. If you want a quieter stroll, try the outdoor art at NCMA Museum Park.",
    link: "page2.html",
    linkText: "Explore parks and attractions",
  },
  curious: {
    title: "Go on a discovery mission",
    description:
      "The NC Museum of Natural Sciences is packed with fascinating exhibits for curious kids and grown-ups.",
    link: "page2.html",
    linkText: "Explore museums and attractions",
  },
  hungry: {
    title: "Follow your appetite",
    description:
      "Find a relaxed Raleigh meal, from a local breakfast stop to comfort food and dinner downtown.",
    link: "page3.html",
    linkText: "Explore food and dining",
  },
};

const vibeButtons = document.querySelectorAll(".vibe-button");
const vibeTitle = document.querySelector("#vibe-title");
const vibeDescription = document.querySelector("#vibe-description");
const vibeLink = document.querySelector("#vibe-link");

vibeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const recommendation = recommendations[button.dataset.vibe];

    if (!recommendation) {
      return;
    }

    vibeButtons.forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });

    vibeTitle.textContent = recommendation.title;
    vibeDescription.textContent = recommendation.description;
    vibeLink.href = recommendation.link;
    vibeLink.textContent = recommendation.linkText;
    vibeLink.hidden = false;
  });
});
