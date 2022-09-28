// const person: {
//     name: string;
//     age: number;
// } = {
   
enum Roles { ADMIN, AUTHOR, STUDENT };

const person = {
    name: "Ernesto",
    age: 50, 
    hobbies: ['cooking', 'basketball'],
    role: Roles.ADMIN

}


let favoriteActivities: string[];
favoriteActivities = ['playing', 'cooking'];
//console.log(favoriteActivities);


for (const hobby of person.hobbies)
{
    console.log(hobby.toUpperCase());
}

if (person.role === Roles.ADMIN)
{
    console.log("he's an admin");
    
}