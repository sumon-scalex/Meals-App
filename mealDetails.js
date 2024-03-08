function renderDishDetails(dish) {
  let output = "";
  output = `
    <div class="meal-detail-main-container" >
      <div class="details-div-1">
        <img class="meal-img-1" src=${dish.strMealThumb} />
        <div>
          <p class="meal-name">${dish.strMeal}</p>
        </div>
      </div>
      <div class="details-div-2">
        <p class="recipe-text"><span>Recipe : </span>${dish.strInstructions}</p>
      </div>
    </div>
  `;
  document.querySelector("#meal-div-1").innerHTML = output;
}
const httpGetMethod = async (url) => {
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
};
//fetching details of a particular dish from API
const getMealDetails = () => {
  console.log("hit");
  // httpGetMethod(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  httpGetMethod(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
    // .then((data) => ListMeals(data.meals))
    .then((data) => renderDishDetails(data.meals[0]))
    .catch((err) => console.log(err));
};

document.addEventListener("DOMContentLoaded", getMealDetails);
