let products = JSON.parse(localStorage.getItem("products")) || [];
display();

document.getElementById('addProductForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.getElementById('addProductName').value;
    let image = document.getElementById('addProductImage').value;
    let price = document.getElementById('addProductPrice').value;
    let description = document.getElementById('addProductDescription').value;
    let category = document.getElementById('addProductCategory').value;
    let product = {
        name,
        price,
        description,
        sizes: ['Size S', 'Size M', 'Size L', 'Size XL'],
        colors: ['Đỏ', 'Xanh', 'Trắng', 'Xám'],
        images: [image],
        sku: '',
        categories: [category],
        reviews: []
    };
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    display();
    $('#addProductModal').modal('hide');
    document.getElementById('addProductForm').reset();
});

document.getElementById('editProductForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let index = this.getAttribute('data-index');
    let name = document.getElementById('editProductName').value;
    let image = document.getElementById('editProductImage').value;
    let price = document.getElementById('editProductPrice').value;
    let description = document.getElementById('editProductDescription').value;
    let category = document.getElementById('editProductCategory').value;
    products[index] = {
        name,
        price,
        description,
        sizes: ['Size S', 'Size M', 'Size L', 'Size XL'],
        colors: ['Đỏ', 'Xanh', 'Trắng', 'Xám'],
        images: [image],
        sku: '',
        categories: [category],
        reviews: []
    };
    localStorage.setItem("products", JSON.stringify(products));
    display();
    $('#editProductModal').modal('hide');
});

function editProduct(index) {
    let product = products[index];
    document.getElementById('editProductName').value = product.name;
    document.getElementById('editProductImage').value = product.images[0];
    document.getElementById('editProductPrice').value = product.price;
    document.getElementById('editProductDescription').value = product.description;
    document.getElementById('editProductCategory').value = product.categories[0];
    document.getElementById('editProductForm').setAttribute('data-index', index);
    $('#editProductModal').modal('show');
}

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    display();
}

function showProductDetails(index) {
    let strImg = "";
    let product = products[index];

    for (const img of product.images) {
        strImg += `<img src='${img}' width="120" height="140" class="img-fluid mb-3">`
    }


    let details = `
            <h5>${product.name}</h5>
            ${strImg}
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Category:</strong> ${product.categories.join(', ')}</p>
            <p><strong>Sizes:</strong> ${product.sizes.join(', ')}</p>
            <p><strong>Colors:</strong> ${product.colors.join(', ')}</p>
        `;
    document.getElementById('productDetailsContent').innerHTML = details;
    $('#productDetailsModal').modal('show');
}

function display() {
    let str = "";
    for (let i = 0; i < products.length; i++) {
        str += `<tr onclick="showProductDetails(${i})" style="cursor:pointer">
                <td>${i + 1}</td>
                <td>${products[i].name}</td>
                <td>
                    <img src='${products[i].images[0]}' width="120" height="140">
                </td>
                <td style="color: chartreuse">${products[i].price}</td>
                <td>
                    <button class="btn btn-primary" onclick="editProduct(${i})">Edit</button>
                </td>
                <td>
                    <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button>
                </td>
            </tr>`;
    }
    document.getElementById("displayProduct").innerHTML = str;
}
