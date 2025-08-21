// let isDone: boolean = false;

// let decimal: number = 6;
// let float: number = 3.14;
// let hex: number = 0xf00d;
// let binary: number = 0b1010;
// let octal: number = 0o744;

// let color: string = "blue";

// let empty: null = null;
// let notParam: undefined = undefined;

// const num = 10;
// const str = 'Some string';
// const bool = true;
// const empty = null;
// const notParam = undefined;

// function foo (num: number, str: string, bool: boolean, empty: null) {
//     // Some logic
// };

// function foo(num = 10, str = 'Some string', bool = true, empty = null) {
//     // Some logic
// };

// const obj: object = {};

// const obj: {} = {};

// let user = {
//     name: "Tom";
//     age: 30
// };

// let user: { name: string; age: number } = {
//     name: "Tom",
//     age: 30
// };

// let user: { name: string; age: number } = {
//     age: 30,
// };  //error

// let userNameLikeNumber: { name: string; age: number } = {
//     name: 10,
//     age: 30,
// } //error

// type User = {
//     name: string;
//     age: number;
// };

// let user: User = {
//     name: 'Tom',
//     age: 30,
// };

// let userJack: User = {
//     name: 'Jack',
//     age: 25,
// };

// interface User {
//     name: string;
//     age: number;
// }

// let user: User = {
//     name: 'Tom',
//     age: 30,
// };

// let arrString: string[];

// arrString = ['Text', 1]; //error

// let arrNumber: number[];

// arrNumber = [1. 'Text'];

// let matrix: number[][] = [[1, 2], [3, 4]];

// let mixed: (number | string)[] = [1, 'two'];

// let numbers: Array<number> = [1, 2, 3, 4, 5];

// type User = {
//     name: string;
//     age: number;
// };

// let users: User[] = [
//     { name: 'Tom', age: 30 },
//     { name: 'Jack', age: 25 },
//     { name: 'Alice', age: 32 }
// ];

// type User = {
//     name: string;
//     age: number;
// };

// let users: User[] = [
//     { name: 'Tom', age: 30 },
//     { name: 'Jack', age: 25 },
//     { name: 'Alice', age: 32 },
// ];

// type User = {
//     name: string;
//     age: number;
// };

// let users: User[] = [{ name: 'Tom', age: '30' }]; //error

// let arrAny: any[];

// arrAny = [123, 'TEXT', { name: 'Tom' }, [1, 2, 3]];

// let notSure: any = 4;
// notSure = 'maybe a string instead';
// notSure = false;
// notSure = {};

// let num: number;

// num = notSure;

// let data: any = fetchData();

// function fetchUserData(id: string, callback: (data: any) => void): void {
//     // some request
//     const responseData = { name: 'Tom' };

//     callback(responseData);
// }

// // Use of the function
// fetchUserData('123', (data) => {
//     console.log(data.name); //there is no error even though name doesn't exist
// });

// let notSure: unknown = 4;
// notSure = 'maybe a string instead';
// notSure = false;

// let num: number;

// num = notSure;

// function fetchUserData() {
//     return 'Tom';
// }

// let userData: unknown = fetchUserData();
// if (typeof userData === 'string') {
//     console.log(userData.toUpperCase());
// }

// let tupleType: [string, boolean];
// tupleType = ['hello', true]; //ok
// tupleType = [true, hello]; //error
// tupleType = ['hello', true, true]; //error

// let tuple: [string, ...number[]];

// tuple = ['hello', 42, 100, 200]; //ok

// enum Role { ADMIN, USER };

// const person = {
//     role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
//     console.log('Role: ', Role.ADMIN);
// }

// enum UserStatus {
//     Active = 'ACTIVE',
//     Inactive = 'INACTIVE',
//     Banned = 'BANNED',
// }
// let status: UserStatus = UserStatus.Active;

// const enum Test {
//     A = 1,
//     B = 2,
// }

// for (let item in Test) {
//     console.log(item);
// }

// let mixedType: string | number | boolean;

// function combine(param1: number | string, param2: number | string) {
//     return param1 + param2; //error
// }

// type Employee = {
//     name: string;
//     id: number;
// };

// type Manager = {
//     employees: Employee[];
// }

// type CEO = Employee & Manager;

// const ceo: CEO = {
//     name: 'Alice',
//     id: 1,
//     employees: [
//         {
//             name: 'Bob',
//             id: 2,
//         },
//     ],
// };

// type OneOrTwo = 1 | 2;
// let value: OneOrTwo;
// value = 1;
// value = 2;
// value = 3; //error

// Return type
// function greet(): string {
//   return "Hello, world!";
// }
// let result = greet();

// const greet = (): string => {
//   return "Hello, world!";
// };
// let result = greet();

// type User = {
//   id: number;
//   name: string;
// };

// const getUserNames = (users: User[]): string[] => {
//   return users.map((user) => user.name);
// };

// const users: User[] = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// let result = getUserNames(users);
// console.log(result);

// export { };

// Void
// function logMessage(message: string): void {
//     console.log(message);
// }

// logMessage('Hello, world!';
// )
// export { };

// Never
// function throwError(message: string): never {
//   throw new Error(message);
// }

// function infiniteLoop(): never {
//     while (true) {}
// }
// export { };

// Function Type
// let myFunc: (firstArg: string, secondArg: number) => void;
// myFunc = (first: string, second: number) => {
//     console.log(`First: ${first}, Second: ${second}`);

