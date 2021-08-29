
//get input fild value and loadA data
const clickBtn = () =>{
    const inputFild = document.getElementById('input-fild');
    const inputText = inputFild.value;
    inputFild.value = '';
    if(inputText == ''){
        alert('Type your favuirite food');

    }
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => showProduct(data.meals));
    }
    
}

// Show Data
const showProduct = showFood => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    showFood.forEach(foodItem => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.style.width = '18rem';
        div.innerHTML = `
        <div onclick="loadIdNumber(${foodItem.idMeal})">
            <img src="${foodItem.strMealThumb}" class="card-img-top w-90" alt="...">
            <div class="card-body">
                <h5 class="card-title">${foodItem.strMeal}</h5>
                <p class="card-text">${foodItem.strInstructions.slice(0, 100)}</p>
                <a href="${foodItem.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
        content.appendChild(div);
    })
    
}


const loadIdNumber = loadId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${loadId}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => showIdNumber(data.meals[0]));
} 


const showIdNumber = showId =>{
    const contentDtls = document.getElementById('content-dtls');
    contentDtls.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card mx-auto" style="width: 28rem;">
            <img src="${showId.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${showId.strMeal}</h5>
                <h4>${showId.idMeal}</h4>
                <p class="card-text">${showId.strInstructions.slice(0, 250)}</p>
                <a href="${showId.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `
    contentDtls.appendChild(div);
}