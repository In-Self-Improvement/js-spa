class Parent {
  static print() {
    console.log(this.name);
  }
}

class Child extends Parent {
  static print() {
    super.print();
    console.log("child override");
  }
}
const parent = new Parent();
parent.name = "parent";
Child.print();
