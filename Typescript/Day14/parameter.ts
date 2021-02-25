//optional parameter

let students=function (id: number,name: string,email?: string){
console.log("ID:",id,"Name:",name);
if(email!=undefined){
    console.log("EMAIL_ID:",email)
}
students(81324,"jayasurya");
students(81326,"jana","jana2345@gmail.com");
}


//default parameter

let prof=function (name: string,college:string="srm"){
    return name+""+college+"!";

}
console.log(prof("surya"));
console.log(prof("niranjan"));
console.log(prof("gokul"))

//rest parameter

let num=function(a:number,...b:number[]):boolean{
    console.log(a);
    console.log(b);
    return true;
}
num(4,5,6,98);

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
