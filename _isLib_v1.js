let struct = {
  name: (String() || "_"),
  age: (Number() || Number(1)),
  isEmployed: (Boolean() || !Boolean()),
  /* ^1 : other types with placeholder values e.g. function, array, object itself */
}

function err() {
  console.error("invalid JavaScript type")
}

// BEWARE : in JavaScript Boolean shortcuts [ISSUE TO SOLVED]
function is(type){
  if (false) {/* switch to else if :....... */}
  else if (typeof this.string == typeof type) {
    //console.log("correct, it's a type of: ")
      return "string";
  }
  else if (typeof this.number == typeof type) {
    //console.log("correct, it's a type of: ")
      return "number";
  }
  else if (typeof this.boolean == typeof type) {
    //console.log("correct, it's a type of: ")
      return "boolean";
  }
  // logic flow of the remaining JavaScript types (refer to ^1 above)
  else {
      err()
      return false;
  }
}

// [TESTING BLOCK PASSED]
//   let res1 = is.call(struct, "Hello")
//   console.log(res1)
// let res2 = is.call(struct, 123)
// console.log(res2)
// let res31 = is.call(struct, false)
// console.log(res31)
// let res32 = is.call(struct, true)
// console.log(res32)

// IMPROVEMENT : BYPASS .CALL() METHOD INVOCATION
function _is(/* _targetStruct, */ _type){
  return is.call(/* _targetStruct, */ struct, _type);
}

//   // EXAMPLE 1 : compare the pairs
//   function pairValidator($1, $2){
//     console.log($1 == $2) // == : check by type only, value may en will differ
//   }
//   pairValidator(_is(parseInt("5"/* , 2 [default] */)), _is(101)) // expected # true
//   pairValidator(_is("123"), _is("Hello world")) // expected # true
//   pairValidator(_is(false), _is(true)) // expected # true
//   pairValidator(_is(parseInt("101", 10)), _is("101")) // expected # false
//   pairValidator(_is(123), _is("Hello world")) // expected # false
//   pairValidator(_is("false"), _is(true)) // expected # false
  
function checker(_is, T, ...rest) {
  if (_is == T) {
    console.log("expected type", rest)
  }
  else {
    err()
  }
}

// EXAMPLE 2 : if passed, returned rest values of expected type T
console.log("test1: ")
checker(_is(/* struct,  */'123'), 'number', 12, 13, 14)
console.log("test2: ")
checker(_is(/* struct,  */123), 'number', 12, 13, 14)
