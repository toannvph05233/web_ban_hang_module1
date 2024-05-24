let productsSto = JSON.parse(localStorage.getItem("products")) || [];
if (productsSto.length === 0) {
    const products = [
        new Product(
            'Áo khoác nhẹ',
            '58.79',
            'Áo khoác nhẹ thích hợp cho mùa thu đông. Chất liệu mềm mại, thoáng mát.',
            ['Size S', 'Size M', 'Size L', 'Size XL'],
            ['Đỏ', 'Xanh', 'Trắng', 'Xám'],
            ['https://phamthao.vn/wp-content/uploads/2020/11/sss.jpg', 'https://lavenderstudio.com.vn/wp-content/uploads/2021/05/chup-hinh-san-pham-cho-shop2.png'],
            'JAK-01',
            ['Áo khoác', 'Nam'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Nguyễn Văn A',
                    rating: 4.5,
                    comment: 'Áo rất đẹp và chất lượng, đáng mua.'
                }
            ]
        ),
        new Product(
            'Giày thể thao',
            '79.99',
            'Giày thể thao bền bỉ, thiết kế hiện đại, phù hợp cho các hoạt động ngoài trời.',
            ['Size 39', 'Size 40', 'Size 41', 'Size 42'],
            ['Đen', 'Trắng'],
            ['https://resource.nhuahvt.com/0x0/tmp/chup-anh-san-pham-phang-1596647399.jpg', 'https://lavenderstudio.com.vn/wp-content/uploads/2021/05/chup-hinh-san-pham-cho-shop2.png'],
            'SHO-01',
            ['Giày', 'Nam'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Trần Thị B',
                    rating: 4.0,
                    comment: 'Giày rất thoải mái khi đi, rất hài lòng.'
                }
            ]
        ),
        new Product(
            'Quần jeans',
            '45.00',
            'Quần jeans thời trang, chất liệu bền đẹp, dễ phối đồ.',
            ['Size S', 'Size M', 'Size L', 'Size XL'],
            ['Xanh đậm', 'Xanh nhạt'],
            ['https://blog.dktcdn.net/files/chup-anh-quan-ao.jpg', "https://blog.dktcdn.net/files/chup-anh-quan-ao-3.jpg"],
            'JEANS-01',
            ['Quần', 'Nam'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Phạm Văn C',
                    rating: 3.5,
                    comment: 'Quần hơi cứng, nhưng chất liệu tốt.'
                }
            ]
        ),
        new Product(
            'Áo phông',
            '19.99',
            'Áo phông đơn giản, dễ mặc, phù hợp cho mọi lứa tuổi.',
            ['Size S', 'Size M', 'Size L', 'Size XL'],
            ['Đen', 'Trắng', 'Xanh'],
            ['https://pos.nvncdn.com/4e732c-26/art/artCT/20210510_LQurOt2vEZXrgsRaG9WqNnyQ.jpg', "https://pos.nvncdn.com/4e732c-26/art/artCT/20210510_LQurOt2vEZXrgsRaG9WqNnyQ.jpg"],
            'TSHIRT-01',
            ['Áo', 'Nu'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Lê Thị D',
                    rating: 5.0,
                    comment: 'Áo rất đẹp và mềm mại, tôi rất thích.'
                }
            ]
        ),
        new Product(
            'Váy dạ hội',
            '120.00',
            'Váy dạ hội sang trọng, thiết kế độc đáo, chất liệu cao cấp.',
            ['Size S', 'Size M', 'Size L'],
            ['Đỏ', 'Xanh', 'Đen'],
            ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_n_Sn9mn6rCSrCWWNfpyDh0gsmD-VZIA6YVliWNeehI45iQSexsioHBdnEjuqbYEzGIU&usqp=CAU', "https://st.quantrimang.com/photos/image/2021/07/06/stt-ban-quan-ao-hay-1.jpg"],
            'DRESS-01',
            ['Váy', 'Nu'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Ngô Thị E',
                    rating: 4.8,
                    comment: 'Váy rất đẹp và vừa vặn, tôi rất hài lòng.'
                }
            ]
        ),
        new Product(
            'Túi xách tay',
            '89.99',
            'Túi xách tay nhỏ gọn, tiện dụng, phù hợp cho các dịp đi chơi.',
            [],
            ['Đen', 'Nâu'],
            ['https://i.pinimg.com/550x/6e/93/49/6e93491371cb9cd3260178e196d98ccd.jpg', "https://i.pinimg.com/550x/6e/93/49/6e93491371cb9cd3260178e196d98ccd.jpg"],
            'BAG-01',
            ['Túi', 'PhuKien'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Hoàng Thị F',
                    rating: 4.6,
                    comment: 'Túi rất đẹp và chắc chắn, tôi rất thích.'
                }
            ]
        ),
        new Product(
            'Áo sơ mi',
            '29.99',
            'Áo sơ mi lịch sự, phù hợp cho công việc và các dịp trang trọng.',
            ['Size S', 'Size M', 'Size L', 'Size XL'],
            ['Trắng', 'Xanh'],
            ['https://naidecor.vn/wp-content/uploads/2019/07/phong-nen-pvc-gia-chat-lieu-xi-mang-chup-anh-quan-ao-2-800x800.jpg'],
            'SHIRT-01',
            ['Áo', 'Nam'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Đặng Văn G',
                    rating: 4.3,
                    comment: 'Áo đẹp, phù hợp với giá tiền.'
                }
            ]
        ),
        new Product(
            'Quần short',
            '25.00',
            'Quần short thoải mái, thích hợp cho mùa hè.',
            ['Size S', 'Size M', 'Size L', 'Size XL'],
            ['Xanh', 'Đen'],
            ['https://i.pinimg.com/originals/c3/c2/4f/c3c24fe2198611fdf715da6b7f7b9e06.png'],
            'SHORT-01',
            ['Quần', 'Nam'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Bùi Thị H',
                    rating: 4.7,
                    comment: 'Quần rất thoải mái và đẹp.'
                }
            ]
        ),
        new Product(
            'Mũ lưỡi trai',
            '15.00',
            'Mũ lưỡi trai phong cách, chất liệu bền đẹp, phù hợp cho mọi lứa tuổi.',
            [],
            ['Đen', 'Trắng', 'Xanh'],
            ['https://bizweb.dktcdn.net/100/425/004/products/315301297-540038164125595-3198844291669921233-n-1668401731197.jpg?v=1676458148800', "https://bizweb.dktcdn.net/100/425/004/products/310765682-439885268330487-1243119633490284815-n-1668401771692.jpg?v=1676458148800"],
            'CAP-01',
            ['Mũ', 'PhuKien'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Nguyễn Văn I',
                    rating: 4.2,
                    comment: 'Mũ đẹp, nhưng hơi chật.'
                }
            ]
        ),
        new Product(
            'Kính râm',
            '49.99',
            'Kính râm chống UV, thiết kế thời trang, bảo vệ mắt khỏi ánh nắng mặt trời.',
            [],
            ['Đen', 'Nâu'],
            ['https://bizweb.dktcdn.net/100/487/604/products/o1cn017tex7t2itxtycl7nn2212827-5d518a16-d7f8-4f1b-a49a-ae15afeafd54.jpg?v=1688739819667'],
            'SUNGLASSES-01',
            ['Kính', 'PhuKien'],
            [
                {
                    avatar: 'https://hinhgaixinh.com/wp-content/uploads/2021/10/anh-co-gai-xinh-dep-tuyet-nhung.jpg',
                    name: 'Trần Văn J',
                    rating: 4.9,
                    comment: 'Kính rất đẹp và bảo vệ mắt tốt.'
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

