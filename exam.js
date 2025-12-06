//   1=Creating Objects Using Object Literal
// a-
// let student={
//     name:'Amina',
//     age:20,
//     course:'Data science',
// }
// console.log(student)

// b-
// let carDetails={

//     brand:'Tayota',
//     model:'carolla',
//     year:2020,
// }
// console.log(carDetails)

// c-
// let phone={
//     company:'samsung',
//     storage:'128GB',
//     Bettery:'85%'
// }
// console.log(phone)


//  2=Creating Objects Using Constructor Func..

// a-
// function Employee(Name,salary,role){
//     this.Name=Name;
//     this.salary=salary;
//     this.role=role;
// }
// emp1=new Employee('Khalid',500,'Manager')
// console.log(emp1)

// b-
// function product(name,price,inStock){
//     this.name=name;
//     this.price=price;
//     this.inStock=inStock;
// }
// product1= new product('laptop',1200,'true')
// console.log(product1)

// c-
// function book(title,author,pages){
//     this.title=title;
//     this.author=author;
//     this.pages=pages;
// }
// book1=new book('JavaScript Basics','John Doe',250)
// console.log(book1)

// 3=Creating Objects Using ES6 Class

// a-
// class Teacher{
//     constructor(tName, subject , experience){
//         this.tNameame=tName;
//         this.subject=subject;
//         this.experience=experience;
//     }
// }

// teacher1=new Teacher("Fatima ", "Math", 5);
// console.log(teacher1)

// b-
//  class bankAccount{

//     constructor(accountNumber,ownerName,Balance){
//         this.accountNumber=accountNumber;
//         this.ownerName=ownerName;
//         this.Balance=Balance
//         this.deposit=function (){
//             let money=parseInt(prompt("enter amount to deposit for", this.ownerName ));
//             this.Balance+=money;}

//                     this.withDrow=function (){
//          let   money=parseInt(prompt("enter money to withdrow"))
//          alert((money>this.Balance)? "insuficent balance":this.Balance-=money )

//     }}}
//     customer1=new bankAccount("AC111", "Omar Hassan", 300);
// alert(customer1.Balance);
// customer1.deposit()
// alert(customer1.Balance,"after deposit");
// customer1.withDrow()
// alert(customer1.Balance,"after withDrow")
// customer2=new bankAccount("AC112", "roble hassan", 100);
// customer2.deposit()
// console.log(customer2)


// c-
// class Animal{
//     constructor(type,color,age){
//         this.type=type;
//         this.color=color;
//         this.age=age;
//     }
// }Animal1=new Animal('cat','white',2)
// console.log(Animal1)
    
// 4= Accessing & Updating Elements

// a-
// let laptop={
//     brand:'Dell',
//     Ram:'8GB',
//     price:700,
// }
// console.log(laptop.brand)
// laptop.Ram='128GB'
// console.log(laptop.Ram)

// b-
// let userProfile={
//     userName:'Ali2025',
//     email:'ali@example.com',
//     age: 22
// } 
// console.log(userProfile.email)
// userProfile.email='ali.new@example.com'
// console.log(userProfile.email)
 
// c-
// let hotelRoom={
//     roomNumber: 105,
//     price: 50,
//     type: 'single'
// }
// console.log(hotelRoom.price)
// hotelRoom.price=40
// console.log(hotelRoom.price)
   
//   5=Adding New Elements (Dot & Bracket)

// a-
// let car={
//     brand:'Honda',
//     model:'civic',
//     year:2019,
// }
// car.owner='Omar'
// car['lastServiceDate']='2025-01-01'
// console.log(car)

// b-
// let student={
//     name:'Maryan',
//     grade:'A',
//     school:'Af-baro Academy'
// }
// student.age=18,
// student['favorite-subject']='physics'
// console.log(student)

// c-
// let shop={
//     iteamName:'Milk',
//     price:2,
//     category:'food',
// }
// shop.quantity=30,
// shop['discount-percentage']=10
// console.log(shop)

// 6-Iterating Through Objects

// a-
// let resturent={
//     burger: 5,
//     pizza: 8,
//     juice: 3,
// }

// for (let item in resturent) {
//   console.log(item + ": $" + resturent[item])
// }

// b-
// let cityInfo={
//     population: 500000, 
//     mayor: "Hassan", 
//     area: "200 sq km",
// }
// for (let info in cityInfo){
//     console.log( 'the' + info+" is :"+cityInfo[info])
// }

// c-
let schedule={
    math: "8:00 AM", 
    english: "10:00 AM", 
    science: "1:00 PM"
}
for(let clasrom in schedule){
    console.log(clasrom + "is" + schedule[clasrom])
}











// 7- Converting Objects to JSON & JSON to Objects

// a-Object to JSON
// let movie={
//     title: 'Inception', 
//     duration: '2h 30m', 
//     rating: 9
// }
// let JsonString=JSON.stringify(movie)
// console.log(JsonString)

// b-JSON to object
// let jYsonData='{"name":"Sara","age":25,"country":"Kenya"}'
// let person=JSON.parse(jYsonData)
// console.log(person)

// c- object to JSON and back to an object
// let weather={
//     temperature: 32, 
//     humidity: "70%", 
//     condition: "Sunny",
// }
// let jysString=JSON.stringify(weather)
// console.log(jysString)
// let finalObject=JSON.parse(jysString)
// console.log(finalObject)