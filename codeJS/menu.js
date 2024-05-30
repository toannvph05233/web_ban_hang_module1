let account = JSON.parse(localStorage.getItem("accountLogin"));

if (account) {
    document.getElementById("menu").innerHTML = `
    <div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
       <i class="zmdi zmdi-search"></i>
      </div>

      <div onclick="location.href='shoping-cart.html'" class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" id="notiCart" data-notify="0">
       <i class="zmdi zmdi-shopping-cart"></i>
      </div>

      <div class="avatar m-2">
       <img src="${account.avatar}" width="40" alt="Avatar">
      </div>
      <a style="color: #003eff" class="mr-3">${account.username} </a> | <a style="color: #003eff" onclick="logout()" class="ml-3"> Đăng xuất</a>`
} else {
    document.getElementById("menu").innerHTML = ` 
     <div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
       <i class="zmdi zmdi-search"></i>
      </div>

      <div onclick="location.href='shoping-cart.html'" class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" id="notiCart" data-notify="0">
       <i class="zmdi zmdi-shopping-cart"></i>
      </div>
      <a href="Login.html" class="m-3">Đăng nhập </a> | <a href="Register.html" class="ml-3">Đăng ký</a>`
}

function logout() {
    localStorage.setItem("accountLogin", null);
    location.href = "index.html"
}
