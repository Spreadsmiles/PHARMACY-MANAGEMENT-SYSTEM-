import { Cart } from "./cart";

export class Order {
    constructor(
        public orderId: string,
        public userId: string,
        public cart: Cart[],
        public status: string,
        public total: number

    ){}
}
