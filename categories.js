fetch(`https://kea-alt-del.dk/t7/api/seasons`)
  .then((response) => response.json())
  .then(dataRecieved);

function dataRecieved(data) {
  data.forEach(showCategories);
}

function showCategories(showCategory) {
  const myCategory = document.querySelector("template").content;
  const myClone = myCategory.cloneNode(true);

  myClone.querySelector("h2").textContent = showCategory.season;
  myClone.querySelector(
    "a"
  ).href = `produktliste.html?Urlinfo=${showCategory.season}`;

  const parentElement = document.querySelector("main");
  parentElement.appendChild(myClone);
}
