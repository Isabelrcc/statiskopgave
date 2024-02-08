const urlParams = new URLSearchParams(window.location.search);
const urlInfo = urlParams.get("Urlinfo");
console.log(urlInfo);

fetch(`https://kea-alt-del.dk/t7/api/products?season=${urlInfo}`)
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  const template = document.querySelector("#small_productTemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector("a").href = `produkt.html?ProductId=${product.id}`;

  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  //ændre indhold
  copy.querySelector(".id").textContent = product.id;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price span").textContent = product.price;
  copy.querySelector(".season").textContent = product.season;

  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("small_product_soldOut");
  } 

  if (product.discount) {
    //produktet er on sale

    copy.querySelector(".onDiscount").textContent = product.discount + "%";
  } else {
    copy.querySelector(".onDiscount").remove();
  }

  copy
    .querySelector(".read-more")
    .setAttribute("href", `produkt.html?id=${product.id}`);

  //appende
  document.querySelector("main").appendChild(copy);
}
