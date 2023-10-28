const p=new Promise((resolve,reject)=>{
  setTimeout(()=>{
   // resolve(1);    // if asynchronous code generate result
    reject(new Error("message"));  //if asychronous code generate error
  })
});
p
 .then(result=>console.log("Result "+result))
 .catch(err=>console.log(err));
 