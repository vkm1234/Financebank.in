
class BankAccount {
    static getUserDetails() {
        var AccData = {
            1003: { name: "Ryan Phillip", age: 21, accNo: 1003, password: "1234", address: "Poovathingal(H)", balance: 18000, email: "ryanphillip003@gmail.com", Pin: 68006 },
            1004: { name: "Shine Joy", age: 20, accNo: 1004, password: "4321", address: "ittanhottil(H)", balance: 16000, email: "shinejoy20@gmail.com", Pin: 68066 },
            1005: { name: "Shinu Joy", age: 25, accNo: 1005, password: "3214", address: "Pulikkal(H)", balance: 12000, email: "shinujoy25@gmail.com", Pin: 68006 }
        }

        return AccData;
    }
    static login() {
        var accNo = document.getElementById("Account no").value;
        var accPass =
            document.getElementById("Password").value;

        var data = BankAccount.getUserDetails();
        if (accNo in data) {
            let realPWD = data[accNo].password;
            if (accPass == realPWD) {
                localStorage.setItem('Account no', accNo);
                alert("Welcome to FINANCE BANK!");
                window.location = "Userdetails.html";
            }
            else {
                alert("Incorrect password");
            }
        }
        else {
            alert("Sorry! This Account Does Not Exist");
        }

    }

    static deposit() {
        var accNo = localStorage.getItem("Account no");
        var AMT = Number(document.getElementById("Amount").value);
        let Pin = document.getElementById("Pin").value;

        let data = BankAccount.getUserDetails();
        let PinR = data[accNo].Pin;

        if (Pin == PinR) {
            // var temp = localStorage.getItem('Depsitmoney');
            var depsave = localStorage.setItem('Depsitmoney', AMT + Number(localStorage.getItem('Depsitmoney')));
            if (AMT >= 1000) {
                alert("Successfully deposited " + AMT);
                data[accNo].balance += Number(localStorage.getItem('Depsitmoney'));
                console.log(data[accNo].balance);
                window.location = "Userdetails.html";
            }
            else {
                alert("Minimum deposit amount is 1000");
            }
        }
        else {
            alert("Wrong Pin");
        }
    }
    static withdraw() {
        var accNo = localStorage.getItem("Account no");
        var AMT2 = Number(document.getElementById("Amount").value);
        let Pin = document.getElementById("Pin").value;
        localStorage.setItem('withmoney', 0);

        let data = BankAccount.getUserDetails();
        let PinR = data[accNo].Pin;
        if (Pin == PinR) {
            var withsave = localStorage.setItem('withmoney', AMT2);
            if (AMT2 >= 1000) {
                alert("Successfully Withdraw" + AMT2);
                localStorage.setItem('Depsitmoney', localStorage.getItem("Depsitmoney") - AMT2);
                window.location = "Userdetails.html"
            }
            else {
                alert("Minimum Withdraw amount is 1000");
            }
        }
        else {
            alert("Wrong Pin");
        }
    }
    static loggedUser() {
        let data = BankAccount.getUserDetails();
        var accNo = localStorage.getItem("Account no");
        // var  change = document.getElementById('accHolderName');
        var userName = document.getElementById('userName');
        var userAddress = document.getElementById('userAdderss');
        var userEmail = document.getElementById('userEmail');
        var userBalance = document.getElementById('userBalance');
        var useraccNo = document.getElementById('Account no');
        //change.innerHTML = data[accNo].name;
        userName.innerHTML = data[accNo].name;
        var Agee = document.getElementById('userAge').innerHTML = data[accNo].age;
        userAddress.innerHTML = data[accNo].address;
        userBalance.innerHTML = data[accNo].balance + Number(localStorage.getItem("Depsitmoney"));
        userEmail.innerHTML = data[accNo].email;
        useraccNo.innerHTML = accNo;

    }
    static logout() {
        localStorage.clear();
        window.location = "./Bankhomepage.html";
    }
}

