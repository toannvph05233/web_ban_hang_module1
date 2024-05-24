let accounts = JSON.parse(localStorage.getItem("accounts"))|| [];
display(accounts);

function display(accounts) {
    let str = "";
    for (let i = 0; i < accounts.length; i++) {
        str += `<tr>
            <td>${accounts[i].id}</td>
            <td>${accounts[i].username}</td>
            <td>${accounts[i].password}</td>
            <td>
                <img src='${accounts[i].avatar}' width="120" height="140">
            </td>
            <td>${accounts[i].role}</td>          
            <td>
                <button onclick="editAccount(${i})">Edit</button>
            </td>
            <td>
                <button onclick="deleteAccount(${i})">delete</button>
            </td>
        </tr>`
    }
    document.getElementById("displayAccount").innerHTML = str;
}

function deleteAccount(index) {
    accounts.splice(index, 1);
    display(accounts);
}

function editAccount(index) {
    let avatar = prompt("nhập avatar mới");
    let role = prompt("nhập role của account");
    let account = accounts[index];
    account.avatar = avatar;
    account.role = role;
    display(accounts);
}

function findByUsername() {
    let nameSearch = document.getElementById("search").value;
    let accountsSearch = [];

    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].username.includes(nameSearch)) {
            accountsSearch.push(accounts[i]);
        }
    }
    display(accountsSearch);
}
