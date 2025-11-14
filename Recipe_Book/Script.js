const foods = [
  {
    name: "Butter Chicken",
    category: "Punjabi",
    stars: "⭐⭐⭐⭐",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/butter-chicken.jpg",
    ingredients: `• Chicken
• Butter
• Tomato Puree
• Cream
• Spices`,
    recipe: `1. Marinate chicken in yogurt and spices.
2. Cook in butter with tomato puree.
3. Add cream and simmer until rich and thick.`
  },
  {
    name: "Dal Baati Churma",
    category: "Rajasthani",
    stars: "⭐⭐⭐⭐⭐",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/dal-baati-churma-recipe.jpg",
    ingredients: `• Wheat flour
• Ghee
• Dal
• Spices`,
    recipe: `1. Bake baati balls till golden.
2. Cook dal with spices.
3. Serve with churma and ghee.`
  },
  {
    name: "Margherita Pizza",
    category: "Italian",
    stars: "⭐⭐⭐⭐",
    image: "https://static.toiimg.com/photo/47508300.cms",
    ingredients: `• Pizza base
• Tomato sauce
• Mozzarella cheese
• Basil leaves`,
    recipe: `1. Spread sauce on base.
2. Add cheese and basil.
3. Bake till crust is crispy.`
  },
  {
    name: "Masala Dosa",
    category: "South Indian",
    stars: "⭐⭐⭐⭐⭐",
    image: "https://www.cookingandme.com/wp-content/uploads/2014/10/masala-dosa-recipe-1.jpg",
    ingredients: `• Rice batter
• Potatoes
• Spices
• Coconut chutney`,
    recipe: `1. Make dosa batter and spread on tawa.
2. Fill with masala potato mix.
3. Serve hot with chutney.`
  }
];

const foodContainer = document.getElementById("food-container");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const popupIngredients = document.getElementById("popup-ingredients");
const popupRecipe = document.getElementById("popup-recipe");

function renderFoods(list) {
  foodContainer.innerHTML = "";
  let categories = {};

  list.forEach(food => {
    if (!categories[food.category]) categories[food.category] = [];
    categories[food.category].push(food);
  });

  for (const [cat, items] of Object.entries(categories)) {
    const heading = document.createElement("h2");
    heading.textContent = cat + " Specials 🍲";
    heading.style.textAlign = "center";
    heading.style.color = "#2c662d";
    foodContainer.appendChild(heading);

    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category-grid");
    categoryDiv.style.display = "grid";
    categoryDiv.style.gridTemplateColumns = "repeat(auto-fill, minmax(260px, 1fr))";
    categoryDiv.style.gap = "20px";

    items.forEach(food => {
      const card = document.createElement("div");
      card.classList.add("food-card");
      card.innerHTML = `
        <h3>${food.name}</h3>
        <p>Type: ${food.category}</p>
        <p>Star Rating: ${food.stars}</p>
      `;
      card.onclick = () => openPopup(food);
      categoryDiv.appendChild(card);
    });

    foodContainer.appendChild(categoryDiv);
  }
}

function filterCategory(category) {
  const filtered = foods.filter(f => f.category === category);
  renderFoods(filtered);
}

function showAllFoods() {
  renderFoods(foods);
}

function openPopup(food) {
  popup.style.display = "flex";
  popupImg.src = food.image;
  popupTitle.textContent = food.name;
  popupIngredients.textContent = food.ingredients;
  popupRecipe.textContent = food.recipe;
}

function closePopup() {
  popup.style.display = "none";
}

renderFoods(foods);