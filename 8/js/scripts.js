const listElement = document.getElementById("faq--list");
const articlesContainer = document.querySelectorAll(".article__container");

const removeClass = (targetElement) => {
    for (item of articlesContainer) {
        item.classList.remove("article__container--show");
    }

    targetElement.classList.add("article__container--show");
};

main.addEventListener("click", e => {
    if (e.target.parentElement.classList.contains("article__title")) { 
     removeClass(e.target.nextElementSibling);
    }
    
});