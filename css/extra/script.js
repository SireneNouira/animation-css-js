let articleCacher = document.getElementById("cacher");
let bague = document.querySelector("img");
bague.addEventListener("mouseenter", handleShowArticle);

function handleShowArticle(){
    articleCacher.classList.add("show");
    
}