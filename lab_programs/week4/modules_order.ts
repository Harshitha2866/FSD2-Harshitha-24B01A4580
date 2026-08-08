import { DISCOUNT, DELIVERY_CHARGE } from "./modules_config";
import { Customer } from "./modules_customer";

export class Order {

    constructor(
        public customer: Customer,
        private amount: number
    ) { }

    public calculateBill(): number {

        let discount = this.amount * DISCOUNT;

        return this.amount - discount + DELIVERY_CHARGE;
    }

    public printBill(): void {

        console.log("------ Order Summary ------");
        console.log(`Customer : ${this.customer.name}`);
        console.log(`City     : ${this.customer.city}`);
        console.log(`Total    : ${this.calculateBill()}`);
    }

}