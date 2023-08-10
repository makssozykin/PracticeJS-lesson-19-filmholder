// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"

// *********************** Кнопка "Load More" ************************** \\

const refs = {
    movieList: document.getElementById("movie-list"),
    loadMore: document.getElementById("loadMore"),
};

serviceMovie().then(data => { 
    console.log(createMarkup(data.results));


})

function serviceMovie() { 
    const BASE_URL = "https://api.themoviedb.org/3";
    const END_POINT = "/trending/movie/week";
    const API_KEY = "92a9a9e3708a3e9451b7037d5906879a";

    const params = new URLSearchParams({
        api_key: API_KEY,
        page: 1,
    });

    return fetch(`${BASE_URL}${END_POINT}?${params}`, {
        headers: {
            Autorization:

        },
    })
        .then((resp) => { 
            if (!resp.ok) { 
                throw new Error(resp.statusText);
            }
            return resp.json();
        });
}

function createMarkup(arr) { 
    return arr.map((movie) => { }).join("");
}