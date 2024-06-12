class Account {
    id;
    username;
    password;
    phone;
    role;
    avatar;

    constructor(id, username, password, role, avatar,phone) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.avatar = avatar;
        this.phone = phone;
    }

    changePassword(newPass) {
        if (this.password === newPass) {
            alert("trùng với password cũ")
        } else {
            this.password = newPass;
        }
    }
}
