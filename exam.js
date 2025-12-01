//   1=Creating Objects Using Object Literal

// let student={
//     name:'Amina',
//     age:20,
//     course:'Data science',
// }
// console.log(student)

// let carDetails={

//     brand:'Tayota',
//     model:'carolla',
//     year:2020,
// }
// console.log(carDetails)

// let phone={
//     company:'samsung',
//     storage:'128GB',
//     Bettery:'85%'
// }
// console.log(phone)


//  2=Creating Objects Using Constructor Func..

// function Employee(Name,salary,role){
//     this.Name=Name;
//     this.salary=salary;
//     this.role=role;
// }
// emp1=new Employee('Khalid',500,'Manager')
// console.log(emp1)

// function product(name,price,inStock){
//     this.name=name;
//     this.price=price;
//     this.inStock=inStock;
// }
// product1= new product('laptop',1200,'true')
// console.log(product1)

// function book(title,author,pages){
//     this.title=title;
//     this.author=author;
//     this.pages=pages;
// }
// book1=new book('JavaScript Basics','John Doe',250)
// console.log(book1)

// 3=Creating Objects Using ES6 Class

// class Teacher{
//     constructor(tName, subject , experience){
//         this.tNameame=tName;
//         this.subject=subject;
//         this.experience=experience;
//     }
// }

// teacher1=new Teacher("Fatima ", "Math", 5);
// console.log(teacher1)



//  class bankAccount{

//     constructor(accountNumber,ownerName,Balance){
//         this.accountNumber=accountNumber;
//         this.ownerName=ownerName;
//         this.Balance=Balance
//     }

//  }
//  Account1= new bankAccount('Ac12345','Abdirahman',300)
//  console.log(Account1)

// class Animal{
//     constructor(type,color,age){
//         this.type=type;
//         this.color=color;
//         this.age=age;
//     }
// }Animal1=new Animal('cat','white',2)
// console.log(Animal1)
    
// 4= Accessing & Updating Elements
// let laptop={
//     brand:'Dell',
//     Ram:'8GB',
//     price:700,
// }
// console.log(laptop.brand)
// laptop.Ram='128GB'
// console.log(laptop.Ram)

// let userProfile={
//     userName:'Ali2025',
//     email:'ali@example.com',
//     age: 22
// } 
// console.log(userProfile.email)
// userProfile.email='ali.new@example.com'
// console.log(userProfile.email)

// let hotelRoom={
//     roomNumber: 105,
//     price: 50,
//     type: 'single'
// }
// console.log(hotelRoom.price)
// hotelRoom.price=40
// console.log(hotelRoom.price)
   
//   5=Adding New Elements (Dot & Bracket)

// let car={
//     brand:'Honda',
//     model:'civic',
//     year:2019,
// }
// car.owner='Omar'
// car['lastServiceDate']='2025-01-01'
// console.log(car)

let student={
    name:'Maryan',
    grade:'A',
    school:'Af-baro Academy'
}
student.age=18,
student['favorite-subject']='physics'
console.log(student)

let shop={
    iteamName:'Milk',
    price:2,
    category:'food',
}
shop.quantity=30,
shop['discount-percentage']=10
console.log(shop)
