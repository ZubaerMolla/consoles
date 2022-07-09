function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => displayUsers(data))
}

function displayUsers(users){
    const container = document.getElementById('container')
    for(const user of users){
        console.log(user)
        const div = document.createElement('div')
        div.innerHTML = `<p>Username: ${user.name} City: ${user.address.city}</p>
        `;
        container.appendChild(div)
    }
    

}

const loadImage = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayImage(data))
}

function displayImage(images){
    const imageContainer = document.getElementById('img-container')
    for(const image of images){
        console.log(image)
        const div = document.createElement('div')
        div.innerHTML = `<p>Image ${image.thumbnailUrl}</p>`
        imageContainer.appendChild(div)
    }
}

const searchFood = () =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
}
const displaySearchResult = meals => {
    for(const meal of meals) {   //meals.forEach(meal =>
        searchResult = document.getElementById('search-result')
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
          </div>
          `;
          searchResult.appendChild(div)
    };
}

const loadMealDetail = mealId => {
    console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetail(data.meals[0]))
    }
    
    const displayMealDetail = meal => {
       console.log(meal);
       const mealDetails = document.getElementById('meal-details')
       const div = document.createElement('div');
       div.classList.add('card');
       div.innerHTML = `
       <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions}</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
       `;
       mealDetails.appendChild(div)
    }