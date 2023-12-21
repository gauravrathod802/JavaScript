// destructuring is done on basis of keys in object
let user={
    name: 'gaurav',
    password: "g@123",
    email: "gaurav@email.com"
}

// here mob is undefined so i have assigned a default value to mob

// let{email,name,mob=908797}=user;
// console.log(email,name,mob);

let{...name}=user;
console.log(name);
