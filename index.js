console.log("before");
getUserInfo(1,function(user){
  console.log('User',user);
  console.log('user respostries');
  getUserRespostry(user.name,function(repos){
   console.log(repos);
  })
});
//console.log(user);  // this statement will show undefined 
console.log("after");
// asynchronous code
function getUserInfo(id,callback){
  setTimeout(()=>{
    console.log("reading data from database");
    callback({id:id,name:"jaswinder"});
  },2000);
}
function getUserRespostry(username,callback){
  console.log(username);
  setTimeout(() => {
    callback(['repo1','repo2','repo3']);
  }, 2000);
}