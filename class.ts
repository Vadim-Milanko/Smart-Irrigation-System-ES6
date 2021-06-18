// public
// private
// protected

class Student {
  name: string;
  year: number;
}

class User {
  public name: string;
  public year: number;
}
//create class
class Users {
  static phone = 12345;

  public name: string;
  private nickName: string;
  protected age: number = 20;
  readonly pass: number;

  public constructor(name: string, nickName: string, pass: number) {
    this.name = name;
    this.nickName = nickName;
    this.pass = pass;
  }

  public getPass(): string {
    return `${this.name}${this.age}`;
  }

  setNickName(nickName: string) {
    this.nickName = nickName;
  }
  set myNickName(nickName: string) {
    this.nickName = nickName;
  }
}
//===========
function name(a, b = 3) {
  return a + b
}

name(2)
//=====================
const user = new Users('Tom', 'Tommy', 100);
Users.phone; // 12345
user.name; //Tom
user.nickName;
user.age;
user.pass = 200;
user.getPass(); //Tom20
user.setNickName('Tom-1');
user.myNickName = 'Tom-2';

class Users1 {
  //modificators!!!!!!!
  constructor(
    public name: string,
    private nickName: string,
    protected age: number,
    readonly pass: number
  ) { }

  getPass(): string {
    return `${this.name}${this.age}`;
  }
  setNickName(nickName: string) {
    this.nickName = nickName;
  }
  set myNickName(nickName: string) {
    this.nickName = nickName;
  }
}
const user1 = new Users1('Tom', 'Tommy', 24, 100);
user1.name; //Tom
user1.nickName;
user1.age;
user1.pass;
user1.getPass(); //Tom24
user1.setNickName('Tom-1');
user1.myNickName = 'Tom-2';
//---------------------------------------------------------
//extends

class Field {

  constructor(public width: number, public length: number) { }

  getSquare(): string {
    return `Square = ${this.width + this.length}`
  }
}

class ReserveField extends Field {

  constructor(public width: number, public length: number, public surface: string) {
    super(width, length)
  }
}
let newField = new ReserveField(100, 200, 'grass')
console.log(newField); // 100, 200, 'grass'
console.log(newField.getSquare()); // "Square = 20000"

/**
 * Abstract Class 
 */
//================

//modules
//File 'User.ts'

export const name: string = 'Bob';
export const age: number = 20;

export const fullData = (name: string, age: number) => `${name}: ${age}`;

//File 'Student.ts'

import { fullData, name, age } from "./User";
const myName = fullData('Sam', 30); // Sam: 30
//=============================================================

//instanceof
obj instanceof Class

class Rabbit { }
let rabbit: Rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit); // true

//=============================

abstract class Smartphone {
  constructor(public name: string, public price: number) { }

  showName(): string {
    return `My name is: ${this.name}`
  }
    abstract getPrice(): string;
}



let newPhone = new Smartphone;

//--------------------------

class Nokia extends Smartphone {
  constructor(name: string, price: number, model: string) {
    super(name, price)
  }

  getPrice(): string {
    return `Price: ${this.price}`
  }
}
let nokia5130 = new Nokia('Nokia', 100, '5130')
console.log(nokia5130);

//---------------------------





class Iphone extends Smartphone {
  constructor(name: string, price: number, apple: boolean) {
    super(name, price)
  } 
}

let iphone12 = new Iphone('Iphone', 1000, true);
console.log(iphone12);

///////////////////////


/////////////////
