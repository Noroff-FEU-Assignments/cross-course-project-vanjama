
const detailContainer = document.querySelector(".row");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


const url = "https://vanjamarouf.site/wp-json/wc/store/v1/products/"  + id + "?key=ck_03fad1e44937acbe8c389444c228ad9dcf1bc0d9";

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
          detailContainer.innerHTML = `
          <h4>${products.name}</h4>
          <img src="${products.images[0].src}" alt="${products.name}"></div>
          <p>${products.description}</p>
          <p>${products.price_html}</p>`
          }