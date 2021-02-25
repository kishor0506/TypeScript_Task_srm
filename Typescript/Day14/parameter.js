//optional parameter
var students = function (id, name, email) {
    console.log("ID:", id, "Name:", name);
    if (email != undefined) {
        console.log("EMAIL_ID:", email);
    }
    console.log(students(81324, "jayasurya"));
    console.log(students(81326, "jana", "jana2345@gmail.com"));
};
//default parameter
var prof = function (name, college) {
    if (college === void 0) { college = "srm"; }
    return name + "" + college + "!";
};
console.log(prof("surya"));
console.log(prof("niranjan"));
console.log(prof("gokul"));
//rest parameter
var num = function (a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    console.log(a);
    console.log(b);
    return true;
};
num(4, 5, 6, 98);
// function sum(a:number,...b:number[]):number{
//     let result=a;
//     for(var i=0;i<b.length;i++ ){
//         result=result+b[i];
//     }
//     return
// }
// let result1=sum(3,5)
// let result2=sum(3,5,6,9,10)
// console.log(result1+"\n"+result2)
