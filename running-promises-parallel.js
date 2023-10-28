const p1=new Promise((resolve,reject)=>{
  // kick off asychronous code
  setTimeout(()=>{
    console.log("kick off code of first promise");
    resolve(1);
  },2000);
});
const p2=new Promise((resolve,reject)=>{
  // kick off asychronous code
  setTimeout(()=>{
    console.log("kick off code of second promise");
    resolve(2);
  },2000);
});
//consuming all promises parallel
Promise.all([p1,p2])
.then(result=>console.log(result))
.catch(err=>console.log("error",err.message));