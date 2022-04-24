const url ="https://vanjamarouf.site/wp-json/wc/store/v1/products?per_page=12";
const productContainer = document.querySelector(".small-container");


async function getProducts(){
    try{
    const response = await fetch(url);
    const getResults = await response.json();
    creatHTML(getResults);
    }
    catch(error){
        console.log(error);
    }
}

getProducts();

function creatHTML(products){
    products.forEach(function(products){
        productContainer.innerHTML +=
        `<a href="jackets.html?id=${products.id}"class="product">
        <h4>${products.name}</h4>
        <img src="${products.images[0].src}" alt="${products.name}"></div>
        <p>${products.price_html}</p>
        <div class="ig"<div><button>Buy Now</button></div></a>
        `;
        
        
    })
}

var MenuItems = document.getElementById("MenuItems");
            
            MenuItems.style.maxHeight = "0px";
            
            function menutoggle(){
                if(MenuItems.style.maxHeight == "0px")
                {
            MenuItems.style.maxHeight = "200px"
                }
                else {
                    MenuItems.style.maxHeight ="0px";
                }
            }