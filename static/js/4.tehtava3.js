'use strict';
const results = document.querySelector("#results");

const tvForm = document.querySelector("#tv");
tvForm.addEventListener("submit", async function(evt) {
    evt.preventDefault();
    const query = document.querySelector("input[name=q]").value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`,);
        const jsonData = await response.json();
        console.log(jsonData);

        results.innerHTML = "";
        for(const tvShow of jsonData) {
            const h2 = document.createElement("h2");
            h2.innerText = tvShow.show.name;
            const img = document.createElement("img");
            img.src = tvShow.show.image?.medium;
            img.alt = tvShow.show.name;
            const a = document.createElement("a");
            a.href = tvShow.show.url;
            a.innerText = "Go to TV Show";
            const div = document.createElement("div");
            div.innerHTML = tvShow.show.summary;
            const article = document.createElement("article");
            article.append(h2, img, a, div);
            results.append(article);
        }
    } catch(error) {
        console.log(error.message);
    }
});