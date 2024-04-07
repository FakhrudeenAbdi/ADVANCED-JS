function greetings(callback) {
  setTimeout(function () {
    console.log("Good Morning Everyone");
    callback();
  }, 1000);
}


function welcome(callback) {
  setTimeout(function () {
    console.log("Welcome To Our Class Today");
    callback();
  }, 1500);
}


function presentation(callback) {
  setTimeout(function () {
    console.log("Start The Assignment Presentation");
    callback();
  }, 5000);
}

function study(callback){
  return new Promise ((resolve,reject)=>{
    setTimeout(function(){
      const study = true;
      if (studydone){
        resolve("start the class today")
        else{
          reject("start the class today")
        }

      })
      
    })
  }
  
 

function questions(callback) {
  setTimeout(function () {
    console.log("Ask Any Questions");
    callback();
  }, 2000);
}

function bye(callback) {
  setTimeout(function () {
    console.log("Have a good afternoon");
    callback();
  }, 500);
}

greetings(function(){
  welcome(function(){
    presentation(function(){
      study(function(){
        questions(function(){
          bye(function(){
            console.log("Class Done")

          })
        })
      })
    })
  })
})