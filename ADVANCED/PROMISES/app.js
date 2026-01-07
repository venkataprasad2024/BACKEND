function saveTdb(data){
  return new Promise((resolve,reject)=>{
    let guess=Math.floor(Math.random()*10)+1;
    if(guess<5){
      resolve("Data saved successfully");
    }else{
      reject("Failed to save data");
    }
  });
}
saveTdb({task:"Learn Promises"}).then(()=>{
  console.log("Data1 saved successfully");
  return saveTdb({task:"Learn Async/Await"});
}).then((result)=>{
  console.log("Data2 saved successfully");
  console.log("result is ",result);
  return saveTdb({task:"Learn Callbacks"});
}).then(()=>{
  console.log("Data3 saved successfully");
  
}).catch((error)=>{
  console.log("Failed to save data");
  console.log("Error is ",error);
})