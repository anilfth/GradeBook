"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let a="hi shivshankar";
// console.log(a);
// // static type checking and intellisense
// let isBeginner:boolean=true;
// let total:number=34;
// let name:string='good mornning';
// console.log(name);
// console.log(total);
// let n: null=null;
// let u: undefined=undefined;
// let list1:number[]=[1,2,3,];
// let list2:Array<number>=[1,2,3];
// let list3:string[]=['Good','Better'];
// // tuple
// let person1:[string,number]=['shiv',34];
// //enum
// enum Color{red=10,green,blue};
// let c:Color=Color.green;
// console.log(c);
// //Any
// //let newVar:any=10;
// //newVar.name;
// //newVar();
// // unknown
// let var1:unknown='aman';
// //console.log(var1);
// (var1 as string).toUpperCase();
// // union of types
// let multiType:number | boolean;
// multiType=20;
// multiType=true;
// //multiType='hello';
// //Second exampleof enum
// const enum FieldNameEnum{
//     FirstField="Field One",
//     SecondField="Field Two"
// };
// let x:FieldNameEnum;
// x=FieldNameEnum.FirstField;
// x=FieldNameEnum.SecondField;
// // error not assignable to FileName
// //x='str';
// // cannot assign
// //FieldNameEnum.FirstField='str';
// //compared to object
// const FieldName={
//     FirstField:"Field One",
//     SecondField:"Field Two"
// };
// let y:string;
// y=FieldName.FirstField;
// y=FieldName.SecondField;
// //oopps ot works
// y='str';
// //oops it works
// FieldName.FirstField='str';
// functions in typescript
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add(4);
var p = {
    firstName: 'himanshu',
    lastName: '34',
};
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
fullName(p);
function fullName1(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
fullName1(p);
