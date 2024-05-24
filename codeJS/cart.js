// Hàm cập nhật giỏ hàng sau khi thay đổi số lượng của sản phẩm
function updateCartQuantity(index, newQuantity) {
    // Lấy giỏ hàng từ local storage
    let cartMenu = JSON.parse(localStorage.getItem("cart"));

    // Cập nhật số lượng của sản phẩm tại vị trí index
    cartMenu[index].quantity = newQuantity;

    // Lưu giỏ hàng cập nhật vào local storage
    localStorage.setItem("cart", JSON.stringify(cartMenu));

    // Hiển thị giỏ hàng mới
    showCart(cartMenu);
}

// Hàm hiển thị giỏ hàng
function showCart(cartMenu) {
    let str = "";
    let total = 0;
    for (let i = 0; i < cartMenu.length; i++) {
        const p = cartMenu[i];
        total += p.price * p.quantity;
        str += `<tr class="table_row">
                    <td class="column-1">
                        <div class="how-itemcart1">
                            <img src="${p.images[0]}" alt="IMG">
                        </div>
                    </td>
                    <td class="column-2">${p.name}</td>
                    <td class="column-3">$ ${p.price}</td>
                    <td class="column-4">
                        <div class="wrap-num-product flex-w m-l-auto m-r-0">
                            <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onclick="decreaseQuantity(${i})">
                                <i class="fs-16 zmdi zmdi-minus"></i>
                            </div>

                            <input class="mtext-104 cl3 txt-center num-product" type="number"
                                   name="num-product2" value="${p.quantity}" onchange="updateCartQuantity(${i}, this.value)">

                            <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onclick="increaseQuantity(${i})">
                                <i class="fs-16 zmdi zmdi-plus"></i>
                            </div>
                        </div>
                    </td>
                    <td class="column-5">$ ${p.quantity * p.price}</td>
                </tr>`;
    }

    // Hiển thị giỏ hàng và tổng số tiền
    document.getElementById("showCart").innerHTML = str;
    document.getElementById("totalCart").innerHTML = total + " $";
}

// Hàm giảm số lượng của sản phẩm
function decreaseQuantity(index) {
    let cartMenu = JSON.parse(localStorage.getItem("cart"));
    if (cartMenu[index].quantity > 1) {
        cartMenu[index].quantity--;
        updateCartQuantity(index, cartMenu[index].quantity);
    } else {
        // Nếu số lượng là 1, xóa sản phẩm khỏi giỏ hàng
        cartMenu.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cartMenu));
        showCart(cartMenu);
    }
}


// Hàm tăng số lượng của sản phẩm
function increaseQuantity(index) {
    let cartMenu = JSON.parse(localStorage.getItem("cart"));
    cartMenu[index].quantity++;
    updateCartQuantity(index, cartMenu[index].quantity);
}

// Gọi hàm hiển thị giỏ hàng khi trang được tải
let cartMenu = JSON.parse(localStorage.getItem("cart"));
showCart(cartMenu);
