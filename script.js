// Sélection du conteneur où on va ajouter le bouton
const menu = document.getElementById("menu");

// Création du bouton Home
const btnHome = document.createElement("button");
btnHome.textContent = "Home";

// Ajout du bouton dans le menu
menu.appendChild(btnHome);

// Événement : quand on clique sur "Home", aller à la section correspondante
btnHome.addEventListener("click", () => {
  const homeSection = document.getElementById("home");
  homeSection.scrollIntoView({ behavior: "smooth" });
});








