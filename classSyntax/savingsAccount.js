class SavingsAccount extends Account{
    constructor(number,interest){
        super(number);
        this._interest=interest;
    }
    getInterest(){
        return this._interest;
    }
    setInterest(interest){
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