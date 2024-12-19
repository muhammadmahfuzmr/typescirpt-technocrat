{
    // Getter and Setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance
        }

        // setter 
        set deposit(amount: number) {
            this._balance = this._balance + amount
        }

        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount
        // }
 
        // getter
        
        get balance() {
            return this._balance
        }

        // getBalance() {
        //     return this._balance
        // }
    }
const poorAccountHolder = new BankAccount (12, "Bilal", 540)
poorAccountHolder.deposit= 200
//poorAccountHolder.addDeposit(500)
const myDeposit = poorAccountHolder.balance
//const myDeposit = poorAccountHolder.getBalance()
console.log(myDeposit)


    //
}