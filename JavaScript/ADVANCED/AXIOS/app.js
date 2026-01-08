let url ="https://catfact.ninja/fact";
 

let btn=document.getElementById("btn");

let dat =btn.addEventListener("click",async()=>{
  let res= await axios.get(url);
  let data= await res.data;
fact.innerHTML=data.fact;
});

// fact.innerHTML=dat;



