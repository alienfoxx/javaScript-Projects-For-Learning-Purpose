const accessKey = "pdxrjqzhYdXeBotz8ERtO_7hU-B0X1e-O_TYkaVIfGA";
const searchInput = document.getElementById("search-input");
const formEl = document.querySelector("form");
const searchBtn = document.getElementById("search-btn");
const searchResults = document.querySelector(".search-result");
const showMoreBtn = document.getElementById("show-more-btn");
let inputData = "";
let page = 1;

// this the logic behind gettin data from the unsplash Api 
async function searchImages() {
  inputData = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResults.innerHTML = "";
  }
  const results = data.results;
  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-card");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResults.appendChild(imageWrapper);
  });
  page++;

  if (page > 1) {
    showMoreBtn.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});
showMoreBtn.addEventListener("click", () => {
  searchImages();
});
