class SavingsAccount extends Account{
    constructor(number,interest){
        super(number);
        this.interest=interest;
    }
    get interest(){
        return this._interest;
    }
    set interest(interest){
        return this._interest=interest;
    } 
    
    addInterest(){
       return this.deposit(this.getBalance()*this._interest/100);

    }
    endOfMonth() {
        return "Interest added in to SavingsAccount:"+ this.getNumber() +" balance: "+ this.getBalance() +"interest:"+ (this.getBalance() * this._interest / 100);
    }

    toString() {
        return "Account " + this._number + ": interest " + this._interest;
    }

}