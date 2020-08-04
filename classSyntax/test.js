describe("Test Account", function(){
    let account=new Account(1);

    it("Testing getNumber", function(){
        assert.equal(200, new Account(200).getNumber());
    });

    it("Testing deposit", function(){
        account.deposit(500);
        assert.equal(500, account.getBalance());
    });

    it("Testing withdrawal and getBalance", function(){
        account.withdraw(100);
        assert.equal(400, account.getBalance());
        
    });
        
});

describe("Test SavingsAccount", function(){

    let saving=new SavingsAccount(2,0.5);

    it("Testing get Interest of SavingAccount", function(){
        assert.equal(0.5, saving.getInterest());
    });

    it("Testing set Interest of SavingAccount", function(){
        saving.setInterest(1.5);
        assert.equal(1.5, saving.getInterest());
    });

    it("Testing addInterest of SavingAccount", function(){
        saving.deposit(300);
        saving.addInterest();
        assert.equal(304.5, saving.getBalance());
    });

    it("Testing endOfMonth of SavingAccount", function(){
        assert.equal("Interest added in to SavingsAccount:"+ saving.getNumber() +" balance: "+ saving.getBalance() +"interest:"+ (saving.getBalance() * saving._interest / 100),saving.endOfMonth());
    });
});

describe("Test CheckingAccount", function(){

    let checking=new CheckingAccount(3,500);

    it("Testing get overdraft of CheckingAccount", function(){
        
        assert.equal(500, checking.getOverdraft());
    });

    it("Testing set overdraft of CheckingAccount", function(){
        checking.setOverdraft(200);
        assert.equal(200, checking.getOverdraft());
    });

    it("Testing Insufficient funds", function(){
        
        assert.equal("Insufficient funds", checking.withdraw(1000));
    });

    it("Testing endOfMonth of CheckingAccount", function(){
               
        assert.equal("Warning, low balance CheckingAccount:"+ checking.getNumber() +"balance: "+ checking.getBalance()+" overdraft limit:"+checking._overdraft, checking.endOfMonth());
    });

});

describe("Test Bank", function(){
    
    let bank=new Bank();

    it("Testing addAccount of Bank", function(){
               
        assert.equal(1, bank.addAccount());
    });

    it("Testing addSavingsAccount of Bank", function(){
               
        assert.equal(2, bank.addSavingsAccount(1.5));
    });

    it("Testing addCheckingAccount of Bank", function(){
               
        assert.equal(3, bank.addCheckingAccount(650,500));
    });
    
    it("Testing closeAccount of Bank", function(){
               
        assert.equal(3, bank.closeAccount(3));
    });
});