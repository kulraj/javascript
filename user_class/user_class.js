function User(name, age) {
    "use strict";
    /*global alert*/
    this.name = name;
    this.age = age;
    this.compare = function (user2) {
        if (this.age > user2.age) {
            alert(this.name + " is older than " + user2.name);
        } else {
            alert(user2.name + " is older than " + this.name);
        }
    };
}

function initialize() {
    "use strict";
    var user1, user2;
    user1 = new User("abc", 30);
    user2 = new User("xyz", 45);
    user1.compare(user2);
}
