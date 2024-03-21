const globalVar = 1;

function firstFunc() {
  const firstVar = 2;

  function secondFunc() {
    const secondVar = 3;

    return secondVar + firstVar + globalVar;
  }

  const resultFromSecondFunc = secondFunc();

  return resultFromSecondFunc;
}

firstFunc();




// Write your solution in this file!

// A global ariable

var customerName = 'bob';

//modifies the customerName variable

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    console.log(customerName);
}


//setBestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'
    console.log(bestCustomer)
}


//overwrites the best customer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
    console.log(bestCustomer);
}

//unsuccessfully tries to reassign the least favorite customer
function changeLeastFavoriteCustomer() {
    const leastFavouriteCustomer = 'Dennis';
    leastFavouriteCustomer = 'Jane'
    console.log(leastFavouriteCustomer);
}
changeLeastFavoriteCustomer()