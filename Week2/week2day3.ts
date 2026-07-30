// type ID = string | number;

// let userId: ID = 100;
// userId = "us_999";

// type User = {
//     id: number;
//     name: string;
//     email?: string; //optional property
// }

// const admin: User = { id: 1, name: "Amy", email: "amy@gmail.com" };

// console.log(admin);

interface User {
    id: number;
    name: string;
    balance: number;
}

const admin: User = {
    id: 1,
    name: "Alice",
    balance: 1500
}
