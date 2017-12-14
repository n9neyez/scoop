var customers = [];

function addCustomer(){
    var name = document.getElementById("custName");
    var address = document.getElementById("custAddress");
    var email = document.getElementById("custEmail");
    var phone = document.getElementById("custPhone");

    var customer = new Customer(name, address, email, phone);
    customers.push(customer);
}

class Customer{
    costructor(name, address, email, phone){
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
}