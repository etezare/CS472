
String.prototype.filter = function (banned) {
    if (this.includes(banned)) {
        let str = this.toString();
        this.toString = str.replace(banned, "");
    }
    return this.toString;
}



Array.prototype.bubbleSort = function () {
    var is_sorted = false;
    while (!is_sorted) {
        is_sorted = true;
        for (var n = 0; n < this.length - 1; n++) {
            if (this[n] > this[n + 1]) {
                var x = this[n + 1];
                this[n + 1] = this[n];
                this[n] = x;
                is_sorted = false;
            }
        }
    }
    return this;
};





var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}


var Teacher = function () { };
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {

    return this.name + " is now teaching " + subject;
}

var him = new Teacher();

him.initialize("John", 25);
him.teach("Inheritance");
