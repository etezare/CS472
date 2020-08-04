class CheckingAccount extends Account{
    constructor(number,overdraft){
        super(number);
        this.overdraft=overdraft;
    }
    withdraw(amount){
       if((this.getBalance()-amount)<this.overdraft){
        return "Insufficient funds";
       }else{
           this.getBalance()=this.getBalance()-amount;
       }

    }
    get overdraft(){
        return this._overdraft;
    }

    set overdraft(overdraft){
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