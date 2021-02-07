const input = document.getElementById('inputField');
const btn = document.getElementById('srcBtn');
btn.addEventListener('click', function () {
    fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=${input.value}`)
        .then(res => res.json())
        .then(data => displayFoods(data.meals));

    const displayFoods = foods => {
        const foodsDiv = document.getElementById('foods');
        for (let i = 0; i < foods.length; i++) {
            const foodName = foods[i];
            const foodDiv = document.createElement('div');
            foodDiv.className = 'food';
            const foodInfo = `
            <h3>${foodName.strIngredient}</h3>
            <button onclick="displayFoodDetail('${foodName.strIngredient}')">Details</button>
            `
            foodDiv.innerHTML = foodInfo;

            foodsDiv.appendChild(foodDiv);
        }
    } 
})

const displayFoodDetail = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a/${name}`
    .console.log(url);
}
