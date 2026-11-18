//? Problem 1

const multiplyValue = (value: number, multiplier?: number) => {
    
    if (multiplier === 0){
        return 0;
    }else if (!multiplier) {
        return value * 2;
    } else {
        return value * multiplier;
    }
}

console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));

//? Problem 2

function processInput (values: string | number | boolean) {
    if (typeof values === "string"){
     return values.trim().toLowerCase();   
    } else if (typeof values === "number") {
        return values * 10;
    } else if (typeof values === "boolean") {
        if (values === true){
            return "Active"
        } else {
            return "Inactive"
        }
    }
}

processInput("  TypeScript  ");
processInput(7);
processInput(true);
processInput(false);


//? Problem - 3

const formatCoordinate = (arr: readonly [number, number, string]) => {
    console.log(`Location: ${arr[2]} (${arr[0]}, ${arr[1]})}`);
}

formatCoordinate([23.81, 90.41, "Dhaka"]);
formatCoordinate([22.35, 91.78, "Chittagong"]);

//? Problem 4
//* Concatenate Array

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

//? Problem 5

interface Course{
    title: string,
    students:number,
    isPublished: boolean
}

function getPopularCourses(
    courses: Course[],
    minStudents: number
): Course[] {
    return courses.filter(
        course => course.isPublished && course.students >= minStudents
    );
}


const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80));


//? Problem 6

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));



//? Problem 7

class Employee {
    protected name: string;
    private baseSalary: number;

    public constructor (name: string, baseSalary: number) {
        this.name = name,
        this.baseSalary = baseSalary
    }

    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }

}

class Manager extends Employee {
    private department: string;

    constructor (name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`
    }
}

const manager = new Manager("Alice", 50000, "Engineering");

console.log(manager.getDetails());
console.log(manager.getRoleInfo());


//? Problem 8


async function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        } else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    });
}


validateAgeAsync(20)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });
    
validateAgeAsync(15)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error.message);
    });