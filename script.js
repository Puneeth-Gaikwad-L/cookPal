let arr = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
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


const openMenu = document.getElementById("toggler");
const dropDown = document.getElementById("drop-down-menu");

openMenu.addEventListener("click", function () {
    dropDown.classList.toggle("open");
    openMenu.style.display = "none";
});

const closeMenu = document.getElementById("close-menu");
closeMenu.addEventListener("click", function () {
    console.log("clicked");
    dropDown.classList.remove("open");
    openMenu.style.display = "flex";
});