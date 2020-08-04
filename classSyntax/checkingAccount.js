class CheckingAccount extends Account{
    constructor(number,overdraft){
        super(number);
        this._overdraft=overdraft;
    }
    withdraw(amount){
       if(amount>(this.getBalance()+this._overdraft)){
        return "Insufficient funds";
       }else{
           this._balance=this.getBalance()-amount;
       }

    }
    getOverdraft(){
        return this._overdraft;
    }

    setOverdraft(overdraft){
        return this._overdraft=overdraft;
    }

    endOfMonth(){
         
        if(this.getBalance()==0){
            return "Warning, low balance CheckingAccount:"+ this.getNumber() +"balance: "+ this.getBalance()+" overdraft limit:"+this._overdraft;
        }
        else{
            return "";
        }
  }

    toString() {
      return "Account " + this.getNumber()+ ": overdraft " + this._overdraft;
  }
}