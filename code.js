function challenge1(callback) {
  setTimeout(function () {
    console.log("coding on to-do list app");
    callback();
  }, 1000);
}

function challenge2(callback) {
  setTimeout(function () {
    console.log("coding on events and evenlistners");
    callback();
  }, 2000);

}

function challenge3(callback) {
  setTimeout(function () {
    console.log("coding on event propagation");
    callback();
  }, 3000);
}

function challenge4(callback) {
  setTimeout(function () {
    console.log("creating a rock paper scissors game");
    callback();
  }, 5000);
}


challenge1(function () {
  challenge2(function () {
    challenge3(function () {
      challenge4(function () {

        console.log("Coding Done")

      })
    })
  })
})
