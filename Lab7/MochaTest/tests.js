

    describe("sums of total elements in array", function () {

            let expected = 15;
            it(`sum of [1,2,3,4,5] is 15`, function () {
                assert.equal(sum([1,2,3,4,5]), expected);
            });
        

    });




    describe("products of all elements in array", function () {

            let expected = 120;
            it(`product of [1,2,3,4,5] is 120`, function () {
                assert.equal(multiply([1,2,3,4,5]), expected);
            });
        

    });



    describe("reverse String", function () {

            let expected ="Essey";
            it(`reversed of 'yessE' is 'Essey'`, function () {
                assert.equal(reverse(("yessE")), expected);
            });
        

    });





    describe("returns the array of words that are longer than i", function () {

            let expected ="Michael,Abraham,Maharishi";
            it(`filterLongWords(['Essey', 'Michael', 'Abraham', 'Biniam', 'Maharishi'] with i=6 is 'Michael,Abraham,Maharishi' `, function () {
                assert.equal(filterLongWords(['Essey', 'Michael', 'Abraham', 'Biniam', 'Maharishi'], 6), expected);
            });
        

    });