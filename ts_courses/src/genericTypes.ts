// interface MetaData {}

// interface User {
//   username: string;
// }

// interface Article {
//   title: string;
// }

// interface ApiResponse<Data, Meta> {
//   status?: "error" | "success";
//   meta?: MetaData;
//   requestId?: string;
//   data: Data;
//   value: Value;
// }

// // interface MetaData {
// //   timestamp: string;
// // }

// // const responseFromUserApi: ApiResponse<User, MetaData> = {
// //   data: {
// //     username: "Veronika",
// //   },
// // };

// // const responseFromArticleApi: ApiResponse<Article> = {
// //   data: {
// //     title: "123",
// //   },
// // };
// interface Tree<T> {
//   id: string;
//   value: T;
//   children: Tree<T>[] | null;
// }

// const treeNode: Tree<User> = {
//   id: "10",
//   value: {
//     username: "123",
//   },
//   children: [
//     {
//       id: "11",
//       value: {
//         username: "123",
//       },
//       children: null,
//     },
//   ],
// };
