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
                    <td >
                        <div class="how-itemcart1">
                            <img src="${p.images[0]}" alt="IMG" >
                        </div>
                    </td>
                    <td >${p.name}</td>
                    <td style="color: red">${'Đi : ' + p.address + ' - Đến: ' + p.addressDen}</td>
                    <td style="color: #1e7e34">${p.price} VND</td>
                    <td >
                        <div class="wrap-num-product flex-w">
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
                    <td style="color: #1e7e34"> ${p.quantity * p.price} VND</td>
                </tr>`;
    }

    // Hiển thị giỏ hàng và tổng số tiền
    document.getElementById("showCart").innerHTML = str;
    document.getElementById("totalCart").innerHTML = total + " VND";
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

function order() {
    let account = JSON.parse(localStorage.getItem("accountLogin"));
    if (!account) {
        location.href = "Login.html";
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let orders = JSON.parse(localStorage.getItem("order")) || [];

    // Tính tổng tiền của giỏ hàng
    let totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Tạo thông tin đơn hàng mới
    let newOrder = {
        username: account.username,
        date: new Date().toISOString(), // Thời gian hiện tại
        totalAmount: totalAmount,
        products: cart,
        status: true
    };

    // Thêm đơn hàng mới vào danh sách đơn hàng
    orders.push(newOrder);

    // Lưu lại đơn hàng và xóa giỏ hàng
    localStorage.setItem("order", JSON.stringify(orders));
    localStorage.setItem("cart", JSON.stringify([]));

    alert("Đặt lịch thành công");
    location.reload();
}


let btnOrder = document.getElementById("order");
btnOrder.addEventListener("click", () => order());

