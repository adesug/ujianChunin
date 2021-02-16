let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
};
console.log(`data =\n`, data);
//=======================
let name = "adesug";
let email = "adesug@gmail.com";
let hobby = "googling";
data = {...data, name, email, hobby }

console.log(`nama = ${data.name}\n`, `email = ${data.email}\n`, `hobby = ${data.hobby}\n`);
///////////////////////-----------------