function Person() {
  this.fullName = "Yaakov";
  this.fav = "Cookies";

  this.describe = function () {
    console.log('this is: ', this);
    console.log(this.fullName + " likes " + this.fav);
  };
}

var yaakov = new Person();
yaakov.describe();

var describe = yaakov.describe;
describe();
describe.call(yaakov);
