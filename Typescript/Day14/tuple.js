var customer = [1, "kishor", "mca", "srm", 21];
console.log(customer);
// acessing my index
console.log(customer[0]);
// length of tuple
console.log(customer.length);
customer[3] = customer[3].concat("college");
console.log(customer);
// add and remove an element to tuple
console.log(customer.push("ktr"));
console.log(customer);
console.log(customer.pop() + "  popped from tuple");
//update the tupe
customer[1] = "shunmuga niranjan";
console.log("updated tuple : " + customer[1]);
var j;
var n = customer;
for (j in n) {
    console.log(n[j]);
}
