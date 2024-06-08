let productsSto = JSON.parse(localStorage.getItem("products")) || [];
if (productsSto.length === 0) {
    const products = [
        new Product(
            'Limousine Hà Nội - Hải Phòng',
            '200000',
            'Đưa và đón tận nơi quanh nội thành',
            ['https://vielimousine.com/wp-content/uploads/2021/12/DSC6090.jpg','https://dasanlimo.com/wp-content/uploads/2019/03/Solati-Limousine-20191.jpg','https://limo24h.vn/wp-content/uploads/2019/04/DSC00820.jpg'],
            ['limousine', 'limousine'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Nguyễn Văn A',
                    rating: 4.5,
                    comment: 'Dịch vụ tốt.'
                }
            ]
        ),
        new Product(
            'Limousine Hải Phòng - Hà Nội',
            '200000',
            'Đưa và đón tận nơi quanh nội thành',
            ['https://limo24h.vn/wp-content/uploads/2019/05/H%C3%A3ng-%C4%91%E1%BB%99-xe-limousine-Solati-11-ch%E1%BB%97.jpg','https://dasanlimo.com/wp-content/uploads/2019/03/Solati-Limousine-20191.jpg','https://limo24h.vn/wp-content/uploads/2019/04/DSC00820.jpg'],
            ['limousine', 'limousine'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Nguyễn Văn B',
                    rating: 4.5,
                    comment: 'Dịch vụ tốt.'
                }
            ]
        ),
        new Product(
            'Xe 16 chỗ Hải Phòng - Hà Nội',
            '100000',
            'Đưa và đón tận nơi quanh nội thành',
            ['https://fordtayninhauto.com/wp-content/uploads/2023/03/gia-ford-transit-16-cho-mau-bac.jpg','https://hyundai-mpc.vn/images/bang%20gia%20xe%2016%20cho/trang_bi_ghe_ngoi_ford_transit.jpg','https://www.thuexedulichdianthuanan.com/wp-content/uploads/2019/08/thue-xe-16-cho-thuan-an.jpg'],
            ['16cho', '16cho'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Nguyễn Văn B',
                    rating: 4.5,
                    comment: 'Dịch vụ tốt.'
                }
            ]
        ),
        new Product(
            'Xe 16 chỗ Hải Phòng - Hà Nội',
            '100000',
            'Đưa và đón tận nơi quanh nội thành',
            ['https://fordtayninhauto.com/wp-content/uploads/2023/03/gia-ford-transit-16-cho-mau-den.jpg','https://hyundai-mpc.vn/images/bang%20gia%20xe%2016%20cho/trang_bi_ghe_ngoi_ford_transit.jpg','https://www.thuexedulichdianthuanan.com/wp-content/uploads/2019/08/thue-xe-16-cho-thuan-an.jpg'],
            ['16cho', '16cho'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Nguyễn Văn B',
                    rating: 4.5,
                    comment: 'Dịch vụ tốt.'
                }
            ]
        )
        ,new Product(
            'Thuê xe Mercedes GLC 2024',
            '2000000',
            'Giá tính theo ngày, xe có sẵn bảo hiểm',
            ['https://img1.oto.com.vn/2024/01/17/glc300-5dcd-fd18_wm.webp','https://media.vov.vn/sites/default/files/styles/large/public/2022-06/2023-mercedes-benz-glc-79-8311.png.jpg'],
            ['thuexe', 'thuexe'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Nguyễn Văn B',
                    rating: 4.5,
                    comment: 'Dịch vụ tốt.'
                }
            ]
        )
        ,new Product(
            'Thuê xe Mercedes E200 2024',
            '2100000',
            'Giá tính theo ngày, xe có sẵn bảo hiểm',
            ['https://giaxemercedes.vn/wp-content/uploads/2021/10/gia-xe-mercedes-e-class-giaxemercedes-vn.jpg'],
            ['thuexe', 'thuexe'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Nguyễn Văn B',
                    rating: 4.5,
                    comment: 'Dịch vụ tốt.'
                }
            ]
        )
        ,new Product(
            'Thuê xe Camry 2.5Q 2024',
            '1500000',
            'Giá tính theo ngày, xe có sẵn bảo hiểm',
            ['https://i1-vnexpress.vnecdn.net/2022/03/15/toyotacamry2jpeg-1647331125.jpg?w=750&h=450&q=100&dpr=1&fit=crop&s=L-BB3hdAEjvqgmiGZntf1A','https://giaxeoto.vn/admin/upload/images/chi-tiet-toyota-camry-2022-kem-gia-ban-122021-1639712991.jpg'],
            ['thuexe', 'thuexe'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Nguyễn Văn B',
                    rating: 4.5,
                    comment: 'Dịch vụ tốt.'
                }
            ]
        )
        ,new Product(
            'Thuê xe Lexus 570',
            '3000000',
            'Giá tính theo ngày, xe có sẵn bảo hiểm',
            ['https://files01.danhgiaxe.com/kxeK9o17jxqEKtsDYBxO1QiU7QM=/fit-in/1280x0/20180410/lexuslx570-123024.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QWADbWQJkGrb9B7aYTwFCWac1mD63N1Dxfv1tBVCjrEaK5EkqKnLiLbMYHX-FVepC0c&usqp=CAU'],
            ['thuexe', 'thuexe'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Nguyễn Văn B',
                    rating: 4.5,
                    comment: 'Dịch vụ tốt.'
                }
            ]
        )
    ];
    localStorage.setItem("products", JSON.stringify(products));
}

let accounts = JSON.parse(localStorage.getItem("accounts"))|| [];
if (accounts.length === 0) {
    let user1 = new Account(1, "user", "123", "user", "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg")
    let admin1 = new Account(2, "admin", "123", "admin", "https://binhminhdigital.com/StoreData/images/PageData/loi-khuyen-giup-ban-chup-anh-doi-thuong-dep-hon-binhminhdigital-6.jpg")
    accounts = [user1, admin1];
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

