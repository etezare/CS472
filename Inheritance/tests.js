describe("All tests",function(){
   
    it("Given, This house is not nice!, returns This house is nice!  ", function(){
        
        assert.equal("This house is  nice!","This house is not nice!".filter('not'));
    });

    
    
    it("[6,4,0, 3,-2,1] bubble sort, sorts element in array and returns [-2,0,1,3,4,6]", function(){
        
        assert.equal('-2,0,1,3,4,6',([6,4,0, 3,-2,1].bubbleSort().toString()))
    });
    
    
    
    it("given teacher name John and subject Inheritance,  and returns  John is now teaching Inheritance  ", function(){

        Person.prototype.initialize("John", 25);
        
        assert.equal("John is now teaching Inheritance",Teacher.prototype.teach("Inheritance"));
    });

    
});
