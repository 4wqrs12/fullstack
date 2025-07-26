const person1 = {
  name: "Person1",
  food: "pizza",
  sayHello: function() {
    console.log(`My name is: ${this.name}, and my fav food is: ${this.food}`);
  },
  eat: function() {
    return `${this.name} eats ${this.food}. `;
  },
}

person1.sayHello();