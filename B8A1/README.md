# Assignment: Problem Solving with TypeScript & OOP

This assignment assesses my practical understanding of core TypeScript concepts from Modules 1, 2, and 3—including basic types, optional/default/rest parameters, readonly tuples, interfaces, type narrowing, generics, Promises, and Object-Oriented Programming (OOP).
***
## Problem 1:
Create a function multiplyValue that accepts a number value and an optional number multiplier.

- If multiplier is provided, return value multiplied by multiplier.
- If multiplier is not provided (undefined), return value multiplied by 2 by default.

**Requirements:**
* Handle 0 properly when passed as multiplier (multiplying by 0 must return 0).

***
## Problem 2:
Create a function processInput that accepts a value which may be a string, number, or boolean, and returns a formatted result based on the value's type:

- If the input is a string → trim any leading/trailing spaces and return it in lowercase.
- If the input is a number → return the number multiplied by 10.
- If the input is a boolean → return "Active" if true, or "Inactive" if false

**Requirements:**
* Write the correct union type for the function parameter and the return type.
* Use type narrowing (typeof) to handle each case safely.

***
## Problem 3:
Create a function formatCoordinate that accepts a readonly tuple representing a coordinate and location name in the exact order [latitude, longitude, locationName] ([number, number, string]), and returns a formatted location string.

**Requirements:**
* Apply the readonly modifier to the tuple parameter so it cannot be mutated inside the function.
* Return the exact string format: "Location: [locationName] ([latitude], [longitude])" without rounding the numbers.
## 📚 Blog Posts

I have also completed two technical blog posts:

1. [Type vs Interface](./type-vs-interface.md)
2. [Access-Modifiers-TypeScript](./Access-Modifiers-TypeScript.md)

***
## Problem 4:
Create a generic function concatenateArrays that accepts multiple arrays of the same type T using rest parameters (...arrays: T[][]) and returns a single combined array containing all elements in the order they were passed.

**Requirements:**
* Must use a generic type parameter <T> and rest parameters.
* Do not use any.

***
## Problem 5:
Define an interface Course with the following properties:

> title (string)
> students (number)
> isPublished (boolean)
> Then, create a function getPopularCourses that accepts an array of Course objects and a minStudents number. The function should return a new array containing only the courses where isPublished is true and students is greater than or equal to minStudents.

__Requirements:__
* Define the Course interface with the exact property names and types.
* Do not mutate the original array.

***
## Problem 6:
Write a generic function pluckValues that accepts an array of objects (items: T[]) and a valid property key of those objects (key: K), and returns a new array (T[K][]) containing the values of that specific property from each object in the same order.

**Requirements:**
* Use generics with the keyof constraint (<T, K extends keyof T>).
* Do not use any.

***
## Problem 7:
Create an Employee class and a Manager subclass following these exact specifications:

***Employee class:***
> Has a protected property name (string) and a private property baseSalary (number).
> Constructor accepts (name: string, baseSalary: number) in that exact order.
> Has a method getDetails() that returns "Employee: [name], Base Salary: [baseSalary]".

***Manager class (extends Employee):***
> Adds a private property department (string).
> Constructor accepts (name: string, baseSalary: number, department: string) in that exact order and calls super(name, baseSalary).
> Has a method getRoleInfo() that returns "Manager of [department]: [name]".

**Requirements:**
* Use protected and private access modifiers as specified.
* Return the exact string formats shown in the sample output.

***
## Problem 8:
Create an async function validateAgeAsync that accepts a number age and returns a Promise<string>:

- If age is 18 or above, resolve after 1 second (1000 ms) with the string "Access Granted".
- If age is less than 18, reject immediately with new Error("Access Denied: Must be 18 or older").

**Requirements:**
* Explicitly type the return value as Promise<string>.
* Use new Promise with setTimeout (or async/await) and reject using an Error instance (new Error(...)).

***
## ⚙️ How to Run the Project

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd B8A1
```

### 3. Install TypeScript

```bash
npm install -g typescript
```

### 4. Compile TypeScript

```bash
tsc solutions.ts
```

### 5. Run the compiled JavaScript

```bash
node solutions.js
```

## 🎯 Learning Outcomes

Through this assignment, I practiced:

- TypeScript function typing
- Optional and default parameters
- Union types and type narrowing
- Readonly tuples
- Generic functions
- Interfaces and type constraints
- Classes and inheritance
- Access modifiers
- Promises and asynchronous programming

## 👨‍💻 Author

**MD SOHEL**

GitHub: [My GitHub Profile](https://github.com/ds-sohel)

---

⭐ Thank you for visiting my repository!