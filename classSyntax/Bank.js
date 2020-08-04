class Bank{
    constructor(){
        this.account=[];
        this.nextNumber=1;
    }

    addAccount(){
        this.account.push(new Account(this.nextNumber));
        return this.nextNumber++;
    } 

    addSavingsAccount(interest){
        let save=new SavingsAccount(this.nextNumber,interest);
        save.deposit(200);
        this.account.push(save);
        return this.nextNumber++;

    }

    addCheckingAccount(overdraft) {
        let check=new CheckingAccount(this.nextNumber,overdraft);
        check.deposit(200);
        this.account.push(check);
        return this.nextNumber++;

    }

    closeAccount(number){
        delete this.account[number];
        return number;
    }

    accountReport(){
        for(let i=0; i<this.account.length;i++){
            console.log(this.account[i].toString());
        }
    }

    endOfMonth(){
        for(let i=0; i<this.account.length; i++){
            console.log(this.account[i].endOfMonth());
        }
    }

    toString(){
        return "Accounts"+this.account;
    }
}






