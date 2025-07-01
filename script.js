let arr = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://images.unsplash.com/photo-1708388064828-565ad865e12d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://images.unsplash.com/photo-1560219994-bdee950370e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://plus.unsplash.com/premium_photo-1675103909152-4aa4efcb5598?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hlZXNlJTIwUGl6emF8ZW58MHx8MHx8fDA%3D",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://images.unsplash.com/photo-1504973960431-1c467e159aa4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://images.unsplash.com/photo-1676300184847-4ee4030409c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://images.unsplash.com/photo-1692973751635-3ccf5526fc45?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://images.unsplash.com/photo-1701579231320-cc2f7acad3cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

const cardContainer = document.getElementById("container");


displayAll();

function displayAll() {
    removeExitingNodes(cardContainer);
    for (let i = 0; i < arr.length; i++) {
        createCard(arr[i]);
    }
}



function createCard(recipe) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");

    const imgTag = document.createElement("img");
    imgTag.src = recipe.imageSrc;

    cardImg.appendChild(imgTag);
    card.appendChild(cardImg)

    const category = document.createElement("p");
    category.innerText = recipe.type;
    if (recipe.type === 'veg') {
        category.classList.add("veg")
    } else {
        category.classList.add("non-veg");
    }
    category.classList.add("category");
    card.appendChild(category);

    const cardText = document.createElement("div");
    cardText.classList.add("card-text");
    card.appendChild(cardText);

    const title = document.createElement("h3");
    title.innerText = recipe.name;
    cardText.appendChild(title);

    const ratingsSec = document.createElement("div");
    ratingsSec.classList.add("stars");
    const img = document.createElement("img");
    img.src = "./assests/card-img/Star.svg";
    ratingsSec.appendChild(img);

    const rating = document.createElement("p");
    rating.innerText = recipe.rating;

    ratingsSec.appendChild(rating);

    cardText.appendChild(ratingsSec);

    const time = document.createElement("div");
    time.classList.add("time-required");
    card.appendChild(time);

    const h3Tag = document.createElement("h3")
    h3Tag.classList.add("time");
    h3Tag.innerText = recipe.time;
    time.appendChild(h3Tag);

    const liked = document.createElement("div");
    liked.classList.add("liked-comments");

    time.appendChild(liked);
    const heart = document.createElement("span");
    heart.classList.add("liked");
    heart.setAttribute("food-name", recipe.name);

    if (recipe.isLiked) {
        heart.innerHTML = `<i class="fa-solid fa-heart" style="color: #DC582A;"></i>`;
    } else {
        heart.innerHTML = `<i class="fa-regular fa-heart" style="color: #000000;"></i>`;
    }
    heart.onclick = function (e) {
        console.log(e.target);
        if (heart.innerHTML === `<i class="fa-solid fa-heart" style="color: #DC582A;"></i>`) {
            heart.innerHTML = '<i class="fa-regular fa-heart" style="color: #000000;"></i>'
        } else {
            heart.innerHTML = `<i class="fa-solid fa-heart" style="color: #DC582A;"></i>`
        }
    };
    const comment = document.createElement("span");
    comment.innerHTML = `<i class="fa-regular fa-comment" style="color: #000000;"></i>`;

    liked.appendChild(heart);
    liked.appendChild(comment);
    cardContainer.appendChild(card);
}


function vegOnly() {
    removeExitingNodes(cardContainer);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === "veg") {
            createCard(arr[i]);
        }
    }
}

function nonVegOnly() {
    removeExitingNodes(cardContainer);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === "non-veg") {
            createCard(arr[i]);
        }
    }
}

function removeExitingNodes(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

const above4Rating = document.getElementById("above-4");
const below4Rating = document.getElementById("below-4");

above4Rating.addEventListener("change", function () {
    removeExitingNodes(cardContainer);
    let isChecked = above4Rating.checked;
    if (isChecked) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].rating >= 4) {
                createCard(arr[i]);
            }
        }
    } else {
        displayAll();
    }
});

below4Rating.addEventListener("change", function () {
    removeExitingNodes(cardContainer);
    let isChecked = below4Rating.checked;
    if (isChecked) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].rating < 4) {
                createCard(arr[i]);
            }
        }
    } else {
        displayAll();
    }
});

const search = document.getElementById("searchBar");
search.addEventListener("keyup", function (e) {
    removeExitingNodes(cardContainer);
    const searchTerm = e.target.value.toLowerCase();
    const filteredRecipe = arr.filter(
        arr =>
            arr.name.toLowerCase().includes(searchTerm)
    )

    for (let i = 0; i < filteredRecipe.length; i++) {
        createCard(filteredRecipe[i]);
    }
});


const toggler = document.getElementById("toggler");
const dropDown = document.getElementById("drop-down-menu");

toggler.addEventListener("click", function () {
    dropDown.classList.toggle("open");
    // openMenu.style.display = "none";
    if (dropDown.classList.contains("open")) {
        toggler.innerHTML = `<i class="fa-solid fa-xmark" style="color: #000000;"></i>`;
    } else {
        toggler.innerHTML = `<i class="fa-solid fa-bars" style="color: #000000;">`;
    }
});

