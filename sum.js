function addition(callback,a,b){
  let result = a + b;
  callback(result);
}

function displayAddition(result){
  console.log(result)
}

addition(displayAddition,1,1)