/* 
 let js = 'amazing';
 console.log(23+10+8+23-10);

let jsIsFun = true;
console.log(typeof jsIsFun);

 jsIsFun = 'yes';
console.log( typeof jsIsFun);

 */

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
const birthYear = 1991;
const year = 2037;

const Jonas = "I'm " + firstName + ' ' + lastName + 'born in '
               +(year - birthYear) + '.';

console.log(Jonas);

//function declaration 
 const calAge2 = function(birthYear){
 return 2024- birthYear;
 }
    
    //ARROW function 
    const calAge3 = birthYear => 2024 - birthYear;
    const age3 = calAge3(1999);
    console.log(age3);
    
    //ARROW fn for more than one line code 
    const retirementYear = birthYear =>{
    const age = 2024 - birthYear;
    const retirment = 65- age;
    return retirment;
    }
    console.log(retirementYear(1999));

   //using this keyword 

   const dbz =
   {
   firstName:  'Goku',
   lastName: 'Kakrot',
   birthYear: 1999,
   job: 'fighter',
   friends:  ['Vegeta', 'picoolo', 'kirlin'],
   hasCar: false,
  // calAge: function(){
   //console.log(this);
  // return 2024 - this.birthYear;
   //}
   calAge: function(){
		this.age = 2024 - this.birthYear;
		return this.age;
		},
      getSummary:function(){
         return `${this.firstName} is a ${this.calAge()} year old ${dbz.job}, and he has ${this.hasDriverLicense ? 'a':'no'} driver's license.`
         }
		
   };
   
   console.log(dbz.calAge());
   console.log(dbz.age);
   console.log(dbz.getSummary());

   //for loop   
	// for(let rep = 1; rep<=10; rep++){
   //  console.log(`Lift weights for ${rep}`);
    // }

     //printing the array 
     //instead of providing the length as i <5 
     //we use array.length property to print the array 
     const goku= [
	   'Goku',
	   'Kakrot',
	   2025-1999,
	   'fighter',
	   ['Vegeta', 'picoolo', 'kirlin'],
      true 
	   ];
	   
	   for(let i =0; i<goku.length ;i++){
	   console.log(goku[i]);
	   }

      //using two arrays 
      const years =[1997, 1999,2000,2002];
      const ages =[];

      for(let i =0; i<years.length;i++){
         ages.push(2024 - years[i]);

      }
      console.log(ages);

       
	  //loop inside loop - 
	  
	  for(let exercise = 1; exercise < 4; exercise++){
	  console.log(`----Starting Excersie ${exercise}`);
	  for(let rep =1 ; rep <8; rep ++){
	  console.log(`Excersie${exercise}: Lifting weights repetition ${rep}`);
	  }
	  }

     let dice = Math.trunc(Math.random()*6)+1;
	 
	  while(dice !== 6){
	  console.log(`you rolled a ${dice}`); 
	   dice = Math.trunc(Math.random()*6)+1;
      if(dice==6)
     console.log('Loop is about to end...');
	   
   }
    //challenge 
    //function to print max array in string format 
    
    const data1 = [17, 21, 23];
    const data2 = [12, 5, -5, 0, 4];
   
    const printForecast = function(arr){
      let str ='';
    for(let i =0; i<arr.length; i++){
    str += `${arr[i]}°C in ${i+1} days ...`;
    }
    console.log('...'+str);
    };
    
    printForecast(data1);

    //this keyword and method borrowing 
    //this keyword always point to the object that is calling the method 
    const jonas = {
      year : 1999,
      //calAge is method 
      //where this = jonas 
      calcAge: function(){
     console.log(this);
     console.log(2025-this.year); 
      //this.year is better than using jonas.year
      },
      };
      jonas.calcAge();

      const myName = {
         year: 2015,
     };

     myName.calcAge = jonas.calcAge;
     myName.calcAge();

     //primitive vs object 
   let lostName = 'Will';
   let oldName = lostName;
   lostName = 'Deaf';
   console.log(lostName, oldName);
  
   const jessy ={
      firstName: 'Jessica',
      lostName : 'MadMax',
      age: 27,
   };

   const marriedJessy = jessy;
   marriedJessy.lostName = 'Davis';
   console.log('Before marriage:', jessy);
   console.log('After marriage:', marriedJessy);
