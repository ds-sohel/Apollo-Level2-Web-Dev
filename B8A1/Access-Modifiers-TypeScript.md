# Access Modifiers in TypeScript

In TypeScript, access modifiers and readonly properties help define how class members (properties and methods) can be accessed and modified.

***Access Modifiers***
Access modifiers in TypeScript are used to set the visibility of properties and methods. They provide a way to control the accessibility of members, offering a higher degree of encapsulation.


---
## Public
The member is accessible anywhere. It can be accessed inside the class, outside the class, and in derived classes.


class Car {
    public make: string;

    constructor(make: string) {
        this.make = make;
    }
}

const car = new Car("Toyota");
console.log(car.make);
Output: Toyota

---
## Private

The private access modifier restricts access to the member, making it inaccessible outside the class, even by instances of derived classes, ensuring that the member is used only within the class where it is defined.


class Car {
    private make: string;

    constructor(make: string) {
        this.make = make;
    }

    public getMake(): string {
        return this.make;
    }
}

const car = new Car("BMW");
console.log(car.getMake());
Output: BMW


***
## Protected
The protected access modifier allows a member to be accessed within the class and its derived subclasses, but it remains inaccessible outside the class hierarchy, providing more controlled access than public.


class Car {
    protected make: string;

    constructor(make: string) {
        this.make = make;
    }
}

class SportsCar extends Car {
    public displayMake() {
        console.log(this.make);
    }
}

const car = new SportsCar("Ferrari");
car.displayMake();
Output

Ferrari


***

## Readonly
Readonly properties in TypeScript allow you to set the value only once, either during the initialization or in the constructor. After the initial assignment, the value cannot be changed.


class Car {
    public readonly make: string;

    constructor(make: string) {
        this.make = make;
    }
}

const car = new Car("Toyota");
console.log(car.make);
Output: Toyota
In this example
