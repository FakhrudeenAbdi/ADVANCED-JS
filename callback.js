function hello(callback){
  setTimeout(function(){
    console.log("Hello");
    callback();

  },3000)
}