// };
// myFunc('Hello', 42);
// export { };

// Custom Types
// type User = {
//     id: number;
//     name: string;
// }

// const user: User = {
//     id: 1,
//     name: "Alice",
// }

// Optional parameters and properties
// function greet(name?: string) {
//     if (name) {
//         return `Hello, ${name}!`;
//     } else {
//         return `Hello!`;
//     }
// }

// console.log(greet('Alice'));
// console.log(greet());
// export { };

// Interface and Type
// interface Animal {
//     name: string;
// }

// type Animal = {
//     name: string;
// }

// interface Dog extends Animal {
//     bark: string;
// }

// mix Interface and type
// type Cat = {
//     meow: () => string;
// };

// interface Dog {
//     bark: () => string;
// }

// type DogOrCat = Dog | Cat;
// type DogAndCat = Dog & Cat;

// export { };

// Interface for function
// interface AddFunc {
//     (n1: number, n2: number): number;
// }

// let add: AddFunc;

// add = (n1: number, n2: number) => {
//     return n1 + n2;
// }

// Advanced types
//typeof

// type ComplexType = string | number;

// function combine(a: ComplexType, b: ComplexType) {
//     if (typeof a === 'string' || typeof b === 'string') {
//         return a.toString() + b.toString();
//     }
//     return a + b;
// }

// export { };

// In
// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type AdminOrEmployee = Admin | Employee;

// function printDetails(obj: AdminOrEmployee) {
//   console.log(`Name: ${obj.name}`);

//   if ("privileges" in obj) {
//     console.log(`Privileges: ${obj.privileges.join(", ")}`);
//   }

//   if ("startDate" in obj) {
//     console.log(`Start Date: ${obj.startDate}`);
//   }
// }

// export {};

// Instanceof
// class Car {
//     drive() {
//         console.log('Driving a car...');
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...');
//     }

//     loadCargo(amount: number) {
//         console.log(`Loading cargo: ${amount}`);
//     }
// }

// // Define your type

// type Vehicle = Car | Truck;

// // Create your instances
// const carInstance = new Car();
// const truckInstance = new Truck();

// // Function to use vehicle
// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();

//     if (vehicle instanceof Truck) {
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(carInstance);
// useVehicle(truckInstance);

// export { };

// Type Casting (Type Conversion)
// let someValue: unknown = 'this is a string';
// let strLength1: number = (<string>someValue).length;
// // or
// let strLength2: number = (someValue as string).length;
// let strLength3: number = someValue.length;

// export { };

// Casting for HTMLElement
// const input = <HTMLInputElement>document.getElementById('inputEmail');
// input.value = 'test@test.ts';
// export { };
// // or
// const input = document.getElementById('inputEmail') as HTMLInputElement;
// input.value = 'test@test.ts';

// export { };

// const input = document.getElementById('inputEmail');

// if (input) {
//     (input as HTMLInputElement).value = 'test@test.ts';
// }

// export { };

// Index Properties
// type IndexType = {
//     [prop: string]: string;
// }

// type Person = {
//     name: string;
//     [x: string]: string;
// };

// const user: Person = {
//     name: 'Alex',
//     gender: 'MAN',
//     country: 'Ukraine',
// };

// export { };

// type User = {
//     id: string;
//     name: string;
//     email: string;
// };

// type Users = {
//     [id: string]: User;
// };

// let users = Users = {};

// let user: User = {
//     id: '1',
//     name: 'Alex',
//     email: 'alex@example.com',
// };

// users[user.id] = user;

// export { };

// Generics
// let arr: Array<string | number> = [];
// arr = ['str', 10, true];

// export { };

// const promise: Promise<string> = new Promise((resolve) => {
//     setInterval(() => {
//         resolve('Done!');
//     }, 1000);
// });

// promise.then((data) => {
//     console.log(data);
// });

// export { };

// Generic function/method
// function identify<T>(arg: T): T {
//     return arg;
// }

// function firstElement<T>(arr: T[]): T {
//     return arr[0];
// }

// let numbers = [1, 2, 3, 4, 5];
// let firstNum = firstElement(numbers);

// let strings = ['a', 'b', 'c', 'd'];
// let firstStr = firstElement(strings);

// export { };

// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }

// const merged = merge({ name: 'Alisa' }, { age: 28 });

// merged.name;

// export { };

// function merge<T, U>(objA: T, objB: U): T & U {
//   return Object.assign({}, objA, objB);
// }

// const merged = merge({ name: "Alisa" }, { age: 28 });

// merged.name;

// export {};

// type Person = {
//     name: string;
// };

// type AdditionFields = {
//     age: number;
// }

// function merge<T, U>(objA: T, objB: U): T&U {
//     return Object.assign({}, objA, objB);
// }

// const merged = merge<Person, AdditionFields>({ name: 'Alisa' }, { age: 28 });
// merged.name;

// export { };

// Extends
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }

// const merged = merge({ name: 'Alisa' }, 'TEXT');

// merged.name;

// export { };

// type Length = {
//     length: number;
// };

// function getLength<T extends Length>(str: T) {
//     return str.length;
// }

// getLength('text');
// getLength([1, 2, 3]);
// getLength(100); //Error

// export { };

// function arrayLogger<T extends Array<string>>(array: T): void {
//   array.forEach((item) => console.log(item));
// }

// arrayLogger(["Hello", "World"]);
// arrayLogger([1, 2, 3]); //Error

// export {};
