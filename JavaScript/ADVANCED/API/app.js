let url ="https://catfact.ninja/fact";
 
async function getdata(){
  let res=await fetch(url);
  let data=await res.json();
  console.log(data.fact);
    let res2=await fetch(url);
  let data2=await res2.json();
  console.log(data2.fact);
}console.log("Orewa Pain");
getdata();