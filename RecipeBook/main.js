const serachMeal = async (e) => {
  e.preventDefault();
  // select elemenets
  const input = document.querySelector(".input");
  const title = document.querySelector(".title");
  const info = document.querySelector(".info");
  const img = document.querySelector(".imgs");
  const ingrediensOutput = document.querySelector(".ingredients");

  const showMealInfo = (meal) => {
    const { strMeal, strMealThumb, strInstructions } = meal;
    title.textContent = strMeal;
    img.style.backgroundImage = `url(${strMealThumb})`;
    info.textContent = strInstructions;
    console.log(meal)

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }
    const html = `
<span>${ingredients.map((ing) => `<li class='ing'>${ing}</li>`).join("")}</span>


`;
    ingrediensOutput.innerHTML = html;
  };

  //  alert function if the val are not true
  //  creat a popup to show this message

  const showAlert = () => {
    alert("meal not found");
  };

  // fetch data
  const fetchMealData = async (val) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
    );

    const { meals } = await response.json();

    return meals;
  };
  // get the user value

  const val = input.value.trim();
  if (val) {
    const meals = await fetchMealData(val);
    if (!meals) {
      showAlert();
      return;
    }
    meals.forEach(showMealInfo);
  } else {
    alert("pleas try search for meal");
  }
};

const form = document.querySelector("form");
form.addEventListener("submit", serachMeal);
const maginfier = document.querySelector(".maginifier");
maginfier.addEventListener("click", serachMeal);
