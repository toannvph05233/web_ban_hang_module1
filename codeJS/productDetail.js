// let products = JSON.parse(localStorage.getItem("products"));

window.location.search.substr(1)

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

let name = findGetParameter("name");
let product = null;
for (const p of products) {
    if (p.name === name) {
        product = p;
    }
}


function showImages() {
    let imgs = "";
    for (const img of product.images) {
        imgs += `<div class="item-slick3" data-thumb="${img}">
         <div class="wrap-pic-w pos-relative">
          <img src="${img}" alt="IMG-PRODUCT">

          <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="${img}">
           <i class="fa fa-expand"></i>
          </a>
         </div>
        </div>`
    }

    return imgs;
}

let strImg = `<div class="wrap-slick3 flex-sb flex-w">
       <div class="wrap-slick3-dots"></div>
       <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>
       <div class="slick3 gallery-lb">
        ${showImages()}
       </div>
      </div>`
document.getElementById("images").innerHTML = strImg;


function truncateDescription(description, maxLength) {
    if (description.length > maxLength) {
        return description.substring(0, maxLength) + '...';
    } else {
        return description;
    }
}

function getProductsWithSameCategory(product) {
    const productsWithSameCategory = [];
    products.forEach((p) => {
        // Nếu có ít nhất một loại sản phẩm giống nhau và sản phẩm không phải là chính sản phẩm đầu vào
        if (p.categories.some(category => product.categories.includes(category))) {
            // Thêm sản phẩm vào mảng productsWithSameCategory
            productsWithSameCategory.push(p);
        }
    });
    return productsWithSameCategory;
}

let relatedProducts = getProductsWithSameCategory(product);
let strRelated = "";
for (const p of relatedProducts) {
    strRelated += `     <div class="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
      <!-- Block2 -->
      <div class="block2">
       <div class="block2-pic hov-img0">
        <img src="${p.images[0]}" alt="IMG-PRODUCT">

        <a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
         Mua Ngay
        </a>
       </div>

       <div class="block2-txt flex-w flex-t p-t-14">
        <div class="block2-txt-child1 flex-col-l ">
         <a href="product-detail.html?name=${p.name}" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
          ${p.name}
         </a>

         <span class="stext-105 cl3">
         ${p.price}
         </span>
        </div>

        <div class="block2-txt-child2 flex-r p-t-3">
         <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
          <img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON">
          <img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON">
         </a>
        </div>
       </div>
      </div>
     </div>
`
}
document.getElementById("relatedProducts").innerHTML = strRelated;


let strDetail = `<div class="p-r-50 p-t-5 p-lr-0-lg">
    <h4 class="mtext-105 cl2 js-name-detail p-b-14">
        ${product.name}
    </h4>
    <span class="mtext-106 cl2">
							${product.price}
						</span>

    <p class="stext-102 cl3 p-t-23">
${truncateDescription(product.description, 200)}</p>

    <!--  -->
    <div class="p-t-33">
      
        <div class="flex-w flex-r-m p-b-10">
            <div class="size-204 flex-w flex-m respon6-next">
                <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                    <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                        <i class="fs-16 zmdi zmdi-minus"></i>
                    </div>

                    <input id="quantity" class="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value="1">

                        <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                            <i class="fs-16 zmdi zmdi-plus"></i>
                        </div>
                </div>

                <button onclick="addCart('${product.name}',document.getElementById('quantity').value)"
                    class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                    Add to cart
                </button>
            </div>
        </div>
    </div>

    <!--  -->
    <div class="flex-w flex-m p-l-100 p-t-40 respon7">
        <div class="flex-m bor9 p-r-10 m-r-11">
            <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100"
               data-tooltip="Add to Wishlist">
                <i class="zmdi zmdi-favorite"></i>
            </a>
        </div>

        <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
            <i class="fa fa-facebook"></i>
        </a>

        <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
            <i class="fa fa-twitter"></i>
        </a>

        <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100"
           data-tooltip="Google Plus">
            <i class="fa fa-google-plus"></i>
        </a>
    </div>
</div>`
document.getElementById("productDetail").innerHTML = strDetail;


document.getElementById("showDescription").innerHTML = `<p class="stext-102 cl6">${product.description}</p>`;

function loadReview() {
    let strReview = "";
    for (const rv of product.reviews) {
        let starRating = "";
        // Dùng một vòng lặp để thêm số sao vào chuỗi
        for (let i = 0; i < rv.rating; i++) {
            starRating += '<i class="zmdi zmdi-star"></i> ';
        }
        // Dùng một vòng lặp khác để thêm số sao rỗng (nếu có) vào chuỗi
        for (let i = rv.rating; i < 5; i++) {
            starRating += '<i class="zmdi zmdi-star-outline"></i> ';
        }

        // Thêm HTML vào chuỗi strReview
        strReview += `
                    <div class="flex-w flex-t p-b-68">
                      <div class="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                        <img src="${rv.avatar}" alt="AVATAR">
                      </div>

                      <div class="size-207">
                        <div class="flex-w flex-sb-m p-b-17">
                          <span class="mtext-107 cl2 p-r-20">
                           ${rv.name}
                          </span>

                          <span class="fs-18 cl11">
                            ${starRating} <!-- Thêm số sao vào đây -->
                          </span>
                        </div>

                        <p class="stext-102 cl6">
                            ${rv.comment}                        
                        </p>
                      </div>
                    </div>
`;
    }

    document.getElementById("comment").innerHTML = strReview;
    document.getElementById("countComment").innerText = "Nhận xét ("+ product.reviews.length+ ")";
}

loadReview();


function addReviewToProduct() {
    let account = JSON.parse(localStorage.getItem("accountLogin"));
    if (!account) {
        location.href = "../Login.html";
        return;
    }
    // Lấy các trường dữ liệu từ form
    const rating = document.querySelector('input[name="rating"]').value;
    const review = document.querySelector('textarea[name="review"]').value;

    // Tạo một đối tượng review mới
    const newReview = {
        avatar: account.avatar,
        name: account.username,
        rating: parseInt(rating), // Chuyển đổi rating thành số nguyên
        comment: review
    };

    // Thêm đánh giá mới vào mảng reviews của product
    product.reviews.push(newReview);
    localStorage.setItem("products", JSON.stringify(products));
    document.querySelector('form').reset();
    loadReview();
}

document.querySelector('#btnComment').addEventListener('click', function (event) {
    addReviewToProduct(); // Thêm đánh giá vào product
});
