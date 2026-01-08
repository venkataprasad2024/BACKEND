let res=`{"fact":"Among many other diseases, cats can suffer from anorexia, senility, feline AIDS and acne.","length":89}`;
let obj =JSON.parse(res);
console.log(obj.fact);

let obj2={
  name:"Prasad",
  age:25
}
console.log(JSON.stringify(obj2));