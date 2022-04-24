
const detailContainer = document.querySelector(".row");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


const url = "https://vanjamarouf.site/wp-json/wc/store/v1/products/"  + "?key=ck_03fad1e44937acbe8c389444c228ad9dcf1bc0d9";

console.log(url);

async function getProducts() {

    try {
        const response = await fetch(url);
        const products = await response.json();

        console.log(products);

        createHtml(products);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}

getProducts();


        function createHtml(products) {
            for (let i = 0; i < products.length; i++) {
              detailContainer.innerHTML = `<div class="product">
              <h1>${products[i].name}</h1>
              <img src="${products[i].images[i].src}">
            <div class="details-description">${products[i].description}</div>
            <div class="details-price">${products[i].price_html}</div></div>`;
            }
          }