//o/p both the last name will be Davis 

//SETS
const staff = ['Waiter', 'Chef', 'Waiter','Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);
console.log(new Set(['Waiter', 'Chef', 'Waiter','Manager', 'Chef', 'Waiter']).size);

//MAPS 
const rest = new Map();  //creates an empty map 
rest.set('name','Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, portugal'));
rest.set('categories', ["pasta", "pizza", "zaza", "rissoto"])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false,'We are close :(');

   console.log(rest.get('name'));
   console.log(rest.get(true));
   console.log(rest.get(1));
   
 const time = 21; 
 console.log(rest.get(time > rest.get('open') && time< rest.get('close')));
 console.log(rest.has('categories'));
 rest.delete(2);
 //rest.set([1,2], 'Test');
// console.log(rest);
 //console.log(rest.size);
//console.log(rest.get([1,2])); 
//even thou the array is same with the same elements
//it is not the same objects in the heap in order to make it work 
//we create a new arr and pass it in the map 
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr))
//we can also select DOM object 
rest.set(document.querySelector('h1'), 'heading');
console.log(rest);
console.log(rest.size);


//iterating over maps
// const question = new Map([
//    ['question', 'What is the best programming language in the world'],
//        [1, 'C'],
//        [2, 'C++'],
//        [3, 'C#'],
//        ['correct', 3],
//        [true, 'Correct'],
//        [false, 'Try again'],
// ]);
// console.log(question);

// for(const[key, value] of question){
//    if(typeof key === 'number') console.log(`Answer ${key}:${value}`);   
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));


const gameEvents = new Map([
   [17, '⚽️ GOAL'],
   [36, '🔁 Substitution'],
   [47, '⚽️ GOAL'],
   [61, '🔁 Substitution'],
   [64, '🔶 Yellow card'],
   [69, '🔴 Red card'],
   [70, '🔁 Substitution'],
   [72, '🔁 Substitution'],
   [76, '⚽️ GOAL'],
   [80, '⚽️ GOAL'],
   [92, '🔶 Yellow card'],
]);
// removes the duplicate value
const events = [...new Set(gameEvents.values())];
console.log(events);
//deleting the 64 key value
gameEvents.delete(64);
//finding the average time between the events
const timeee = [...gameEvents.keys()].pop();
console.log(timeee);
console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`);
//looping for
for (const [min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : 'SECOND';
   console.log(`${half}[HALF] ${min}:${event}`);
}

//Strings 
const airline = 'AIR INDIA';
const plane = 'A320';

//without hardcoding 
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));
//slicing
console.log(airline.slice(4)); 
console.log(airline.slice(4, 6));
 
const checkMiddleSeat = function(seat){
    //B and E are middle seats 
    const s = seat.slice(-1);
    if(s === 'B' || s ==="E")
      console.log('You got middle seat');
   else console.log('You got lucky');
}

checkMiddleSeat('11B');
checkMiddleSeat('11C');
checkMiddleSeat('11E');

//chaning the case of the String 
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fixing capitilization in name 
const passenger = 'aMIty';
const passengerLower = passenger.toLowerCase();
const correctPassenger =  passengerLower[0].toUpperCase()+
                          passengerLower.slice(1) ;
console.log(correctPassenger);

//comparing emails of passengers 
const passengeEmail = 'demo@gmail.com';
const loginEmail = ' Demo@Gmail.com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); //removes whitespace and enter
// console.log(trimmedEmail);

//similarly the above code can be written as
const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);
console.log(passengeEmail === normalEmail);

//replacing part of string 
//only replace the very first occurance
const priceUsa = '300.555$' ;
const priceInd =  priceUsa.replace('$' , 'Rs').replace('.',',');
console.log(priceInd);
//replacing all the same words 
const announcment = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcment.replace('door', 'gate'));  
console.log(announcment.replaceAll('door', 'gate'));

//booleans 
const planee = 'Starship 4';
console.log(planee.includes(4));
console.log(planee.includes('4'));
console.log(planee.includes('starship'));
console.log(planee.includes('Starship'));

if(planee.startsWith('Star')&&planee.endsWith('beta')){
   console.log('Part of the New Lineup');
}else console.log('Old spacecraft');


