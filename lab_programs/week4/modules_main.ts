import { Customer } from "./modules_customer";
import { Order } from "./modules_order";

const customer: Customer = {
    name: "Kiran",
    city: "Hyderabad",
    premiumMember: true
};

const order = new Order(customer, 5000);

order.printBill();