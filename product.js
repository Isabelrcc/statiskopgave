const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(singleProduct) {
  document.querySelector("h2").textContent = singleProduct.productdisplayname;
  document.querySelector("h5").textContent = singleProduct.gender;
  document.querySelector(".newProductId").textContent = singleProduct.id;
  document.querySelector(".brand").textContent = singleProduct.brandname;
  document.querySelector(".usagetype").textContent = singleProduct.usagetype;
  document.querySelector(".articletype").textContent =
    singleProduct.articletype;
  document.querySelector(".season").textContent = singleProduct.season;
  document.querySelector(".discount span").textContent = singleProduct.discount;
  document.querySelector(".price span").textContent = singleProduct.price;
  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${singleProduct.id}.webp`;

  if (!singleProduct.discount) {
    //!product.discount means NOT product.discount
    document.querySelector(".discount").remove();
  }
}
