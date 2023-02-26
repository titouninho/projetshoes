// On récupère le tableau dans lequel les produits seront affichés
const cartItems = document.querySelector("#cart-items");
// On récupère le total du panier
const cartTotal = document.querySelector("#cart-total");
// On récupère les boutons "Vider le panier" et "Passer la commande"
const clearCartButton = document.querySelector("#clear-cart");
const checkoutButton = document.querySelector("#checkout");

// On définit un objet pour stocker les produits du panier
let cart = [];

// Fonction pour ajouter un produit au panier
function addToCart(product) {
  // On cherche si le produit est déjà présent dans le panier
  const index = cart.findIndex((item) => item.name === product.name);

  if (index === -1) {
    // Si le produit n'est pas dans le panier, on l'ajoute avec une quantité de 1
    cart.push({ ...product, quantity: 1 });
  } else {
    // Si le produit est déjà dans le panier, on incrémente sa quantité
    cart[index].quantity++;
  }

  // On met à jour l'affichage du panier
  renderCart();
}

// Fonction pour supprimer un produit du panier
function removeFromCart(product) {
  // On cherche l'indice du produit dans le panier
  const index = cart.findIndex((item) => item.name === product.name);
