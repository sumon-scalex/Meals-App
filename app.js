//function to render fetched meal-list into UI
function renderMealsList(meals) {
  let output = "";
  if (meals == null) {
    output = `<div>No result found</div>`;
  } else {
    meals.forEach((meal) => {
      output += `
        <div class="meal-card" key={${meal.idMeal}}>
          <div class="details-div">
            <img class="meal-img" src=${meal.strMealThumb} />
            <p class="meal-name">${meal.strMeal}</p>
            <div class="fav-button-container">
              <button id="fav-button" class="fav-buttons">Add to Favourite</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  document.querySelector("#meal-div").innerHTML = output;
}

// function renderDishDetails(dish) {
//   let output = "";
//   output = `
//     <div class="meal-detail-main-container" >
//       <div class="details-div-1">
//         <img class="meal-img-1" src=${dish.strMealThumb} />
//         <div>
//           <p class="meal-name">${dish.strMeal}</p>
//         </div>
//       </div>
//       <div class="details-div-2">
//         <p class="recipe-text"><span>Recipe : </span>${dish.strInstructions}</p>
//       </div>
//     </div>
//   `;
//   document.querySelector("#meal-div-1").innerHTML = output;
// }
//http get method to fetch data from API
const httpGetMethod = async (url) => {
  const response = await fetch(url);
  const resData = await response.json();
  return resData;
};

//fetching meal-list from API
const getMeals = (e) => {
  httpGetMethod(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.value}`
  )
    .then((data) => renderMealsList(data.meals))
    .catch((err) => console.log(err));
};

// //fetching details of a particular dish from API
// const getMealDetails = () => {
//   console.log("hit");
//   // httpGetMethod(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//   httpGetMethod(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
//     // .then((data) => ListMeals(data.meals))
//     .then((data) => renderDishDetails(data.meals[0]))
//     .catch((err) => console.log(err));
// };

// debouncing function to improve performance when fetching meal list
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
const fetchMeals = debounce((e) => getMeals(e));

document.querySelector("#search-food").addEventListener("keyup", fetchMeals);

//Get a particular meal details
// document.querySelector(".fav-buttons").addEventListener("click", () => {
//   console.log("hit");
// });
// document.addEventListener("DOMContentLoaded", getMealDetails);
