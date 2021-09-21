function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function excellent() {};
  
}

function returnsAnAnonymousFunction() {
  return function() {};
}