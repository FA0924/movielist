const addBtn = document.getElementById("addBtn");
const searchInput = document.getElementById("searchInput");
const movieInput = document.getElementById("movieInput");
const movieList = document.getElementById("movieList");


addBtn.addEventListener("click", addmovie);

movieInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addmovie();
});

searchInput.addEventListener("keyup", searchmovie);


function addmovie() {
    let text = movieInput.value.trim();
    if (text === "") return;

    let li = document.createElement("li");


    let span = document.createElement("span");
    span.textContent = text;


    let done = document.createElement("button");
    done.textContent = "done";
    done.addEventListener("click", () => {
        span.classList.toggle("done"); 
        if (span.classList.contains("done")) {
            movieList.appendChild(li); 
        }
    });

    let del = document.createElement("button");
    del.textContent = "delete";
    del.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(done); 
    li.appendChild(del);
    movieList.appendChild(li);

    movieInput.value = "";
}



function searchmovie() {
    let text = searchInput.value.toLowerCase();
    let items = document.querySelectorAll("#movieList li");

    items.forEach(li => {
        let movieText = li.querySelector("span").textContent.toLowerCase();
        li.style.display = movieText.includes(text) ? "flex" : "none";
    });
}