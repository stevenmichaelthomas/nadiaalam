class Person {
  constructor(name) {
    this.name = name;
  }

  get fullName() {
    return `Mr. ${this.name}`;
  }
}
