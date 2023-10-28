console.log("before");
// callback functions
/*getUserInfo(1,function(user){
  console.log('User',user);
  console.log('user respostries');
  getUserRespostry(user.name,function(repos){
   console.log(repos);
  })
});*/
//replacing callback function  with promise  function
getUserInfo(1)
.then(user=>getUserRespostry(user.name))
.then(repos=>console.log(repos))
.catch(err=>console.log("Error",err.message));
console.log("after");
// asynchronous code
function getUserInfo(id){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("reading data from database");
      resolve({id:id,name:"jaswinder"});
    },2000);
  });
}
function getUserRespostry(username){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(['repo1','repo2','repo3']);
    }, 2000);
  });
}