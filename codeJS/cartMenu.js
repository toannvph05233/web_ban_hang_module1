let cartMenu = JSON.parse(localStorage.getItem("cart"));
let products = JSON.parse(localStorage.getItem("products"));

if (cartMenu === null){
    cartMenu = [];
}

showCartModal();

function showCartModal() {
//     let strCartModal = "";
//     let total = 0;
//     for (const c of cartMenu) {
//         total += c.price * c.quantity;
//         strCartModal += `     <li class="header-cart-item flex-w flex-t m-b-12">
//       <div class="header-cart-item-img">
//        <img src="${c.images[0]}" alt="IMG">
//       </div>
//
//       <div class="header-cart-item-txt p-t-8">
//        <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
//         ${c.name}
//        </a>
//
//        <span class="header-cart-item-info">
//         ${c.quantity} cái * ${c.price}
//        </span>
//       </div>
//      </li>
// `
//     }
//     document.getElementById("cartModal").innerHTML = strCartModal;
//     document.getElementById("totalModal").innerHTML = total;
    showNotifyCart();
}

function showNotifyCart() {
    document.getElementById("notiCart").dataset.notify = cartMenu.length.toString();
    document.getElementById("notiCartM").dataset.notify = cartMenu.length.toString();
}



function addCart(nameP, quantity){
    let product = findProductByName(nameP);
    for (const p of cartMenu) {
        if (name === p.name){
            p.quantity += parseInt(quantity);
            showCartModal();
            localStorage.setItem("cart", JSON.stringify(cartMenu));
            return;
        }
    }
    product.quantity = parseInt(quantity);
    cartMenu.push(product);
    localStorage.setItem("cart", JSON.stringify(cartMenu));
    showCartModal();

}

function findProductByName(name) {
    for (const p of products) {
        if (p.name === name){
            return p;
        }
    }
}
