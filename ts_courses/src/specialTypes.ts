// special types: any, unknown, never, void
// any
// let value: any;
// value = 5;
// value = [];
// value = {};

// function logData(data: any[]) {
//   console.log(data);
// }

// unknown
// function logData(data: unknown) {
//   let value: string;
//   if (typeof data === "string") {
//     value = data;
//   }

//   if (Array.isArray(data)) {
//     data;
//   }
// }

// never
// enum Values {
//   FIRST,
//   SECOND,
//   THIRD, //will be error
// }

// function fn(value: Values) {
//   switch (value) {
//     case Values.FIRST:
//       return 1;
//     case Values.SECOND:
//       return 2;
//     default:
//       const exhaustiveCheck: never = value;
//       return value;
//   }
// }

// fn(Values.FIRST);
// fn(Values.SECOND);

// type RandomName = string & number;

// const value: RandomName = never; //error

// void
// function fn(): void {
//   console.log();
// }

// type Fn = (arg: number, arg2: string) => void;
// check
