document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const searchResults = document.getElementById("search-results");

  fetch("/data/search-index.json")
    .then((response) => response.json())
    .then((data) => {
      const idx = lunr(function () {
        this.ref("uri");
        this.field("title");
        this.field("content");
        this.field("tags");

        data.forEach(function (doc) {
          this.add(doc);
        }, this);
      });

      searchInput.addEventListener("input", (event) => {
        const query = event.target.value;
        const results = idx.search(query);
        displaySearchResults(results, data, searchResults);
      });
    });
});

function displaySearchResults(results, data, searchResults) {
  searchResults.innerHTML = "";
  if (results.length > 0) {
    results.forEach((result) => {
      const item = data.find((doc) => doc.uri === result.ref);
      searchResults.innerHTML += `<a href="${item.uri}">${item.title}</a><br>`;
    });
  } else {
    searchResults.innerHTML = "No results found";
  }
}
