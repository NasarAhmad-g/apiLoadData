
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

    showFood.forEach(foodItem => {
    
        const div = document.createElement('div');
        div.classList.add('card');
        div.style.width = '18rem';
        div.innerHTML = `
            <img src="${foodItem.strMealThumb}" class="card-img-top w-90" alt="...">
            <div class="card-body">
                <h5 class="card-title">${foodItem.strMeal}</h5>
                <p class="card-text">${foodItem.strInstructions.slice(0, 100)}</p>
                <a href="${foodItem.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
        `
        content.appendChild(div);
    })
    
}