// const name = 'Max';
// let age = 29;
// const hasHobbies = true;



// age = 30;

// const summerizeUser = (userName, userAge, userHasHobby) => {

//     return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' +
//     userHasHobby
//     );
// }

// //const add = a => a + 1;
// const addRandom = () => 1 + 2;


// //console.log(add(1,2));
// //console.log(addOne(1));
// console.log(addRandom());

// console.log(summerizeUser(name, age, hasHobbies));

//-----------------//


// const person = {
//     name: 'Max',
//     age: 29,
//     greet(){
//         console.log('Hi, I am' + this.name);
//     }
// };

// const printName = ({name}) => {
//     console.log(name);
// }

// printName(person);

// const { name, age } = person;
// console.log(name, age);

// person.greet();

// const copiedPerson ={...person};
// console.log(copiedPerson);

// const hobbies = ['Sports', 'Cooking'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// // for (let hobby of hobbies){
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => 'hobby: ' + hobby));
// // console.log(hobbies);
// // hobbies.push('Programming');
// // console.log(hobbies);
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray =  (...args) => { 
//     return args;
// };

// console.log(toArray(1, 2, 3, 4));


//-----------------------------------------//

// const fetchData = callback => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             callback('Done!');
//         }, 1500); 
//     });
//     return promise;
// };


// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData()
//         .then(text => {
//         console.log(text);
//         return fetchData();
//     })
//     .then(text2 => {
//         console.log(text2);
//     })
// }, 2000);

// console.log('Hello!');
// console.log('Hi!');