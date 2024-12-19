{
    //
    // Access Modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        //private _balance: number;
        protected _balance : number;
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        public addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        public getBalance(){
            return this._balance
        }

    }

class StudentBankAccount extends BankAccount {
    test(){
        this._balance
    }
}


    const poorAccountHolder = new BankAccount(12, "Mahfuz", 500)
    poorAccountHolder.addDeposit(50)
    const myDeposit = poorAccountHolder.getBalance() ;
    console.log(myDeposit)





    //
}