


const loadProductName =() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
    fetch(url)
    .then(res => res.json())
    .then(data => showProduct(data.meals[0]));
}

loadProductName()


const showProduct = showName => {
    console.log(showName);
    const container = document.getElementById('container');

    const div = document.createElement('div');
    div.classList.add('card');
    div.style.width = '18rem';
    div.innerHTML = `
        <img src="${showName.strMealThumb}" class="card-img-top w-90" alt="...">
        <div class="card-body">
            <h5 class="card-title">${showName.strMeal}</h5>
            <p class="card-text">${showName.strInstructions.slice(0,200)}</p>
            <a href="${showName.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `
    container.appendChild(div);
}